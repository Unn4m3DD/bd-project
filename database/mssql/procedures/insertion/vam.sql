DROP PROCEDURE insert_vam;
GO
CREATE PROCEDURE insert_vam @emitter_id INT, @timestamp INT, @station_type INT, @latitude INT, @longitude INT, @quadtree BIGINT
AS
insert into it2s_db.VAM values(@emitter_id, @timestamp, @station_type, @latitude, @longitude, @quadtree)