DROP PROCEDURE insert_obu;
GO
CREATE PROCEDURE insert_obu
    @emitter_id INT,
    @app_version INT,
    @last_power_status INT
AS
update it2s_db.Emitter set current_app_version=@app_version where station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.Emitter
values(@emitter_id, @app_version)
update it2s_db.OBU set last_power_status=@last_power_status where emitter_station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.OBU
values(@emitter_id, @last_power_status);
