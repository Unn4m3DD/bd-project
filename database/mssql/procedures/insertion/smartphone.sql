DROP PROCEDURE insert_smartphone;
GO
CREATE PROCEDURE insert_smartphone @emitter_id INT, @app_version INT, @lang CHAR(2), @last_power_status INT
AS
update it2s_db.Emitter set current_app_version=@app_version where  station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.Emitter values(@emitter_id, @app_version) 
update it2s_db.App set configured_language=@lang where emitter_station_id = station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.APP values(@emitter_id, @lang)
update it2s_db.Smartphone set last_power_status=@last_power_status where emitter_station_id = station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.Smartphone values(@emitter_id, @last_power_status)