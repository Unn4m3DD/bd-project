DROP PROCEDURE insert_cam;
GO
CREATE PROCEDURE insert_cam @emitter_id BIGINT, @timestamp INT, @station_type INT, @abs_speed INT, @latitude BIGINT, @longitude BIGINT, @quadtree BIGINT
AS
insert into it2s_db.CAM values(@emitter_id, @timestamp, @station_type, @abs_speed, @latitude, @longitude, @quadtree)