DROP PROCEDURE `insert_cam`;

DELIMITER $$

CREATE PROCEDURE `insert_cam`(
  IN `emitter_id` INT, 
  IN `timestamp` INT, 
  IN `station_type` INT, 
  IN `abs_speed` INT, 
  IN `latitude` INT, 
  IN `longitude` INT, 
  IN `quadtree` BIGINT
) BEGIN
insert into CAM values(`emitter_id`, `timestamp`, `station_type`, `abs_speed`, `latitude`, `longitude`, `quadtree`);
END $$
DELIMITER ;