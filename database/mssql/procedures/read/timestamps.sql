DROP PROCEDURE get_timestamps;
DROP PROCEDURE get_timestamps_between;
GO
CREATE PROCEDURE get_timestamps
AS
select 
  event_timestamp
from
  (select distinct event_timestamp, 
    (lag(event_timestamp) over (order by event_timestamp)) as prev,
    (lead(event_timestamp) over (order by event_timestamp)) as [next]
  from (
      (select event_timestamp from it2s_db.CPM) union 
      (select event_timestamp from it2s_db.CAM) union 
      (select event_timestamp from it2s_db.VAM) union 
      (select event_timestamp from it2s_db.DENM)
    ) as tmp
  ) as tmp2
where 
  prev != (event_timestamp - 1) or
  [next] != (event_timestamp + 1)
GO
CREATE PROCEDURE get_timestamps_between @time_start BIGINT, @time_end BIGINT
AS
select 
  event_timestamp
from
  (select distinct event_timestamp, 
    (lag(event_timestamp) over (order by event_timestamp)) as prev,
    (lead(event_timestamp) over (order by event_timestamp)) as [next]
  from (
      (select event_timestamp from it2s_db.CPM  where event_timestamp between @time_start and @time_end) union 
      (select event_timestamp from it2s_db.CAM  where event_timestamp between @time_start and @time_end) union 
      (select event_timestamp from it2s_db.VAM  where event_timestamp between @time_start and @time_end) union 
      (select event_timestamp from it2s_db.DENM where event_timestamp between @time_start and @time_end)
    ) as tmp
  ) as tmp2
where 
  prev != (event_timestamp - 1) or
  [next] != (event_timestamp + 1);
