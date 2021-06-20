DROP PROCEDURE get_cpms_station_id;
DROP PROCEDURE get_cpms;
DROP PROCEDURE get_cpms_quadtree;
DROP PROCEDURE get_cpms_quadtree_and_station_id;
GO
CREATE PROCEDURE get_cpms 
  @time_start BIGINT,
  @time_end BIGINT
AS
select CPM.event_timestamp as [timestamp],
  CPM.rsu_station_id as station_id,
  CPM.longitude as longitude,
  CPM.latitude as latitude,
  (
    select *
  from it2s_db.PerceivedObject
  where rsu_station_id = cpm_station_id
    and CPM.event_timestamp = PerceivedObject.event_timestamp
  FOR JSON AUTO
  ) as perceived_objects
from it2s_db.CPM
where CPM.event_timestamp between @time_start and @time_end
GO
CREATE PROCEDURE get_cpms_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @in_station_id BIGINT
AS
select CPM.event_timestamp as [timestamp],
  CPM.rsu_station_id as station_id,
  CPM.longitude as longitude,
  CPM.latitude as latitude,
  (
    select *
  from it2s_db.PerceivedObject
  where rsu_station_id = cpm_station_id
    and CPM.event_timestamp = PerceivedObject.event_timestamp
  FOR JSON AUTO
  ) as perceived_objects
from it2s_db.CPM
where CPM.event_timestamp between @time_start and @time_end
  and @in_station_id = rsu_station_id 
GO
CREATE PROCEDURE get_cpms_quadtree
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT
AS
select CPM.event_timestamp as [timestamp],
  CPM.rsu_station_id as station_id,
  CPM.longitude as longitude,
  CPM.latitude as latitude,
  (
    select *
  from it2s_db.PerceivedObject
  where rsu_station_id = cpm_station_id
    and CPM.event_timestamp = PerceivedObject.event_timestamp
  FOR JSON AUTO
  ) as perceived_objects
from it2s_db.CPM
where CPM.event_timestamp between @time_start and @time_end
  and quadtree between @quadtree_start and @quadtree_end
GO
CREATE PROCEDURE get_cpms_quadtree_and_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT,
  @in_station_id BIGINT
AS
select CPM.event_timestamp as [timestamp],
  CPM.rsu_station_id as station_id,
  CPM.longitude as longitude,
  CPM.latitude as latitude,
  (
    select *
  from it2s_db.PerceivedObject
  where rsu_station_id = cpm_station_id
    and CPM.event_timestamp = PerceivedObject.event_timestamp
  FOR JSON AUTO
  ) as perceived_objects
from it2s_db.CPM
where CPM.event_timestamp between @time_start and @time_end
  and @in_station_id = rsu_station_id
  and quadtree between @quadtree_start and @quadtree_end;
GO
