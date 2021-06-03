DROP VIEW notifications;
DROP PROCEDURE get_notifications_list;
DROP PROCEDURE get_notifications_list_station_id;
DROP PROCEDURE get_notifications_list_quadtree;
DROP PROCEDURE get_notifications_list_quadtree_and_station_id;
DROP TRIGGER it2s_db.speed_limit_trigger1;
DROP TRIGGER it2s_db.speed_limit_trigger2;
GO
CREATE VIEW notifications
AS
      SELECT perceived_object_emitter as emitter_id,
      perceived_object_timestamp as event_timestamp,
      PerceivedObject.perceived_object_id as [object_id],
      latitude,
      longitude,
      quadtree,
      [description]
    FROM it2s_db.Notification1
      JOIN it2s_db.PerceivedObject ON perceived_object_emitter = PerceivedObject.cpm_station_id
        and perceived_object_timestamp = PerceivedObject.event_timestamp
        and Notification1.perceived_object_id = PerceivedObject.perceived_object_id
      join it2s_db.Status on Notification1.status_id = Status.id
  union
    SELECT cam_emitter_station_id as emitter_id,
      cam_event_timestamp as event_timestamp,
      object_id=null,
      latitude,
      longitude,
      quadtree,
      [description]
    FROM it2s_db.Notification2
      JOIN it2s_db.CAM ON cam_emitter_station_id = station_id
        and cam_event_timestamp = event_timestamp
      join it2s_db.Status on Notification2.status_id = Status.id;
GO
CREATE PROCEDURE get_notifications_list
  @start_time bigint,
  @end_time bigint
AS
SELECT *
FROM notifications
where event_timestamp between @start_time and @end_time
GO
CREATE PROCEDURE get_notifications_list_station_id
  @start_time bigint,
  @end_time bigint,
  @in_emitter_id bigint
AS
SELECT *
FROM notifications
where notifications.emitter_id = @in_emitter_id
  and notifications.event_timestamp between @start_time and @end_time
GO
CREATE PROCEDURE get_notifications_list_quadtree
  @start_time bigint,
  @end_time bigint,
  @location_quadtree bigint
AS
SELECT *
FROM notifications
where notifications.quadtree = @location_quadtree and notifications.event_timestamp between @start_time and @end_time
GO
CREATE PROCEDURE get_notifications_list_quadtree_and_station_id
  @start_time bigint,
  @end_time bigint,
  @in_emitter_id bigint,
  @location_quadtree bigint
AS
SELECT *
FROM notifications
where notifications.emitter_id = @in_emitter_id
  and notifications.quadtree = @location_quadtree
  and notifications.event_timestamp between @start_time and @end_time
GO
CREATE TRIGGER it2s_db.speed_limit_trigger1 ON it2s_db.PerceivedObject
AFTER INSERT
AS
	BEGIN
  DECLARE @to_insert 
		table(
    perceived_object_emitter bigint,
    perceived_object_timestamp bigint,
    perceived_object_id int,
    status_id int
		);
  insert into @to_insert
  SELECT
    cpm_station_id as perceived_object_emitter,
    event_timestamp as perceived_object_timestamp,
    perceived_object_id as perceived_object_id,
    status_id=0
  from it2s_db.PerceivedObject
  where abs_speed > 3333;
  -- 120Km/h ~= 3333cm/s
  INSERT INTO it2s_db.Notification1
  SELECT *
  FROM @to_insert
END;
GO
CREATE TRIGGER it2s_db.speed_limit_trigger2 ON it2s_db.CAM
AFTER INSERT
AS
	BEGIN
  DECLARE @to_insert 
		table(
    cam_emitter_station_id bigint,
    cam_event_timestamp bigint,
    status_id int
		);
  insert into @to_insert
  SELECT
    station_id as cam_emitter_station_id,
    event_timestamp as cam_event_timestamp,
    status_id=0
  from it2s_db.CAM
  where speed > 3333;
  -- 120Km/h ~= 3333cm/s
  INSERT INTO it2s_db.Notification2
  SELECT *
  FROM @to_insert
END;
GO