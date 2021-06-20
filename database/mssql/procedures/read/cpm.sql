DROP PROCEDURE get_cpms_station_id;
DROP PROCEDURE get_cpms;
DROP PROCEDURE get_cpms_quadtree;
DROP PROCEDURE get_cpms_quadtree_and_station_id;
GO

CREATE PROCEDURE get_cpms
  @time_start BIGINT,
  @time_end BIGINT
AS

DECLARE @result table(
  station_id bigint,
  [timestamp] bigint,
  latitude bigint,
  longitude bigint,
  perceived_objects text
);

DECLARE @cpm_rsu_station_id bigint, @cpm_event_timestamp bigint, @cpm_latitude bigint, @cpm_longitude bigint;

DECLARE cpm_cursor CURSOR FOR SELECT cpm_rsu_station_id, cpm_event_timestamp, cpm_latitude, cpm_longitude
FROM it2s_db.CPM;

OPEN cpm_cursor;

FETCH NEXT FROM cpm_cursor INTO 
    @cpm_rsu_station_id,@cpm_event_timestamp, @cpm_latitude, @cpm_longitude;

WHILE @@FETCH_STATUS = 0
  BEGIN
  DECLARE @perceived_object_id int, @x_distance int, @y_distance int, @x_speed int, @y_speed int;

  DECLARE perceived_obj_cursor CURSOR FOR SELECT *
  FROM it2s_db.PerceivedObject
  where @cpm_rsu_station_id = cpm_station_id;
  DECLARE @current_perceived_objects text;
  SET @current_perceived_objects = '['
  OPEN perceived_obj_cursor;
  FETCH NEXT FROM perceived_obj_cursor INTO 
    @perceived_object_id, @x_distance, @y_distance, @x_speed, @y_speed;
  DECLARE @sep char
  WHILE @@FETCH_STATUS = 0
  BEGIN
    SET @current_perceived_objects += sep
    SET @current_perceived_objects += '{'
    SET @current_perceived_objects += '"objectID":' + @perceived_object_id + ','
    SET @current_perceived_objects += '"xDistance":' + po.xDistance + ','
    SET @current_perceived_objects += '"yDistance":' + po.yDistance + ','
    SET @current_perceived_objects += '"xSpeed":' + po.xSpeed + ','
    SET @current_perceived_objects += '"ySpeed":' + po.ySpeed
    SET @current_perceived_objects += '}'
    SET @sep = ','
    FETCH NEXT FROM perceived_obj_cursor INTO 
      @perceived_object_id, @x_distance, @y_distance, @x_speed, @y_speed;
  END;
  CLOSE perceived_obj_cursor;
  DEALLOCATE perceived_obj_cursor;

  insert into @result
  values
    (@cpm_rsu_station_id, @cpm_event_timestamp, @cpm_latitude, @cpm_longitude, @current_perceived_objects)

  FETCH NEXT FROM cpm_cursor INTO 
        @cpm_rsu_station_id,@cpm_event_timestamp, @cpm_latitude, @cpm_longitude;
END;

CLOSE cpm_cursor;

DEALLOCATE cpm_cursor;

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
