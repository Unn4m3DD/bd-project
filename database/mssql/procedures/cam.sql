DROP PROCEDURE get_cams_station_id;
DROP PROCEDURE get_cams;
DROP PROCEDURE get_cams_quadtree;
DROP PROCEDURE get_cams_quadtree_and_station_id;

CREATE PROCEDURE get_cams @time_start INT,
@time_end INT AS
select CAM.event_timestamp as [timestamp],
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from it2s_db.CAM
where CAM.event_timestamp between @time_start and @time_end 
FOR JSON AUTO;

CREATE PROCEDURE get_cams_station_id @time_start INT,
@time_end INT,
@in_station_id INT AS
select CAM.event_timestamp as [timestamp],
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from it2s_db.CAM
where CAM.event_timestamp between @time_start and @time_end
  and @in_station_id = station_id
FOR JSON AUTO;

CREATE PROCEDURE get_cams_quadtree @time_start INT,
@time_end INT,
@quadtree_start BIGINT,
@quadtree_end BIGINT AS
select CAM.event_timestamp as [timestamp],
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from it2s_db.CAM
where CAM.event_timestamp between @time_start and @time_end
  and quadtree between @quadtree_start and @quadtree_end
FOR JSON AUTO;

CREATE PROCEDURE get_cams_quadtree_and_station_id @time_start INT,
@time_end INT,
@quadtree_start BIGINT,
@quadtree_end BIGINT,
@in_station_id INT AS
select CAM.event_timestamp as [timestamp],
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from it2s_db.CAM
where CAM.event_timestamp between @time_start and @time_end
  and @in_station_id = station_id
  and quadtree between @quadtree_start and @quadtree_end
FOR JSON AUTO;