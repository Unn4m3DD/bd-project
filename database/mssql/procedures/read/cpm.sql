DROP PROCEDURE get_cpms_station_id;
DROP PROCEDURE get_cpms;
DROP PROCEDURE get_cpms_quadtree;
DROP PROCEDURE get_cpms_quadtree_and_station_id;
GO
CREATE PROCEDURE get_cpms
  @time_start BIGINT,
  @time_end BIGINT
AS

DECLARE @res table(
  cpm_rsu_station_id bigint,
  cpm_event_timestamp bigint,
  cpm_latitude bigint,
  cpm_longitude bigint,
  cpm_quadtree bigint
);

DECLARE @object_string text;

DECLARE @cpm_rsu_station_id bigint;
DECLARE @cpm_event_timestamp bigint;
DECLARE @cpm_latitude bigint;
DECLARE @cpm_longitude bigint;
DECLARE @cpm_quadtree bigint;


DECLARE cpm_cursor CURSOR
FOR SELECT *
FROM it2s_db.CPM;

DECLARE @cpm_station_id bigint;
DECLARE @event_timestamp bigint;
DECLARE @perceived_object_id int;
DECLARE @latitude BIGINT;
DECLARE @longitude BIGINT;
DECLARE @quadtree bigint;
DECLARE @x_distance int;
DECLARE @y_distance int;
DECLARE @x_speed int;
DECLARE @y_speed int;
DECLARE @abs_speed int;


OPEN cpm_cursor;

FETCH NEXT FROM cpm_cursor INTO 
    @cpm_rsu_station_id,
    @cpm_event_timestamp,
    @cpm_latitude,
    @cpm_longitude,
    @cpm_quadtree;

WHILE @@FETCH_STATUS = 0
  BEGIN
    DECLARE perceived_obj_cursor CURSOR
    FOR SELECT *
    FROM it2s_db.PerceivedObject where @cpm_rsu_station_id == ;
    OPEN perceived_obj_cursor;
    FETCH NEXT FROM perceived_obj_cursor INTO 
    @cpm_station_id,
    @event_timestamp,
    @perceived_object_id,
    @latitude,
    @longitude,
    @quadtree,
    @x_distance,
    @y_distance,
    @x_speed,
    @y_speed,
    @abs_speed;
    WHILE @@FETCH_STATUS = 0
      BEGIN

      END;
  END;




CLOSE perceived_obj_cursor;

DEALLOCATE perceived_obj_cursor;

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
