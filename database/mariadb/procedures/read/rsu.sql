DROP PROCEDURE `get_rsus_emitter_id`;
DROP PROCEDURE `get_rsus`;

DELIMITER $$

CREATE PROCEDURE `get_rsus_emitter_id`(
  IN `station_id` INT
) BEGIN
select emitter_station_id as station_id,latitude, longitude from it2s_db.RSU where emitter_station_id = `station_id`;
END $$


CREATE PROCEDURE `get_rsus`() BEGIN
select emitter_station_id as station_id,latitude, longitude from it2s_db.RSU;
END $$

DELIMITER ;
