DROP PROCEDURE `update_vanm`;

DELIMITER $$

CREATE PROCEDURE `update_vanm`( 
  IN `emitter_id` INT, 
  IN `app_version` INT, 
  IN `last_power_status` INT, 
  IN `lang` CHAR(2)
) BEGIN
update it2s_db.Emitter set current_app_version=`app_version` where  station_id = `emitter_id`;
update it2s_db.App set configured_language=`lang` where  emitter_station_id = `emitter_id`;
update it2s_db.Smartphone set last_power_status=`last_power_status` where  emitter_station_id = `emitter_id`;
END $$
DELIMITER ;