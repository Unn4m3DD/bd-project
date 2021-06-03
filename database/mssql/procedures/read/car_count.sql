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
    from it2s_db.PerceivedObject
    where event_timestamp between 1622306000 and 1622306010
      and cpm_station_id = 10
    order by event_timestamp
  ) as inner_table
where diff > 3 or diff is NULL;
select count(distinct perceived_object_id)
from it2s_db.PerceivedObject
where event_timestamp between 1622306000 and 1622306010
  and cpm_station_id = 10
  ;
*/

DROP PROCEDURE get_car_count_quadtree_and_station_id;
DROP PROCEDURE get_car_count_station_id;
DROP PROCEDURE get_car_count_quadtree;
DROP PROCEDURE get_car_count;
GO
CREATE PROCEDURE get_car_count_quadtree_and_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT,
  @in_station_id BIGINT
AS
select count(*) as value
from (
    select (
        event_timestamp - LAG(event_timestamp) OVER(
          PARTITION BY cpm_station_id,
          perceived_object_id
          order by event_timestamp
        )
      ) as diff
  from it2s_db.PerceivedObject
  where 
          event_timestamp between @time_start and @time_end
    and cpm_station_id = @in_station_id
    and quadtree between @quadtree_start and @quadtree_end 
  ) as inner_table
where diff > 3 or diff is NULL
GO
CREATE PROCEDURE get_car_count_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @in_station_id BIGINT
AS
select count(*) as value
from (
    select (
        event_timestamp - LAG(event_timestamp) OVER(
          PARTITION BY cpm_station_id,
          perceived_object_id
          order by event_timestamp
        )
      ) as diff
  from it2s_db.PerceivedObject
  where 
          event_timestamp between @time_start and @time_end
    and cpm_station_id = @in_station_id 
  ) as inner_table
where diff > 3 or diff is NULL
GO
CREATE PROCEDURE get_car_count_quadtree
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT
AS
select count(*) as value
from (
    select (
        event_timestamp - LAG(event_timestamp) OVER(
          PARTITION BY cpm_station_id,
          perceived_object_id
          order by event_timestamp
        )
      ) as diff
  from it2s_db.PerceivedObject
  where 
          event_timestamp between @time_start and @time_end
    and quadtree between @quadtree_start and @quadtree_end 
  ) as inner_table
where diff > 3 or diff is NULL
GO
CREATE PROCEDURE get_car_count
  @time_start BIGINT,
  @time_end BIGINT
AS
select count(*) as value
from (
    select (
        event_timestamp - LAG(event_timestamp) OVER(
          PARTITION BY cpm_station_id,
          perceived_object_id
          order by event_timestamp
        )
      ) as diff
  from it2s_db.PerceivedObject
  where 
          event_timestamp between @time_start and @time_end
  ) as inner_table
where diff > 3 or diff is NULL;