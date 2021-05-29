
declare function get_cpms_station_id(
  time_start: number,
  time_end: number,
  in_station_id: number
)

declare function get_cpms(
  time_start: number,
  time_end: number,
)

declare function get_cpms_quadtree(
  time_start: number,
  time_end: number,
  quadtree_start: number,
  quadtree_end: number,
)

declare function get_cpms_quadtree_and_station_id(
  time_start: number,
  time_end: number,
  quadtree_start: number,
  quadtree_end: number,
  station_id: number
)