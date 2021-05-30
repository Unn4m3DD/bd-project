DROP PROCEDURE `insert_obu`;

DELIMITER $$

CREATE PROCEDURE `insert_obu`(
  IN emitter_id INT,
  IN app_version INT,
  IN last_power_status INT
) BEGIN
insert into it2s_db.Emitter values(emitter_id, app_version);
insert into it2s_db.OBU values(emitter_id, last_power_status);
END $$


DELIMITER ;
