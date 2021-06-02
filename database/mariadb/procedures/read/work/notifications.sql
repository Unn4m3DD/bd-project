DROP VIEW `notifications`; 
DROP PROCEDURE `notifications_list`;
DROP PROCEDURE `notifications_list_station_id`;
DROP PROCEDURE `notifications_list_quadtree`;
DROP PROCEDURE `notifications_list_quadtree_and_station_id`;

CREATE VIEW notifications
AS
SELECT perceived_object_emitter as emitter_id,
       perceived_object_timestamp as event_timestamp,
       PerceivedObject.perceived_object_id as `object_id`,
	   latitude,
	   longitude,
     quadtree,
     `description`
      FROM it2s_db.Notification1
      JOIN it2s_db.PerceivedObject ON perceived_object_emitter = PerceivedObject.cpm_station_id
      and perceived_object_timestamp = PerceivedObject.event_timestamp
      and Notification1.perceived_object_id = PerceivedObject.perceived_object_id
      join it2s_db.Status on Notification1.status_id = Status.id
    union
      SELECT cam_emitter_station_id as emitter_id,
        cam_event_timestamp as event_timestamp,
        null as `object_id`,
        latitude,
        longitude,
        quadtree,
        `description`
      FROM it2s_db.Notification2
      JOIN it2s_db.CAM ON cam_emitter_station_id = station_id
      and cam_event_timestamp = event_timestamp
      join it2s_db.Status on Notification2.status_id = Status.id;


DELIMITER $$

CREATE PROCEDURE get_notifications_list (
  `start_time` bigint, 
  `end_time` bigint
) 
BEGIN
SELECT * FROM notifications_list
where event_timestamp between `start_time` and `end_time`;
END $$


CREATE PROCEDURE get_notifications_list_station_id (
  `start_time` bigint, 
  `end_time` bigint, 
  `in_emitter_id` bigint
)
BEGIN
SELECT * FROM notifications_list
where notifications_list.emitter_id = `in_emitter_id` 
and notifications_list.event_timestamp between `start_time` and `end_time`;
END $$



CREATE PROCEDURE get_notifications_list_quadtree (
  `start_time` bigint, 
  `end_time` bigint, 
  `location_quadtree` bigint
)
BEGIN
SELECT * FROM notifications_list
where notifications_list.quadtree = `location_quadtree` and notifications_list.event_timestamp between `start_time` and `end_time`;
END $$



CREATE PROCEDURE get_notifications_list_quadtree_and_station_id (
  `start_time` bigint, 
  `end_time` bigint,
  `in_emitter_id` bigint, 
  `location_quadtree` bigint
)
BEGIN
  SELECT * notifications_list
  where notifications_list.emitter_id = `in_emitter_id`
  and notifications_list.quadtree = `location_quadtree`
  and notifications_list.event_timestamp between `start_time` and `end_time`;
END $$


DELIMITER ;