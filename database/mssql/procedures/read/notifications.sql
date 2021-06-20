DROP PROCEDURE get_notifications_list;
DROP PROCEDURE get_notifications_list_station_id;
DROP PROCEDURE get_notifications_list_quadtree;
DROP PROCEDURE get_notifications_list_quadtree_and_station_id;
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

