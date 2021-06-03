DROP PROCEDURE `get_denms_station_id`;
DROP PROCEDURE `get_denms`;
DROP PROCEDURE `get_denms_quadtree`;
DROP PROCEDURE `get_denms_quadtree_and_station_id`; 

DELIMITER $$
CREATE PROCEDURE get_denms (
  `time_start` BIGINT, 
  `time_end` BIGINT
)
BEGIN
select 
  DENM.event_timestamp as `timestamp`,
  DENM.emitter_station_id as station_id,
  DENM.cause_code as cause_code,
  DENM.sub_cause_code as sub_cause_code,
  DENM.longitude as longitude,
  DENM.latitude as latitude,
  DENM.duration as duration
from  
  it2s_db.DENM
where 
  DENM.event_timestamp between `time_start` and `time_end`;

END $$


CREATE PROCEDURE get_denms_station_id (
  `time_start` BIGINT, 
  `time_end` BIGINT, in_station_id INT
) BEGIN
select 
  DENM.event_timestamp as `timestamp`,
  DENM.emitter_station_id as station_id,
  DENM.cause_code as cause_code,
  DENM.sub_cause_code as sub_cause_code,
  DENM.longitude as longitude,
  DENM.latitude as latitude,
  DENM.duration as duration
from  
  it2s_db.DENM
where 
  DENM.event_timestamp between `time_start` and `time_end` and
  `in_station_id` = emitter_station_id;
END $$


CREATE PROCEDURE get_denms_quadtree (
  `time_start` BIGINT, 
  `time_end` BIGINT, 
  `quadtree_start` BIGINT, 
  `quadtree_end` BIGINT
) BEGIN
select 
  DENM.event_timestamp as `timestamp`,
  DENM.emitter_station_id as station_id,
  DENM.cause_code as cause_code,
  DENM.sub_cause_code as sub_cause_code,
  DENM.longitude as longitude,
  DENM.latitude as latitude,
  DENM.duration as duration
from  
  it2s_db.DENM 
where 
  DENM.event_timestamp between `time_start` and `time_end` and
  quadtree between `quadtree_start` and `quadtree_end`;
END $$

CREATE PROCEDURE get_denms_quadtree_and_station_id (
  `time_start` BIGINT, 
  `time_end` BIGINT, 
  `quadtree_start` BIGINT, 
  `quadtree_end` BIGINT, 
  `in_station_id` BIGINT
) BEGIN
select 
  DENM.event_timestamp as `timestamp`,
  DENM.emitter_station_id as station_id,
  DENM.cause_code as cause_code,
  DENM.sub_cause_code as sub_cause_code,
  DENM.longitude as longitude,
  DENM.latitude as latitude,
  DENM.duration as duration
from  
  it2s_db.DENM 
where 
  DENM.event_timestamp between `time_start` and `time_end` and
  `in_station_id` = emitter_station_id and 
  quadtree between `quadtree_start` and `quadtree_end`;
END $$

DELIMITER ;