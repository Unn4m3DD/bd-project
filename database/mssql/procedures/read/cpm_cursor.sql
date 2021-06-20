DROP PROCEDURE get_cpms_cursor
GO
CREATE PROCEDURE get_cpms_cursor
  @time_start BIGINT,
  @time_end BIGINT
AS

DECLARE @result table(
  station_id bigint,
  [timestamp] bigint,
  latitude bigint,
  longitude bigint,
  perceived_objects VARCHAR(max)
);

DECLARE @cpm_rsu_station_id bigint, @cpm_event_timestamp bigint, @cpm_latitude bigint, @cpm_longitude bigint;

DECLARE cpm_cursor CURSOR FOR SELECT rsu_station_id, event_timestamp, latitude, longitude
FROM it2s_db.CPM where [timestamp] between @time_start and @time_end;

OPEN cpm_cursor;

FETCH NEXT FROM cpm_cursor INTO 
    @cpm_rsu_station_id,@cpm_event_timestamp, @cpm_latitude, @cpm_longitude;

WHILE @@FETCH_STATUS = 0
  BEGIN
  DECLARE @perceived_object_id int, @x_distance int, @y_distance int, @x_speed int, @y_speed int;

  DECLARE perceived_obj_cursor CURSOR FOR SELECT perceived_object_id, x_distance, y_distance, x_speed, y_speed
  FROM it2s_db.PerceivedObject
  where @cpm_rsu_station_id = cpm_station_id;
  DECLARE @current_perceived_objects VARCHAR(max);
  SET @current_perceived_objects = '['
  OPEN perceived_obj_cursor;
  FETCH NEXT FROM perceived_obj_cursor INTO 
    @perceived_object_id, @x_distance, @y_distance, @x_speed, @y_speed;
  DECLARE @sep char
  WHILE @@FETCH_STATUS = 0
  BEGIN
    SET @current_perceived_objects += @sep
    SET @current_perceived_objects += '{'
    SET @current_perceived_objects += '"objectID":' + CAST(@perceived_object_id as VARCHAR) + ','
    SET @current_perceived_objects += '"xDistance":' + CAST(@x_distance as VARCHAR) + ','
    SET @current_perceived_objects += '"yDistance":' + CAST(@y_distance as VARCHAR) + ','
    SET @current_perceived_objects += '"xSpeed":' + CAST(@x_speed as VARCHAR) + ','
    SET @current_perceived_objects += '"ySpeed":' + CAST(@y_speed as VARCHAR)
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

exec get_cpms_cursor 1624212475, 1624212485
GO
