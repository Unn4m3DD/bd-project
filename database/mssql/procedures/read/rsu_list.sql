DROP PROCEDURE get_rsu_list;
DROP PROCEDURE get_rsu_list_emitter_id;
GO
CREATE PROCEDURE get_rsu_list 
AS
SELECT emitter_station_id as emitter_id,
      latitude, longitude from it2s_db.RSU
GO
CREATE PROCEDURE get_rsu_list_emitter_id @id bigint 
AS
SELECT emitter_station_id as emitter_id,
      latitude, longitude from it2s_db.RSU where emitter_station_id = @id;