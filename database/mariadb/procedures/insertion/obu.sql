DROP PROCEDURE `insert_obu`;

DELIMITER $$

CREATE PROCEDURE `insert_obu`(
  IN `emitter_id` INT,
  IN `app_version` INT,
  IN `power_status` INT
) BEGIN
insert into it2s_db.Emitter values(`emitter_id`, `app_version`) on duplicate key update `current_app_version` = `app_version`;
insert into it2s_db.OBU values(`emitter_id`, `power_status`) on duplicate key update `last_power_status` = `power_status`;
END $$


DELIMITER ;
