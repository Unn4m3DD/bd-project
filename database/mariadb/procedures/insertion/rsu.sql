DROP PROCEDURE `insert_rsu`;

DELIMITER $$
CREATE PROCEDURE `insert_rsu`(
  IN `emitter_id` INT,
  IN `app_version` INT, 
  IN `in_latitude` INT, 
  IN `in_longitude` INT
) BEGIN 
  insert into it2s_db.Emitter values(`emitter_id`, `app_version`) 
    on duplicate key update `current_app_version` = `app_version`;
  insert into it2s_db.RSU values(`emitter_id`, `in_latitude`, `in_longitude`) 
    on duplicate key update `latitude` = `in_latitude`,
                            `longitude` = `in_longitude`;
END $$
DELIMITER ;