DROP PROCEDURE update_vanm;
GO
CREATE PROCEDURE update_vanm @emitter_id INT, @app_version INT, @last_power_status INT, @lang CHAR(2)
AS
update it2s_db.Emitter set current_app_version=@app_version where  station_id = @emitter_id
update it2s_db.App set configured_language=@lang where  emitter_station_id = @emitter_id
update it2s_db.Smartphone set last_power_status=@last_power_status where  emitter_station_id = @emitter_id