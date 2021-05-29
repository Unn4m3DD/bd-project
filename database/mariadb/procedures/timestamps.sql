DROP PROCEDURE `get_timestamps`;
DELIMITER $$

CREATE PROCEDURE `get_timestamps`() BEGIN
select 
  event_timestamp
from
  (select distinct event_timestamp, 
    (lag(event_timestamp) over (order by event_timestamp)) as prev,
    (lead(event_timestamp) over (order by event_timestamp)) as `next`
  from (
      (select event_timestamp from CPM) union 
      (select event_timestamp from CAM) union 
      (select event_timestamp from VAM) union 
      (select event_timestamp from DENM)
    ) as tmp
  ) as tmp2
where 
  prev != (event_timestamp - 1) or
  `next` != (event_timestamp + 1);
END $$


CREATE PROCEDURE `get_timestamps_between`(
  IN start_time INT,
  IN end_time INT
) BEGIN
select 
  event_timestamp
from
  (select distinct event_timestamp, 
    (lag(event_timestamp) over (order by event_timestamp)) as prev,
    (lead(event_timestamp) over (order by event_timestamp)) as `next`
  from (
      (select event_timestamp from CPM  where event_timestamp between start_time and end_time) union 
      (select event_timestamp from CAM  where event_timestamp between start_time and end_time) union 
      (select event_timestamp from VAM  where event_timestamp between start_time and end_time) union 
      (select event_timestamp from DENM where event_timestamp between start_time and end_time)
    ) as tmp
  ) as tmp2
where 
  prev != (event_timestamp - 1) or
  `next` != (event_timestamp + 1);
END $$

DELIMITER ;
