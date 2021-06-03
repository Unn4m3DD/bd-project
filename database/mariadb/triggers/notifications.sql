DROP TRIGGER speed_limit_trigger1;
DROP TRIGGER speed_limit_trigger2;

DELIMITER $$

CREATE TRIGGER speed_limit_trigger1 
AFTER INSERT ON PerceivedObject
FOR EACH ROW
BEGIN
  if(new.abs_speed > 3888) then-- 140Km/h ~= 3888/s
    INSERT INTO Notification1 values (
      new.cpm_station_id,
      new.event_timestamp,
      new.perceived_object_id,
      0
    );
  end if;
END $$

CREATE TRIGGER speed_limit_trigger2
AFTER INSERT ON CAM
FOR EACH ROW
BEGIN

  if new.speed > 3888 then -- 140Km/h ~= 3888/s
    INSERT INTO Notification2 values (
      new.station_id,
      new.event_timestamp,
      0
    );
  end if;
END $$

DELIMITER ;