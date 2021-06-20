DROP TRIGGER insert_smartphone_trigger;
DROP TRIGGER insert_website_trigger;
GO
CREATE TRIGGER insert_smartphone_trigger on it2s_db.Smartphone
INSTEAD OF INSERT
AS 
BEGIN
		insert into it2s_db.Smartphone 
		select * from inserted 
			where emitter_station_id not in (select emitter_station_id from it2s_db.WebSite);
END
GO
CREATE TRIGGER insert_website_trigger on it2s_db.WebSite
INSTEAD OF INSERT
AS 
BEGIN
		insert into it2s_db.WebSite 
		select * from inserted 
			where emitter_station_id not in (select emitter_station_id from it2s_db.SmartPhone);
END
GO
