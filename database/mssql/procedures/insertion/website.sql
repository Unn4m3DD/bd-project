DROP PROCEDURE INSERT_website;
GO
CREATE PROCEDURE INSERT_website @emitter_id INT, @app_version INT, @lang CHAR(2), @browser_version INT
AS

update it2s_db.Emitter set current_app_version=@app_version where  station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.Emitter values(@emitter_id, @app_version) 
update it2s_db.App set configured_language=@lang where  emitter_station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.App values(@emitter_id, @lang);
update it2s_db.Website set browser_version=@browser_version where  emitter_station_id = @emitter_id
IF @@ROWCOUNT=0
    insert into it2s_db.WebSite values(@emitter_id, @browser_version);