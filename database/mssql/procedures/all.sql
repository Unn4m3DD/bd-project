DROP PROCEDURE insert_cam;
GO
CREATE PROCEDURE insert_cam
  @emitter_id BIGINT,
  @timestamp INT,
  @station_type INT,
  @abs_speed INT,
  @latitude BIGINT,
  @longitude BIGINT,
  @quadtree BIGINT
AS
insert into it2s_db.CAM
values(@emitter_id, @timestamp, @station_type, @abs_speed, @latitude, @longitude, @quadtree)
GO
DROP PROCEDURE insert_cpm;
DROP PROCEDURE insert_perceived_object;
DROP FUNCTION it2s_db.getObjectLatitude;
DROP FUNCTION it2s_db.getObjectLongitude;
DROP FUNCTION it2s_db.getObjectAbsSpeed
GO
CREATE FUNCTION it2s_db.getObjectLatitude (
  @rsu_latitude BIGINT, 
  @object_yDistance INT
  ) RETURNS BIGINT AS BEGIN
  return (
    @rsu_latitude / 10000000.0 + (@object_yDistance / 100.0 / 6371000) * (180 / PI())
  ) * 10000000;
END
GO
CREATE FUNCTION it2s_db.getObjectLongitude (
    @rsu_latitude BIGINT,
    @rsu_longitude BIGINT,
    @object_xDistance INT
  ) RETURNS BIGINT AS BEGIN
  return (
    @rsu_longitude / 10000000.0 + (@object_xDistance / 100.0 / 6371000) * (180 / PI()) / COS(@rsu_latitude * PI() / 100.0)
  ) * 10000000;
END
GO
CREATE FUNCTION it2s_db.getObjectAbsSpeed (@xSpeed INT, @ySpeed INT) RETURNS INT AS BEGIN
  return SQRT(Power(@xSpeed, 2) + Power(@ySpeed, 2));
END
GO
CREATE PROCEDURE insert_cpm
  @emitter_id BIGINT,
  @timestamp INT,
  @latitude BIGINT,
  @longitude BIGINT,
  @quadtree BIGINT
AS
insert into it2s_db.CPM
values(
    @emitter_id,
    @timestamp,
    @latitude,
    @longitude,
    @quadtree
  )
GO
CREATE PROCEDURE insert_perceived_object
  @emitter_id BIGINT,
  @current_timestamp INT,
  @objectID INT,
  @latitude BIGINT,
  @longitude BIGINT,
  @quadtree BIGINT,
  @xDistance INT,
  @yDistance INT,
  @xSpeed INT,
  @ySpeed INT
AS
insert into it2s_db.PerceivedObject
values(
    @emitter_id,
    @current_timestamp,
    @objectID,
    it2s_db.getObjectLatitude(@latitude, @yDistance),
    it2s_db.getObjectLongitude(@latitude, @longitude, @yDistance),
    @quadtree,
    @xDistance,
    @yDistance,
    @xSpeed,
    @ySpeed,
    it2s_db.getObjectAbsSpeed(@xSpeed, @ySpeed)
  );
  GO
  DROP PROCEDURE insert_demn;
GO
CREATE PROCEDURE insert_demn
  @emitter_id BIGINT,
  @timestamp INT,
  @cause_code INT,
  @sub_cause_code INT,
  @latitude BIGINT,
  @longitude BIGINT,
  @duration INT,
  @quadtree BIGINT
AS
insert into it2s_db.DENM
values(@emitter_id, @timestamp, @cause_code, @sub_cause_code, @latitude, @longitude, @duration, @quadtree);
GO
DROP PROCEDURE insert_obu;
GO
CREATE PROCEDURE insert_obu
    @emitter_id BIGINT,
    @app_version INT,
    @last_power_status INT
AS
BEGIN TRAN
update it2s_db.Emitter set current_app_version=@app_version where station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.Emitter
values(@emitter_id, @app_version)
update it2s_db.OBU set last_power_status=@last_power_status where emitter_station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.OBU
values(@emitter_id, @last_power_status);
COMMIT TRAN
GO
DROP PROCEDURE insert_rsu;
GO
CREATE PROCEDURE insert_rsu
    @emitter_id BIGINT,
    @app_version INT,
    @latitude BIGINT,
    @longitude BIGINT
AS
BEGIN TRAN
update it2s_db.Emitter set current_app_version=@app_version where station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.Emitter
values(@emitter_id, @app_version)
update it2s_db.RSU set latitude=@latitude, longitude=@longitude where emitter_station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.RSU
values(@emitter_id, @latitude, @longitude);
COMMIT TRAN
GO
DROP PROCEDURE insert_smartphone;
GO
CREATE PROCEDURE insert_smartphone
    @emitter_id BIGINT,
    @app_version INT,
    @lang CHAR(2),
    @last_power_status INT
AS
BEGIN TRAN
update it2s_db.Emitter set current_app_version=@app_version where  station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.Emitter
values(@emitter_id, @app_version)
update it2s_db.App set configured_language=@lang where emitter_station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.APP
values(@emitter_id, @lang)
update it2s_db.Smartphone set last_power_status=@last_power_status where emitter_station_id = @emitter_id
IF @@ROWCOUNT=0
    BEGIN
    IF EXISTS(SELECT *
    FROM it2s_db.WebSite
    where emitter_station_id = @emitter_id)
		BEGIN
			RAISERROR('Já existe um Website com esse emitter_id!',16,1);
			ROLLBACK TRAN
		END
    ELSE
		BEGIN
			insert into it2s_db.Smartphone
		values(@emitter_id, @last_power_status)
			COMMIT TRAN
		END
END
GO
DROP PROCEDURE insert_user;
GO
CREATE PROCEDURE insert_user
  @username varchar(128),
  @passwd varchar(64)
AS
DECLARE @salt char(64);


-- Generate the salt
DECLARE @seed int;
DECLARE @current_time DATETIME;

SET @current_time = GETDATE();
SET @seed = (DATEPART(hh, @current_time) * 10000000) + (DATEPART(n, @current_time) * 100000) 
      + (DATEPART(s, @current_time) * 1000) + DATEPART(ms, @current_time);
SET @salt = CHAR(ROUND((RAND(@seed) * 94.0) + 32, 3));

INSERT INTO it2s_db.dbUser
values(@username, @salt, HASHBYTES('sha2_256', @passwd + @salt));
GO
DROP PROCEDURE insert_vam;
GO
CREATE PROCEDURE insert_vam
  @emitter_id BIGINT,
  @timestamp INT,
  @station_type INT,
  @latitude BIGINT,
  @longitude BIGINT,
  @quadtree BIGINT
AS
insert into it2s_db.VAM
values(@emitter_id, @timestamp, @station_type, @latitude, @longitude, @quadtree)
GO
DROP PROCEDURE insert_website;
GO
CREATE PROCEDURE insert_website
    @emitter_id BIGINT,
    @app_version INT,
    @lang CHAR(2),
    @browser_version INT
AS
BEGIN TRAN
update it2s_db.Emitter set current_app_version=@app_version where  station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.Emitter
values(@emitter_id, @app_version)
update it2s_db.App set configured_language=@lang where  emitter_station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.App
values(@emitter_id, @lang);
update it2s_db.Website set browser_version=@browser_version where  emitter_station_id = @emitter_id
IF @@ROWCOUNT=0
    BEGIN
    IF EXISTS(SELECT *
    FROM it2s_db.Smartphone
    where emitter_station_id = @emitter_id)
        BEGIN
            RAISERROR('Já existe um Smartphone com esse emitter_id!',16,1);
            ROLLBACK TRAN
        END
    ELSE
        BEGIN
            insert into it2s_db.WebSite
            values(@emitter_id, @browser_version);
            COMMIT TRAN
        END
END
GO
DROP PROCEDURE get_car_average_speed_quadtree_and_station_id;
DROP PROCEDURE get_car_average_speed_quadtree;
DROP PROCEDURE get_car_average_speed_station_id;
DROP PROCEDURE get_car_average_speed;
GO
CREATE PROCEDURE get_car_average_speed_quadtree_and_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT,
  @in_station_id BIGINT
AS
select
  AVG(abs_speed) as value
from it2s_db.PerceivedObject
where 
      event_timestamp between @time_start and @time_end
  and cpm_station_id = @in_station_id
  and quadtree between @quadtree_start and @quadtree_end
GO
CREATE PROCEDURE get_car_average_speed_quadtree
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT
AS
select
  AVG(abs_speed) as value
from it2s_db.PerceivedObject
where 
      event_timestamp between @time_start and @time_end
  and quadtree between @quadtree_start and @quadtree_end
GO
CREATE PROCEDURE get_car_average_speed_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @in_station_id BIGINT
AS
select
  AVG(abs_speed) as value
from it2s_db.PerceivedObject
where 
      event_timestamp between @time_start and @time_end
  and cpm_station_id = @in_station_id
GO
CREATE PROCEDURE get_car_average_speed
  @time_start BIGINT,
  @time_end BIGINT
AS
select
  AVG(abs_speed) as value
from it2s_db.PerceivedObject
where 
      event_timestamp between @time_start and @time_end;
GO



DROP PROCEDURE get_cams_station_id;
DROP PROCEDURE get_cams;
DROP PROCEDURE get_cams_quadtree;
DROP PROCEDURE get_cams_quadtree_and_station_id;
GO
CREATE PROCEDURE get_cams
  @time_start BIGINT,
  @time_end BIGINT
AS
select CAM.event_timestamp as [timestamp],
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from it2s_db.CAM
where CAM.event_timestamp between @time_start and @time_end
GO
CREATE PROCEDURE get_cams_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @in_station_id BIGINT
AS
select CAM.event_timestamp as [timestamp],
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from it2s_db.CAM
where CAM.event_timestamp between @time_start and @time_end
  and @in_station_id = station_id
GO
CREATE PROCEDURE get_cams_quadtree
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT
AS
select CAM.event_timestamp as [timestamp],
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from it2s_db.CAM
where CAM.event_timestamp between @time_start and @time_end
  and quadtree between @quadtree_start and @quadtree_end
GO
CREATE PROCEDURE get_cams_quadtree_and_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT,
  @in_station_id BIGINT
AS
select CAM.event_timestamp as [timestamp],
  CAM.station_id as station_id,
  CAM.longitude as longitude,
  CAM.latitude as latitude,
  CAM.station_type as station_type
from it2s_db.CAM
where CAM.event_timestamp between @time_start and @time_end
  and @in_station_id = station_id
  and quadtree between @quadtree_start and @quadtree_end;
  GO
/*
--auxiliary query explaining the logic behind the query
select count(*) as value
from (
    select (
        event_timestamp - LAG(event_timestamp) OVER(
          PARTITION BY cpm_station_id,
          perceived_object_id
          order by event_timestamp
        )
      ) as diff
    from it2s_db.PerceivedObject
    where event_timestamp between 1622306000 and 1622306010
      and cpm_station_id = 10
    order by event_timestamp
  ) as inner_table
where diff > 3 or diff is NULL;
select count(distinct perceived_object_id)
from it2s_db.PerceivedObject
where event_timestamp between 1622306000 and 1622306010
  and cpm_station_id = 10
  ;
*/

DROP PROCEDURE get_car_count_quadtree_and_station_id;
DROP PROCEDURE get_car_count_station_id;
DROP PROCEDURE get_car_count_quadtree;
DROP PROCEDURE get_car_count;
GO
CREATE PROCEDURE get_car_count_quadtree_and_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT,
  @in_station_id BIGINT
AS
select count(*) as value
from (
    select (
        event_timestamp - LAG(event_timestamp) OVER(
          PARTITION BY cpm_station_id,
          perceived_object_id
          order by event_timestamp
        )
      ) as diff
  from it2s_db.PerceivedObject
  where 
          event_timestamp between @time_start and @time_end
    and cpm_station_id = @in_station_id
    and quadtree between @quadtree_start and @quadtree_end 
  ) as inner_table
where diff > 3 or diff is NULL
GO
CREATE PROCEDURE get_car_count_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @in_station_id BIGINT
AS
select count(*) as value
from (
    select (
        event_timestamp - LAG(event_timestamp) OVER(
          PARTITION BY cpm_station_id,
          perceived_object_id
          order by event_timestamp
        )
      ) as diff
  from it2s_db.PerceivedObject
  where 
          event_timestamp between @time_start and @time_end
    and cpm_station_id = @in_station_id 
  ) as inner_table
where diff > 3 or diff is NULL
GO
CREATE PROCEDURE get_car_count_quadtree
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT
AS
select count(*) as value
from (
    select (
        event_timestamp - LAG(event_timestamp) OVER(
          PARTITION BY cpm_station_id,
          perceived_object_id
          order by event_timestamp
        )
      ) as diff
  from it2s_db.PerceivedObject
  where 
          event_timestamp between @time_start and @time_end
    and quadtree between @quadtree_start and @quadtree_end 
  ) as inner_table
where diff > 3 or diff is NULL
GO
CREATE PROCEDURE get_car_count
  @time_start BIGINT,
  @time_end BIGINT
AS
select count(*) as value
from (
    select (
        event_timestamp - LAG(event_timestamp) OVER(
          PARTITION BY cpm_station_id,
          perceived_object_id
          order by event_timestamp
        )
      ) as diff
  from it2s_db.PerceivedObject
  where 
          event_timestamp between @time_start and @time_end
  ) as inner_table
where diff > 3 or diff is NULL;
GO
drop function it2s_db.check_user;
GO
create function it2s_db.check_user(
  @username varchar(128),
  @passwd_in varchar(64)
) returns int
AS
BEGIN
  DECLARE @hashed_passwd binary(32);
  DECLARE @salt char(64);
  DECLARE @hashed_passwd_in binary(32);
  set @hashed_passwd = (select password
  from it2s_db.dbUser
  where normalized_username = @username);
  set @salt = (select salt
  from it2s_db.dbUser
  where normalized_username = @username);
  set @hashed_passwd_in = (select HASHBYTES('sha2_256',@passwd_in + @salt));
  if(Exists(Select *
  from it2s_db.dbUser
  where normalized_username = @username))
  if(@hashed_passwd_in = @hashed_passwd)
    return 1;
  return 0;
END
GO
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
DROP PROCEDURE get_denms_station_id;
DROP PROCEDURE get_denms;
DROP PROCEDURE get_denms_quadtree;
DROP PROCEDURE get_denms_quadtree_and_station_id; 
GO
CREATE PROCEDURE get_denms
  @time_start BIGINT,
  @time_end BIGINT
AS
select
  DENM.event_timestamp as [timestamp],
  DENM.emitter_station_id as station_id,
  DENM.cause_code as cause_code,
  DENM.sub_cause_code as sub_cause_code,
  DENM.longitude as longitude,
  DENM.latitude as latitude,
  DENM.duration as duration
from
  it2s_db.DENM
where 
  DENM.event_timestamp between @time_start and @time_end
GO
CREATE PROCEDURE get_denms_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @in_station_id BIGINT
AS
select
  DENM.event_timestamp as [timestamp],
  DENM.emitter_station_id as station_id,
  DENM.cause_code as cause_code,
  DENM.sub_cause_code as sub_cause_code,
  DENM.longitude as longitude,
  DENM.latitude as latitude,
  DENM.duration as duration
from
  it2s_db.DENM
where 
  DENM.event_timestamp between @time_start and @time_end and
  @in_station_id = emitter_station_id
GO
CREATE PROCEDURE get_denms_quadtree
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT
AS
select
  DENM.event_timestamp as [timestamp],
  DENM.emitter_station_id as station_id,
  DENM.cause_code as cause_code,
  DENM.sub_cause_code as sub_cause_code,
  DENM.longitude as longitude,
  DENM.latitude as latitude,
  DENM.duration as duration
from
  it2s_db.DENM
where 
  DENM.event_timestamp between @time_start and @time_end and
  quadtree between @quadtree_start and @quadtree_end
GO
CREATE PROCEDURE get_denms_quadtree_and_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT,
  @in_station_id BIGINT
AS
select
  DENM.event_timestamp as [timestamp],
  DENM.emitter_station_id as station_id,
  DENM.cause_code as cause_code,
  DENM.sub_cause_code as sub_cause_code,
  DENM.longitude as longitude,
  DENM.latitude as latitude,
  DENM.duration as duration
from
  it2s_db.DENM
where 
  DENM.event_timestamp between @time_start and @time_end and
  @in_station_id = emitter_station_id and
  quadtree between @quadtree_start and @quadtree_end;
GO

DROP PROCEDURE get_notifications_list;
DROP PROCEDURE get_notifications_list_station_id;
DROP PROCEDURE get_notifications_list_quadtree;
DROP PROCEDURE get_notifications_list_quadtree_and_station_id;
GO
CREATE PROCEDURE get_notifications_list
  @start_time bigint,
  @end_time bigint
AS
SELECT *
FROM notifications
where event_timestamp between @start_time and @end_time
GO
CREATE PROCEDURE get_notifications_list_station_id
  @start_time bigint,
  @end_time bigint,
  @in_emitter_id bigint
AS
SELECT *
FROM notifications
where notifications.emitter_id = @in_emitter_id
  and notifications.event_timestamp between @start_time and @end_time
GO
CREATE PROCEDURE get_notifications_list_quadtree
  @start_time bigint,
  @end_time bigint,
  @location_quadtree bigint
AS
SELECT *
FROM notifications
where notifications.quadtree = @location_quadtree and notifications.event_timestamp between @start_time and @end_time
GO
CREATE PROCEDURE get_notifications_list_quadtree_and_station_id
  @start_time bigint,
  @end_time bigint,
  @in_emitter_id bigint,
  @location_quadtree bigint
AS
SELECT *
FROM notifications
where notifications.emitter_id = @in_emitter_id
  and notifications.quadtree = @location_quadtree
  and notifications.event_timestamp between @start_time and @end_time
GO

DROP PROCEDURE get_notification_count;
GO
CREATE PROCEDURE get_notification_count
AS
BEGIN
  select
    count(*) as [value]
  from notifications;
END 
GO
DROP PROCEDURE get_obu_list;
DROP PROCEDURE get_obu_list_emitter_id;
GO
CREATE PROCEDURE get_obu_list
AS
SELECT emitter_station_id as emitter_id,
      last_power_status
from it2s_db.OBU
GO
CREATE PROCEDURE get_obu_list_emitter_id
      @id bigint
AS
SELECT emitter_station_id as emitter_id,
      last_power_status
from it2s_db.OBU
where emitter_station_id = @id;
GO
DROP PROCEDURE get_people_count_quadtree;
DROP PROCEDURE get_people_count;
GO
CREATE PROCEDURE get_people_count_quadtree
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT
AS
BEGIN
  select
    count(distinct emitter_station_id)
  as [value]
  from it2s_db.VAM
  where event_timestamp between @time_start and @time_end
    and quadtree between @quadtree_start and @quadtree_end;
END;
GO
CREATE PROCEDURE get_people_count
  @time_start BIGINT,
  @time_end BIGINT
AS
BEGIN
  select
    count(distinct emitter_station_id)
  as [value]
  from it2s_db.VAM
  where event_timestamp between @time_start and @time_end;
END;
GO
DROP PROCEDURE get_rsu_list;
DROP PROCEDURE get_rsu_list_emitter_id;
GO
CREATE PROCEDURE get_rsu_list
AS
SELECT emitter_station_id as emitter_id,
      latitude, longitude
from it2s_db.RSU
GO
CREATE PROCEDURE get_rsu_list_emitter_id
      @id bigint
AS
SELECT emitter_station_id as emitter_id,
      latitude, longitude
from it2s_db.RSU
where emitter_station_id = @id;
GO
DROP PROCEDURE get_smartphone_list;
DROP PROCEDURE get_smartphone_list_emitter_id;
GO
CREATE PROCEDURE get_smartphone_list
AS
SELECT Smartphone.emitter_station_id as emitter_id,
      last_power_status, configured_language
from it2s_db.Smartphone
      JOIN it2s_db.App on Smartphone.emitter_station_id = App.emitter_station_id
GO
CREATE PROCEDURE get_smartphone_list_emitter_id
      @id bigint
AS
SELECT Smartphone.emitter_station_id as emitter_id,
      last_power_status, configured_language
from it2s_db.Smartphone
      JOIN it2s_db.App on Smartphone.emitter_station_id = App.emitter_station_id
where Smartphone.emitter_station_id = @id;
GO
DROP PROCEDURE get_timestamps;
DROP PROCEDURE get_timestamps_between;
GO
CREATE PROCEDURE get_timestamps
AS
select
  event_timestamp
from
  (select distinct event_timestamp,
    (lag(event_timestamp) over (order by event_timestamp)) as prev,
    (lead(event_timestamp) over (order by event_timestamp)) as [next]
  from (
                    (
      select event_timestamp
      from it2s_db.CPM
      )
    union
      (select event_timestamp
      from it2s_db.CAM)
    union
      (select event_timestamp
      from it2s_db.VAM)
    union
      (select event_timestamp
      from it2s_db.DENM)
    ) as tmp
  ) as tmp2
where 
  prev != (event_timestamp - 1) or
  [next] != (event_timestamp + 1)
GO
CREATE PROCEDURE get_timestamps_between
  @time_start BIGINT,
  @time_end BIGINT
AS
select
  event_timestamp
from
  (select distinct event_timestamp,
    (lag(event_timestamp) over (order by event_timestamp)) as prev,
    (lead(event_timestamp) over (order by event_timestamp)) as [next]
  from (
                    (
      select event_timestamp
      from it2s_db.CPM
      where event_timestamp between @time_start and @time_end
      )
    union
      (select event_timestamp
      from it2s_db.CAM
      where event_timestamp between @time_start and @time_end)
    union
      (select event_timestamp
      from it2s_db.VAM
      where event_timestamp between @time_start and @time_end)
    union
      (select event_timestamp
      from it2s_db.DENM
      where event_timestamp between @time_start and @time_end)
    ) as tmp
  ) as tmp2
where 
  prev != (event_timestamp - 1) or
  [next] != (event_timestamp + 1);
GO

DROP PROCEDURE get_vams_station_id;
DROP PROCEDURE get_vams;
DROP PROCEDURE get_vams_quadtree;
DROP PROCEDURE get_vams_quadtree_and_station_id; 
GO
CREATE PROCEDURE get_vams
  @time_start BIGINT,
  @time_end BIGINT
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
CREATE PROCEDURE get_vams_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @in_station_id BIGINT
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
CREATE PROCEDURE get_vams_quadtree
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT
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
CREATE PROCEDURE get_vams_quadtree_and_station_id
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT,
  @in_station_id BIGINT
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
  GO
DROP PROCEDURE get_website_list;
DROP PROCEDURE get_website_list_emitter_id;
GO
CREATE PROCEDURE get_website_list
AS
SELECT WebSite.emitter_station_id as emitter_id,
      browser_version, configured_language
from it2s_db.WebSite
      JOIN it2s_db.App on WebSite.emitter_station_id = App.emitter_station_id
GO
CREATE PROCEDURE get_website_list_emitter_id
      @id bigint
AS
SELECT WebSite.emitter_station_id as emitter_id,
      browser_version, configured_language
from it2s_db.WebSite
      JOIN it2s_db.App on WebSite.emitter_station_id = App.emitter_station_id
where WebSite.emitter_station_id = @id;
GO
DROP TRIGGER it2s_db.speed_limit_trigger1;
DROP TRIGGER it2s_db.speed_limit_trigger2;
GO
CREATE TRIGGER it2s_db.speed_limit_trigger1 ON it2s_db.PerceivedObject
AFTER INSERT
AS
	BEGIN
  DECLARE @to_insert 
		table(
    perceived_object_emitter bigint,
    perceived_object_timestamp bigint,
    perceived_object_id int,
    status_id int
		);
  insert into @to_insert
  SELECT
    cpm_station_id as perceived_object_emitter,
    event_timestamp as perceived_object_timestamp,
    perceived_object_id as perceived_object_id,
    status_id=0
  from it2s_db.PerceivedObject
  where abs_speed > 3888;
  -- 140Km/h ~= 3888cm/s
  INSERT INTO it2s_db.Notification1
  SELECT *
  FROM @to_insert
END;
GO
CREATE TRIGGER it2s_db.speed_limit_trigger2 ON it2s_db.CAM
AFTER INSERT
AS
	BEGIN
  DECLARE @to_insert 
		table(
    cam_emitter_station_id bigint,
    cam_event_timestamp bigint,
    status_id int
		);
  insert into @to_insert
  SELECT
    station_id as cam_emitter_station_id,
    event_timestamp as cam_event_timestamp,
    status_id=0
  from it2s_db.CAM
  where speed > 3888;
  -- 140Km/h ~= 3888cm/s
  INSERT INTO it2s_db.Notification2
  SELECT *
  FROM @to_insert
END;
GO
