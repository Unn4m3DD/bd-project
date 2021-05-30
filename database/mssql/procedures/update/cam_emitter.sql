DROP PROCEDURE update_obu;
GO
CREATE PROCEDURE update_obu @emitter_id INT, @app_version INT, @last_power_status INT
AS
update it2s_db.Emitter set current_app_version=@app_version where station_id = @emitter_id
update it2s_db.OBU set last_power_status=@last_power_status where  emitter_station_id = @emitter_id