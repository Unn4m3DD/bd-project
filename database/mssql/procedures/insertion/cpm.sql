DROP PROCEDURE insert_cpm;
DROP PROCEDURE insert_perceived_object;
DROP FUNCTION it2s_db.getObjectLatitude;
DROP FUNCTION it2s_db.getObjectLongitude;
DROP FUNCTION it2s_db.getObjectAbsSpeed
GO

CREATE FUNCTION it2s_db.getObjectLatitude (@rsu_latitude INT, @object_yDistance INT)
RETURNS INT AS
BEGIN
    return (@rsu_latitude / 10000000.0 + (@object_yDistance / 100.0 / 6371000) * (180 / PI())) * 10000000;
END
GO
CREATE FUNCTION it2s_db.getObjectLongitude (@rsu_latitude INT, @rsu_longitude INT, @object_xDistance INT)
RETURNS INT AS
BEGIN
    return (@rsu_longitude / 10000000.0 + (@object_xDistance / 100.0 / 6371000) * (180 / PI()) / COS(@rsu_latitude * PI() / 100.0)) * 10000000;
END
GO
CREATE FUNCTION it2s_db.getObjectAbsSpeed (@xSpeed INT, @ySpeed INT)
RETURNS INT AS
BEGIN
    return SQRT( Power(@xSpeed,2) + Power(@ySpeed,2));
END
GO
CREATE PROCEDURE insert_cpm @emitter_id INT, @timestamp INT, @latitude INT, @longitude INT, @quadtree BIGINT AS
insert into it2s_db.CPM values(@emitter_id, @timestamp, @latitude, @longitude, @quadtree)
GO
CREATE PROCEDURE insert_perceived_object @emitter_id INT, @current_timestamp INT, @objectID INT, @latitude INT, @longitude INT, @quadtree BIGINT, @xDistance INT, @yDistance INT, @xSpeed INT, @ySpeed INT
AS
insert into it2s_db.PerceivedObject values(@emitter_id , @current_timestamp , @objectID , it2s_db.getObjectLatitude(@latitude, @yDistance) , it2s_db.getObjectLongitude(@latitude, @longitude, @yDistance) , @quadtree , @xDistance , @yDistance , @xSpeed , @ySpeed , it2s_db.getObjectAbsSpeed(@xSpeed, @ySpeed));
