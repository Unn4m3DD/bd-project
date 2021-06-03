DROP PROCEDURE get_car_average_speed_quadtree_and_station_id;
DROP PROCEDURE get_car_average_speed_quadtree;
DROP PROCEDURE get_car_average_speed_station_id;
DROP PROCEDURE get_car_average_speed;
GO
CREATE PROCEDURE get_car_average_speed_quadtree_and_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT,
  @in_station_id BIGINT
AS
select
  AVG(abs_speed) as value
from it2s_db.PerceivedObject
where 
      event_timestamp between @time_start and @time_end
  and cpm_station_id = @in_station_id
  and quadtree between @quadtree_start and @quadtree_end
GO
CREATE PROCEDURE get_car_average_speed_quadtree
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT
AS
select
  AVG(abs_speed) as value
from it2s_db.PerceivedObject
where 
      event_timestamp between @time_start and @time_end
  and quadtree between @quadtree_start and @quadtree_end
GO
CREATE PROCEDURE get_car_average_speed_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @in_station_id BIGINT
AS
select
  AVG(abs_speed) as value
from it2s_db.PerceivedObject
where 
      event_timestamp between @time_start and @time_end
  and cpm_station_id = @in_station_id
GO
CREATE PROCEDURE get_car_average_speed
  @time_start BIGINT,
  @time_end BIGINT
AS
select
  AVG(abs_speed) as value
from it2s_db.PerceivedObject
where 
      event_timestamp between @time_start and @time_end;


