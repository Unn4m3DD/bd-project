DROP PROCEDURE insert_denm;
GO
CREATE PROCEDURE insert_denm @emitter_id INT, @app_version INT, @lang CHAR(2)
AS
insert into it2s_db.Emitter values(@emitter_id, @app_version) 
insert into it2s_db.APP values(@emitter_id, @lang);