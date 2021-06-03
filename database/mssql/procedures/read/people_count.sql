DROP PROCEDURE get_people_count_quadtree;
DROP PROCEDURE get_people_count;
GO
CREATE PROCEDURE get_people_count_quadtree
  @time_start BIGINT,
  @time_end BIGINT,
  @quadtree_start BIGINT,
  @quadtree_end BIGINT
AS
BEGIN
  select
    count(distinct emitter_station_id)
  as [value]
  from it2s_db.VAM
  where event_timestamp between @time_start and @time_end
    and quadtree between @quadtree_start and @quadtree_end;
END;
GO
CREATE PROCEDURE get_people_count
  @time_start BIGINT,
  @time_end BIGINT
AS
BEGIN
  select
    count(distinct emitter_station_id)
  as [value]
  from it2s_db.VAM
  where event_timestamp between @time_start and @time_end;
END;
