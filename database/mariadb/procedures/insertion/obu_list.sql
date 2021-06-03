DROP PROCEDURE `get_obu_list`;
DROP PROCEDURE `get_obu_list_emitter_id`;

DELIMITER $$

CREATE PROCEDURE `get_obu_list`()
BEGIN
SELECT emitter_station_id as emitter_id,
      last_power_status from it2s_db.OBU;
END $$


CREATE PROCEDURE `get_obu_list_emitter_id` (`id` bigint)
BEGIN
SELECT emitter_station_id as emitter_id,
      last_power_status from it2s_db.OBU where emitter_station_id = `id`;
END $$

DELIMITER ;
