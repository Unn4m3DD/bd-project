DROP PROCEDURE `get_car_average_speed_quadtree_and_station_id`;
DROP PROCEDURE `get_car_average_speed_quadtree`;
DROP PROCEDURE `get_car_average_speed_station_id`;
DROP PROCEDURE `get_car_average_speed`;

DELIMITER $$

CREATE PROCEDURE `get_car_average_speed_quadtree_and_station_id`(
  IN `time_start` BIGINT,
  IN `time_end` BIGINT,
  IN `quadtree_start` BIGINT,
  IN `quadtree_end` BIGINT,
  IN `in_station_id` BIGINT
) BEGIN
select 
  AVG(abs_speed) as value
from PerceivedObject
where 
      event_timestamp between `time_start` and `time_end`
  and cpm_station_id = `in_station_id` 
  and quadtree between `quadtree_start` and `quadtree_end`;

END $$


CREATE PROCEDURE `get_car_average_speed_quadtree`(
  IN `time_start` BIGINT,
  IN `time_end` BIGINT,
  IN `quadtree_start` BIGINT,
  IN `quadtree_end` BIGINT
) BEGIN
select 
  AVG(abs_speed) as value
from PerceivedObject
where 
      event_timestamp between `time_start` and `time_end`
  and quadtree between `quadtree_start` and `quadtree_end`;

END $$

CREATE PROCEDURE `get_car_average_speed_station_id`(
  IN `time_start` BIGINT,
  IN `time_end` BIGINT,
  IN `in_station_id` BIGINT
) BEGIN
select 
  AVG(abs_speed) as value
from PerceivedObject
where 
      event_timestamp between `time_start` and `time_end`
  and cpm_station_id = `in_station_id`;

END $$


CREATE PROCEDURE `get_car_average_speed`(
  IN `time_start` BIGINT,
  IN `time_end` BIGINT
) BEGIN
select 
  AVG(abs_speed) as value
from PerceivedObject
where 
      event_timestamp between `time_start` and `time_end`;

END $$
DELIMITER ;
