DROP PROCEDURE `get_people_count_quadtree`;
DROP PROCEDURE `get_people_count`;


DELIMITER $$

CREATE PROCEDURE `get_people_count_quadtree`(
  IN `time_start` BIGINT,
  IN `time_end` BIGINT,
  IN `quadtree_start` BIGINT,
  IN `quadtree_end` BIGINT
) BEGIN
  select 
    count(distinct emitter_station_id) as `value`
  from VAM
  where event_timestamp between `time_start` and `time_end`
    and quadtree between `quadtree_start` and `quadtree_end`;
END $$

CREATE PROCEDURE `get_people_count`(
  IN `time_start` BIGINT,
  IN `time_end` BIGINT
) BEGIN
  select 
    count(distinct emitter_station_id) as `value`
  from VAM
  where event_timestamp between `time_start` and `time_end`;
END $$

DELIMITER ; 