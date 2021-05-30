DROP PROCEDURE `insert_denm`;

DELIMITER $$

CREATE PROCEDURE `insert_denm`( 
  IN `emitter_id` INT, 
  IN `app_version` INT, 
  IN `lang` CHAR(2)
) BEGIN
update it2s_db.Emitter set current_app_version=`app_version` where  station_id = `emitter_id`;
update it2s_db.App set configured_language=`lang` where emitter_station_id = station_id = `emitter_id`;
END $$
DELIMITER ;