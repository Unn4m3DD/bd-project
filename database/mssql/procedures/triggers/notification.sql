DROP TRIGGER it2s_db.speed_limit_trigger1;
DROP TRIGGER it2s_db.speed_limit_trigger2;
GO
CREATE TRIGGER it2s_db.speed_limit_trigger1 ON it2s_db.PerceivedObject
AFTER INSERT
AS
  -- 140Km/h ~= 3888cm/s
  INSERT INTO it2s_db.Notification1
SELECT
  cpm_station_id as perceived_object_emitter,
  event_timestamp as perceived_object_timestamp,
  perceived_object_id as perceived_object_id,
  status_id=0
from inserted
where abs_speed > 3888;
GO
CREATE TRIGGER it2s_db.speed_limit_trigger2 ON it2s_db.CAM
AFTER INSERT
AS

  -- 140Km/h ~= 3888cm/s
  INSERT INTO it2s_db.Notification2
SELECT
  station_id as cam_emitter_station_id,
  event_timestamp as cam_event_timestamp,
  status_id=0
from inserted
where speed > 3888;
GO
