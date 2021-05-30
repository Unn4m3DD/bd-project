DROP PROCEDURE insert_rsu;
GO
CREATE PROCEDURE insert_rsu 
    @emitter_id INT,
    @app_version INT, 
    @latitude INT, 
    @longitude INT AS
insert into it2s_db.Emitter values(@emitter_id, @app_version) 
insert into it2s_db.RSU values(@emitter_id, @latitude, @longitude);