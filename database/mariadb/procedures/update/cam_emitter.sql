DROP PROCEDURE `update_obu`;

DELIMITER $$

CREATE PROCEDURE `update_obu`(
  IN `emitter_id` INT, 
  IN `app_version` INT, 
  IN `last_power_status` INT
) BEGIN 
update it2s_db.Emitter set current_app_version=`app_version` where station_id = `emitter_id`;
update it2s_db.OBU set last_power_status=`last_power_status` where  emitter_station_id = `emitter_id`;
END $$
DELIMITER ;