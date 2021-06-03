select 
  count(distinct emitter_station_id) as `value`
from VAM
where 
      event_timestamp between 1621172276 and 1621174276
  and quadtree between quadtree_start and quadtree_end
order by event_timestamp