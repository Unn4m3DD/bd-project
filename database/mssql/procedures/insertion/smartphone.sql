DROP PROCEDURE insert_smartphone;
GO
CREATE PROCEDURE insert_smartphone 
    @emitter_id INT,
    @app_version INT, 
    @last_power_status INT, 
    @lang CHAR(2)
AS
insert into it2s_db.Emitter values(@emitter_id, @app_version) 
insert into it2s_db.APP values(@emitter_id, @lang);
insert into it2s_db.Smartphone values(@emitter_id, @last_power_status)