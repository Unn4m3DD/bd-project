DROP PROCEDURE get_obu_list;
DROP PROCEDURE get_obu_list_emitter_id;
GO
CREATE PROCEDURE get_obu_list
AS
SELECT emitter_station_id as emitter_id,
      last_power_status
from it2s_db.OBU
GO
CREATE PROCEDURE get_obu_list_emitter_id
      @id bigint
AS
SELECT emitter_station_id as emitter_id,
      last_power_status
from it2s_db.OBU
where emitter_station_id = @id;