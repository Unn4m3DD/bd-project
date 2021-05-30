DROP PROCEDURE `insert_vam`;

DELIMITER $$

CREATE PROCEDURE `insert_vam`( 
  IN `emitter_id` INT, 
  IN `timestamp` INT, 
  IN `station_type` INT, 
  IN `latitude` INT, 
  IN `longitude` INT, 
  IN `quadtree` BIGINT
) BEGIN
insert into it2s_db.VAM values(`emitter_id`, `timestamp`, `station_type`, `latitude`, `longitude`, `quadtree`);
END $$
DELIMITER ;