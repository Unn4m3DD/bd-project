DROP PROCEDURE update_rsu;
GO
CREATE PROCEDURE update_rsu @emitter_id INT, @latitude INT, @longitude INT, @app_version INT
AS
update it2s_db.Emitter set current_app_version=@app_version where station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.Emitter values(@emitter_id, @app_version) 
update it2s_db.RSU set latitude=@latitude, longitude=@longitude where emitter_station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.RSU values(@emitter_id, @latitude, @longitude);
