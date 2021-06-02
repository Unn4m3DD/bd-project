DROP PROCEDURE rsu_list;
DROP PROCEDURE rsu_list_emitter_id;
GO
CREATE PROCEDURE rsu_list 
AS
SELECT emitter_station_id as emitter_id,
      latitude, longitude from it2s_db.RSU
GO
CREATE PROCEDURE rsu_list_emitter_id @id int 
AS
SELECT emitter_station_id as emitter_id,
      latitude, longitude from it2s_db.RSU where emitter_station_id = @id;