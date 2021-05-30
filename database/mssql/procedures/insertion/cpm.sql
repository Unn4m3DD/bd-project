DROP PROCEDURE insert_cpm;
DROP PROCEDURE insert_perceived_object;
GO

CREATE PROCEDURE insert_cpm @emitter_id INT, @timestamp INT, @latitude INT, @longitude INT, @quadtree BIGINT AS
insert into it2s_db.CPM values(@emitter_id, @timestamp, @latitude, @longitude, @quadtree)
GO
CREATE PROCEDURE insert_perceived_object @emitter_id INT, @current_timestamp INT, @objectID INT, @latitude INT, @longitude INT, @quadtree BIGINT, @xDistance INT, @yDistance INT, @xSpeed INT, @ySpeed INT, @abs_speed INT
AS
insert into it2s_db.PerceivedObject values(@emitter_id , @current_timestamp , @objectID , @latitude , @longitude , @quadtree , @xDistance , @yDistance , @xSpeed , @ySpeed , @abs_speed);