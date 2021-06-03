DROP PROCEDURE `get_smartphone_list`;
DROP PROCEDURE `get_smartphone_list_emitter_id`;

DELIMITER $$

CREATE PROCEDURE get_smartphone_list()
BEGIN
  SELECT
    Smartphone.emitter_station_id as emitter_id,
    last_power_status, 
    configured_language 
  from it2s_db.Smartphone
  JOIN it2s_db.App on Smartphone.emitter_station_id = App.emitter_station_id;
END $$

CREATE PROCEDURE get_smartphone_list_emitter_id(`id` bigint)
BEGIN
  SELECT 
    Smartphone.emitter_station_id as emitter_id,
    last_power_status, 
    configured_language 
  from it2s_db.Smartphone 
  JOIN it2s_db.App on Smartphone.emitter_station_id = App.emitter_station_id
  where Smartphone.emitter_station_id = `id`;
END $$
DELIMITER ;