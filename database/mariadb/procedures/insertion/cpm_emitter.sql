DROP PROCEDURE `insert_rsu`;

DELIMITER $$
CREATE PROCEDURE `insert_rsu`(
  IN `emitter_id` INT,
  IN `app_version` INT, 
  IN `latitude` INT, 
  IN `longitude` INT
) BEGIN 
  insert into it2s_db.Emitter values(`emitter_id`, `app_version`);
  insert into it2s_db.RSU values(`emitter_id`, `latitude`, `longitude`);
END $$
DELIMITER ;