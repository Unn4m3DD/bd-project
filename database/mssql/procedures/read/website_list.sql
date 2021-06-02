DROP PROCEDURE website_list;
DROP PROCEDURE website_list_emitter_id;
GO
CREATE PROCEDURE website_list 
AS
  SELECT WebSite.emitter_station_id as emitter_id,
        browser_version, configured_language from it2s_db.WebSite
  JOIN it2s_db.App on WebSite.emitter_station_id = App.emitter_station_id
GO
CREATE PROCEDURE website_list_emitter_id @id int 
AS
SELECT WebSite.emitter_station_id as emitter_id,
      browser_version, configured_language from it2s_db.WebSite 
      JOIN it2s_db.App on WebSite.emitter_station_id = App.emitter_station_id
      where WebSite.emitter_station_id = @id;