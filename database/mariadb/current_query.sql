select 
  AVG(abs_speed)
from PerceivedObject
where 
      event_timestamp between 1621172276 and 1621174276
  and cpm_station_id = 10 
order by event_timestamp