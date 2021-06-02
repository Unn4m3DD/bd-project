DROP PROCEDURE smartphone_list;
DROP PROCEDURE smartphone_list_emitter_id;
GO
CREATE PROCEDURE smartphone_list 
AS
  SELECT Smartphone.emitter_station_id as emitter_id,
        last_power_status, configured_language from it2s_db.Smartphone
  JOIN it2s_db.App on Smartphone.emitter_station_id = App.emitter_station_id
GO
CREATE PROCEDURE smartphone_list_emitter_id @id int 
AS
SELECT Smartphone.emitter_station_id as emitter_id,
      last_power_status, configured_language from it2s_db.Smartphone 
      JOIN it2s_db.App on Smartphone.emitter_station_id = App.emitter_station_id
      where Smartphone.emitter_station_id = @id;