/*
--auxiliary query explaining the logic behind the query
select count(*) as value
from (
    select (
        event_timestamp - LAG(event_timestamp) OVER(
          PARTITION BY cpm_station_id,
          perceived_object_id
          order by event_timestamp
        )
      ) as diff
    from PerceivedObject
    where event_timestamp between 1622306000 and 1622306010
      and cpm_station_id = 10
    order by event_timestamp
  ) as inner_table
where diff > 3 or diff is NULL;
select count(distinct perceived_object_id)
from PerceivedObject
where event_timestamp between 1622306000 and 1622306010
  and cpm_station_id = 10
  ;
*/

DROP PROCEDURE `get_car_count_quadtree_and_station_id`;
DROP PROCEDURE `get_car_count_station_id`;
DROP PROCEDURE `get_car_count_quadtree`;
DROP PROCEDURE `get_car_count`;

DELIMITER $$

CREATE PROCEDURE `get_car_count_quadtree_and_station_id`(
  IN `time_start` BIGINT,
  IN `time_end` BIGINT,
  IN `quadtree_start` BIGINT,
  IN `quadtree_end` BIGINT,
  IN `in_station_id` BIGINT
) BEGIN

select count(*) as value
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
          event_timestamp between `time_start` and `time_end`
      and cpm_station_id = `in_station_id` 
      and quadtree between `quadtree_start` and `quadtree_end` 
  ) as inner_table
where diff > 3 or diff is NULL;


END $$


CREATE PROCEDURE `get_car_count_station_id`(
  IN `time_start` BIGINT,
  IN `time_end` BIGINT,
  IN `in_station_id` BIGINT
) BEGIN

select count(*) as value
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
          event_timestamp between `time_start` and `time_end`
      and cpm_station_id = `in_station_id` 
  ) as inner_table
where diff > 3 or diff is NULL;


END $$


CREATE PROCEDURE `get_car_count_quadtree`(
  IN `time_start` BIGINT,
  IN `time_end` BIGINT,
  IN `quadtree_start` BIGINT,
  IN `quadtree_end` BIGINT
) BEGIN

select count(*) as value
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
          event_timestamp between `time_start` and `time_end`
      and quadtree between `quadtree_start` and `quadtree_end` 
  ) as inner_table
where diff > 3 or diff is NULL;


END $$

CREATE PROCEDURE `get_car_count`(
  IN `time_start` BIGINT,
  IN `time_end` BIGINT
) BEGIN

select count(*) as value
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
          event_timestamp between `time_start` and `time_end`
  ) as inner_table
where diff > 3 or diff is NULL;


END $$

DELIMITER ;
