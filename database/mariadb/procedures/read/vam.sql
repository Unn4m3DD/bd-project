DROP PROCEDURE `get_vams_station_id`;
DROP PROCEDURE `get_vams`;
DROP PROCEDURE `get_vams_quadtree`;
DROP PROCEDURE `get_vams_quadtree_and_station_id`;

DELIMITER $$

CREATE PROCEDURE `get_vams`(
  IN time_start BIGINT,
  IN time_end BIGINT
) BEGIN
select 
  VAM.event_timestamp as `timestamp`,
  VAM.emitter_station_id as station_id,
  VAM.longitude as longitude,
  VAM.latitude as latitude,
  VAM.station_type as station_type
from  
  VAM 
where 
  VAM.event_timestamp between time_start and time_end
  ;
END $$


CREATE PROCEDURE `get_vams_station_id`(
  IN time_start BIGINT,
  IN time_end BIGINT,
  IN in_station_id BIGINT
) BEGIN
select 
  VAM.event_timestamp as `timestamp`,
  VAM.emitter_station_id as station_id,
  VAM.longitude as longitude,
  VAM.latitude as latitude,
  VAM.station_type as station_type
from  
  VAM 
where 
  VAM.event_timestamp between time_start and time_end and
  in_station_id = emitter_station_id 
  ;
END $$



CREATE PROCEDURE `get_vams_quadtree`(
  IN time_start BIGINT,
  IN time_end BIGINT,
  IN quadtree_start BIGINT,
  IN quadtree_end BIGINT
) BEGIN
select 
  VAM.event_timestamp as `timestamp`,
  VAM.emitter_station_id as station_id,
  VAM.longitude as longitude,
  VAM.latitude as latitude,
  VAM.station_type as station_type
from  
  VAM 
where 
  VAM.event_timestamp between time_start and time_end and
  quadtree between quadtree_start and quadtree_end
  ;
END $$



CREATE PROCEDURE `get_vams_quadtree_and_station_id`(
  IN time_start BIGINT,
  IN time_end BIGINT,
  IN quadtree_start BIGINT,
  IN quadtree_end BIGINT,
  IN in_station_id BIGINT
) BEGIN
select 
  VAM.event_timestamp as `timestamp`,
  VAM.emitter_station_id as station_id,
  VAM.longitude as longitude,
  VAM.latitude as latitude,
  VAM.station_type as station_type
from  
  VAM 
where 
  VAM.event_timestamp between time_start and time_end and
  in_station_id = emitter_station_id and 
  quadtree between quadtree_start and quadtree_end
  ;
END $$

DELIMITER ;
