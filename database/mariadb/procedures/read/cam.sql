DROP PROCEDURE `get_cams_station_id`;
DROP PROCEDURE `get_cams`;
DROP PROCEDURE `get_cams_quadtree`;
DROP PROCEDURE `get_cams_quadtree_and_station_id`;

DELIMITER $$

CREATE PROCEDURE `get_cams`(
  IN time_start BIGINT,
  IN time_end BIGINT
) BEGIN
select 
  CAM.event_timestamp as `timestamp`,
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from  
  CAM 
where 
  CAM.event_timestamp between time_start and time_end
  ;
END $$


CREATE PROCEDURE `get_cams_station_id`(
  IN time_start BIGINT,
  IN time_end BIGINT,
  IN in_station_id BIGINT
) BEGIN
select 
  CAM.event_timestamp as `timestamp`,
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from  
  CAM 
where 
  CAM.event_timestamp between time_start and time_end and
  in_station_id = station_id 
  ;
END $$



CREATE PROCEDURE `get_cams_quadtree`(
  IN time_start BIGINT,
  IN time_end BIGINT,
  IN quadtree_start BIGINT,
  IN quadtree_end BIGINT
) BEGIN
select 
  CAM.event_timestamp as `timestamp`,
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from  
  CAM 
where 
  CAM.event_timestamp between time_start and time_end and
  quadtree between quadtree_start and quadtree_end
  ;
END $$



CREATE PROCEDURE `get_cams_quadtree_and_station_id`(
  IN time_start BIGINT,
  IN time_end BIGINT,
  IN quadtree_start BIGINT,
  IN quadtree_end BIGINT,
  IN in_station_id BIGINT
) BEGIN
select 
  CAM.event_timestamp as `timestamp`,
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from  
  CAM 
where 
  CAM.event_timestamp between time_start and time_end and
  in_station_id = station_id and 
  quadtree between quadtree_start and quadtree_end
  ;
END $$

DELIMITER ;
