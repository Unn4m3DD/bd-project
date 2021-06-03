DROP PROCEDURE `insert_vam`;

DELIMITER $$

CREATE PROCEDURE `insert_vam`( 
  IN `emitter_id` BIGINT, 
  IN `timestamp` BIGINT, 
  IN `station_type` int, 
  IN `latitude` BIGINT, 
  IN `longitude` BIGINT, 
  IN `quadtree` BIGINT
) BEGIN
insert into it2s_db.VAM values(`emitter_id`, `timestamp`, `station_type`, `latitude`, `longitude`, `quadtree`);
END $$
DELIMITER ;