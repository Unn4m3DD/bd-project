DROP PROCEDURE insert_obu;
G
CREATE PROCEDURE insert_obu 
    @emitter_id INT, 
    @app_version INT, 
    @last_power_status INT
AS
insert into it2s_db.Emitter values(@emitter_id, @app_version) 
insert into it2s_db.OBU values(@emitter_id, @last_power_status);