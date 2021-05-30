DROP PROCEDURE `update_rsu`;

DELIMITER $$

CREATE PROCEDURE `update_rsu`( 
  IN `emitter_id` INT, 
  IN `latitude` INT, 
  IN `longitude` INT, 
  IN `app_version` INT
) BEGIN
update it2s_db.Emitter set current_app_version=`app_version` where station_id = `emitter_id`;
update it2s_db.RSU set latitude=`latitude`, longitude=`longitude` where emitter_station_id = `emitter_id`;
END $$
DELIMITER ;