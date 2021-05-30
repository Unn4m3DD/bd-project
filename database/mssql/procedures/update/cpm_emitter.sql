DROP PROCEDURE update_rsu;
GO
CREATE PROCEDURE update_rsu @emitter_id INT, @latitude INT, @longitude INT, @app_version INT
AS
update it2s_db.Emitter set current_app_version=@app_version where station_id = @emitter_id
update it2s_db.RSU set latitude=@latitude, longitude=@longitude where emitter_station_id = @emitter_id;