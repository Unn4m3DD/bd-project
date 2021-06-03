DROP PROCEDURE `get_notifications_list`;
DROP PROCEDURE `get_notifications_list_station_id`;
DROP PROCEDURE `get_notifications_list_quadtree`;
DROP PROCEDURE `get_notifications_list_quadtree_and_station_id`;


DELIMITER $$

CREATE PROCEDURE get_notifications_list (
  `start_time` bigint, 
  `end_time` bigint
) 
BEGIN
SELECT * FROM notifications
where event_timestamp between `start_time` and `end_time`;
END $$


CREATE PROCEDURE get_notifications_list_station_id (
  `start_time` bigint, 
  `end_time` bigint, 
  `in_emitter_id` bigint
)
BEGIN
SELECT * FROM notifications
where notifications.emitter_id = `in_emitter_id` 
and notifications.event_timestamp between `start_time` and `end_time`;
END $$



CREATE PROCEDURE get_notifications_list_quadtree (
  `start_time` bigint, 
  `end_time` bigint, 
  `quadtree_start` bigint,
  `quadtree_end` bigint
)
BEGIN
SELECT * FROM notifications
where notifications.event_timestamp between `start_time` and `end_time`
  and notifications.quadtree between `quadtree_start` and `quadtree_end`;
END $$


INSERT INTO it2s_db.Status VALUES(0, 'Vehicle going above 120 Km/h');

CREATE PROCEDURE get_notifications_list_quadtree_and_station_id (
  `start_time` bigint, 
  `end_time` bigint,
  `in_emitter_id` bigint, 
  `quadtree_start` bigint,
  `quadtree_end` bigint
)
BEGIN
  SELECT * from notifications
  where notifications.emitter_id = `in_emitter_id`
  and notifications.quadtree between `quadtree_start` and `quadtree_end`
  and notifications.event_timestamp between `start_time` and `end_time`;
END $$


DELIMITER ;