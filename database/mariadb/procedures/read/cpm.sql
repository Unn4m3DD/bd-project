DROP PROCEDURE `get_cpms_station_id`;
DROP PROCEDURE `get_cpms`;
DROP PROCEDURE `get_cpms_quadtree`;
DROP PROCEDURE `get_cpms_quadtree_and_station_id`;

DELIMITER $$

CREATE PROCEDURE `get_cpms`(
  IN time_start INT,
  IN time_end INT
) BEGIN
select 
  CPM.event_timestamp as `timestamp`,
  CPM.rsu_station_id as station_id,
  CPM.longitude as longitude,
  CPM.latitude as latitude,
  (select CONCAT('[',
        GROUP_CONCAT(
          JSON_OBJECT(
            'objectID',perceived_object_id,
            'xDistance',x_distance,
            'yDistance',y_distance,
            'xSpeed',x_speed,
            'ySpeed',y_speed
          )
        ), ']') from PerceivedObject where 
          rsu_station_id = cpm_station_id and 
          CPM.event_timestamp = PerceivedObject.event_timestamp
        ) as perceived_objects
from  
  CPM 
where 
  CPM.event_timestamp between time_start and time_end
  ;
END $$


CREATE PROCEDURE `get_cpms_station_id`(
  IN time_start INT,
  IN time_end INT,
  IN in_station_id INT
) BEGIN
select 
  CPM.event_timestamp as `timestamp`,
  CPM.rsu_station_id as station_id,
  CPM.longitude as longitude,
  CPM.latitude as latitude,
  (select CONCAT('[',
        GROUP_CONCAT(
          JSON_OBJECT(
            'objectID',perceived_object_id,
            'xDistance',x_distance,
            'yDistance',y_distance,
            'xSpeed',x_speed,
            'ySpeed',y_speed
          )
        ), ']') from PerceivedObject where 
          rsu_station_id = cpm_station_id and 
          CPM.event_timestamp = PerceivedObject.event_timestamp
        ) as perceived_objects
from  
  CPM 
where 
  CPM.event_timestamp between time_start and time_end and
  in_station_id = rsu_station_id
  ;
END $$


CREATE PROCEDURE `get_cpms_quadtree`(
  IN time_start INT,
  IN time_end INT,
  IN quadtree_start BIGINT,
  IN quadtree_end BIGINT
) BEGIN
select 
  CPM.event_timestamp as `timestamp`,
  CPM.rsu_station_id as station_id,
  CPM.longitude as longitude,
  CPM.latitude as latitude,
  (select CONCAT('[',
        GROUP_CONCAT(
          JSON_OBJECT(
            'objectID',perceived_object_id,
            'xDistance',x_distance,
            'yDistance',y_distance,
            'xSpeed',x_speed,
            'ySpeed',y_speed
          )
        ), ']') from PerceivedObject where 
          rsu_station_id = cpm_station_id and 
          CPM.event_timestamp = PerceivedObject.event_timestamp
        ) as perceived_objects
from  
  CPM 
where 
  CPM.event_timestamp between time_start and time_end and
  quadtree between quadtree_start and quadtree_end
  ;
END $$


CREATE PROCEDURE `get_cpms_quadtree_and_station_id`(
  IN time_start INT,
  IN time_end INT,
  IN quadtree_start BIGINT,
  IN quadtree_end BIGINT,
  IN in_station_id INT
) BEGIN
select 
  CPM.event_timestamp as `timestamp`,
  CPM.rsu_station_id as station_id,
  CPM.longitude as longitude,
  CPM.latitude as latitude,
  (select CONCAT('[',
        GROUP_CONCAT(
          JSON_OBJECT(
            'objectID',perceived_object_id,
            'xDistance',x_distance,
            'yDistance',y_distance,
            'xSpeed',x_speed,
            'ySpeed',y_speed
          )
        ), ']') from PerceivedObject where 
          rsu_station_id = cpm_station_id and 
          CPM.event_timestamp = PerceivedObject.event_timestamp
        ) as perceived_objects
from  
  CPM 
where 
  CPM.event_timestamp between time_start and time_end and
  in_station_id = rsu_station_id and 
  quadtree between quadtree_start and quadtree_end
  ;
END $$

DELIMITER ;