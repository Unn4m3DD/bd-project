DROP PROCEDURE insert_website;
GO
CREATE PROCEDURE insert_website 
    @emitter_id INT, 
    @app_version INT, 
    @lang CHAR(2), 
    @browser_version INT
AS
insert into it2s_db.Emitter values(@emitter_id, @app_version) 
insert into it2s_db.App values(@emitter_id, @lang);
insert into it2s_db.WebSite values(@emitter_id, @browser_version);