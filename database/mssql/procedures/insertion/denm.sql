DROP PROCEDURE insert_demn;
GO
CREATE PROCEDURE insert_demn @emitter_id INT, @timestamp INT, @cause_code INT, @sub_cause_code INT, @latitude INT, @longitude INT, @duration INT, @quadtree BIGINT
AS
insert into it2s_db.DENM values(@emitter_id, @timestamp, @cause_code, @sub_cause_code, @abs_speed, @latitude, @longitude, @duration, @quadtree);