CREATE PROCEDURE get_vams @time_start INT, @time_end INT
AS
select 
  VAM.event_timestamp as [timestamp],
  VAM.emitter_station_id as station_id,
  VAM.longitude as longitude,
  VAM.latitude as latitude,
  VAM.station_type as station_type
from  
  it2s_db.VAM
where 
  VAM.event_timestamp between @time_start and @time_end
GO
CREATE PROCEDURE get_vams_station_id @time_start INT, @time_end INT, @in_station_id INT
AS
select 
  VAM.event_timestamp as [timestamp],
  VAM.emitter_station_id as station_id,
  VAM.longitude as longitude,
  VAM.latitude as latitude,
  VAM.station_type as station_type
from  
  it2s_db.VAM
where 
  VAM.event_timestamp between @time_start and @time_end and
  @in_station_id = emitter_station_id
GO
CREATE PROCEDURE get_vams_quadtree @time_start INT, @time_end INT, @quadtree_start BIGINT, @quadtree_end BIGINT
AS
select 
  VAM.event_timestamp as [timestamp],
  VAM.emitter_station_id as station_id,
  VAM.longitude as longitude,
  VAM.latitude as latitude,
  VAM.station_type as station_type
from  
  it2s_db.VAM 
where 
  VAM.event_timestamp between @time_start and @time_end and
  quadtree between @quadtree_start and @quadtree_end
GO
CREATE PROCEDURE get_vams_quadtree_and_station_id @time_start INT, @time_end INT, @quadtree_start BIGINT, @quadtree_end BIGINT, @in_station_id INT
AS
select 
  VAM.event_timestamp as [timestamp],
  VAM.emitter_station_id as station_id,
  VAM.longitude as longitude,
  VAM.latitude as latitude,
  VAM.station_type as station_type
from  
  it2s_db.VAM 
where 
  VAM.event_timestamp between @time_start and @time_end and
  @in_station_id = emitter_station_id and 
  quadtree between @quadtree_start and @quadtree_end;
