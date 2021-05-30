DROP PROCEDURE insert_denm;
GO
CREATE PROCEDURE insert_denm @emitter_id INT, @app_version INT, @lang CHAR(2)
AS
update it2s_db.Emitter set current_app_version=@app_version where  station_id = @emitter_id
update it2s_db.App set configured_language=@lang where emitter_station_id = station_id = @emitter_id