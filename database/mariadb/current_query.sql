select count(*)
from (
    select (
        event_timestamp - LAG(event_timestamp) OVER(
          PARTITION BY cpm_station_id,
          perceived_object_id
          order by event_timestamp
        )
      ) as diff
    from PerceivedObject
    where 
          event_timestamp between 1621172276 and 1621174276
      and cpm_station_id = 10 
    order by event_timestamp
  ) as inner_table
where diff > 3 or diff is NULL;