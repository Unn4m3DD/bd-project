create database it2s_db;
use databse it2s_db;
create table it2s_db.Emitter(
  station_id bigint not null,
  current_app_version int not null,
  primary key(station_id)
);
create table it2s_db.OBU(
  emitter_station_id bigint not null,
  last_power_status int not null,
  primary key(emitter_station_id),
  foreign key (emitter_station_id) references it2s_db.Emitter(station_id)
);
create table it2s_db.App(
  emitter_station_id bigint not null,
  configured_language char(2) not null,
  primary key(emitter_station_id),
  foreign key (emitter_station_id) references it2s_db.Emitter(station_id),
  check(configured_language in ('pt', 'en'))
);
create table it2s_db.Smartphone(
  emitter_station_id bigint not null,
  last_power_status int not null,
  primary key(emitter_station_id),
  foreign key (emitter_station_id) references it2s_db.App(emitter_station_id)
);
create table it2s_db.WebSite(
  emitter_station_id bigint not null,
  browser_name varchar(32) not null,
  browser_version varchar(64) not null,
  primary key(emitter_station_id),
  foreign key (emitter_station_id) references it2s_db.App(emitter_station_id)
);
create table it2s_db.RSU(--
  emitter_station_id bigint not null,
  latitude bigint not null,
  longitude bigint not null,
  primary key(emitter_station_id),
  foreign key (emitter_station_id) references it2s_db.Emitter(station_id)
);
create table it2s_db.CPM(--
  rsu_station_id bigint not null,
  event_timestamp int not null,
  latitude bigint not null,
  longitude bigint not null,
  quadtree bigint not null,
  primary key(rsu_station_id, event_timestamp),
  foreign key (rsu_station_id) references it2s_db.RSU(emitter_station_id),
  check(
    0 <= quadtree
    and quadtree <= 68719476736
  )
);
create table it2s_db.PerceivedObject(--
  cpm_station_id bigint not null,
  event_timestamp int not null,
  perceived_object_id int not null,
  latitude bigint not null,
  longitude bigint not null,
  quadtree bigint not null,
  x_distance int not null,
  y_distance int not null,
  x_speed int not null,
  y_speed int not null,
  abs_speed int not null,
  foreign key (cpm_station_id, event_timestamp) references it2s_db.CPM(rsu_station_id, event_timestamp),
  primary key(
    cpm_station_id,
    event_timestamp,
    perceived_object_id
  ),
  check(
    0 <= quadtree
    and quadtree <= 68719476736
  )
);
create table it2s_db.CAM(--
  station_id bigint not null,
  event_timestamp int not null,
  station_type int not null,
  speed int not null,
  latitude bigint not null,
  longitude bigint not null,
  quadtree bigint not null,
  -- check limite quadtree zoom 18
  primary key(station_id, event_timestamp),
  foreign key (station_id) references it2s_db.OBU(emitter_station_id),
  check(
    0 <= quadtree
    and quadtree <= 68719476736
  )
);
create table it2s_db.VAM(--
  emitter_station_id bigint not null,
  event_timestamp bigint not null,
  station_type int not null,
  latitude bigint not null,
  longitude bigint not null,
  quadtree bigint not null,
  primary key(emitter_station_id, event_timestamp),
  foreign key (emitter_station_id) references it2s_db.Smartphone(emitter_station_id),
  check(
    0 <= quadtree
    and quadtree <= 68719476736
  )
);
create table it2s_db.DENM(--
  emitter_station_id bigint not null,
  event_timestamp int not null,
  cause_code int not null,
  sub_cause_code int not null,
  latitude bigint not null,
  longitude bigint not null,
  duration int,
  quadtree bigint not null,
  primary key(emitter_station_id, event_timestamp),
  foreign key (emitter_station_id) references it2s_db.App(emitter_station_id),
  check(
    0 <= quadtree
    and quadtree <= 68719476736
  )
);
create table it2s_db.Status(
  id int primary key not null,
  `description` varchar(1024) not null
);
create table it2s_db.Notification1(
  perceived_object_emitter bigint not null,
  perceived_object_timestamp int not null,
  perceived_object_id int not null,
  status_id int,
  foreign key (status_id) references it2s_db.Status(id),
  foreign key (
    perceived_object_emitter,
    perceived_object_timestamp,
    perceived_object_id
  ) references it2s_db.PerceivedObject(
    cpm_station_id,
    event_timestamp,
    perceived_object_id
  ),
  primary key(
    perceived_object_emitter,
    perceived_object_timestamp,
    perceived_object_id
  )
);
create table it2s_db.Notification2(
  cam_emitter_station_id bigint not null,
  cam_event_timestamp bigint not null,
  status_id int not null,
  foreign key (cam_emitter_station_id, cam_event_timestamp) references it2s_db.CAM(station_id, event_timestamp),
  primary key(cam_emitter_station_id, cam_event_timestamp),
  foreign key (status_id) references it2s_db.Status(id)
);


CREATE VIEW notifications
AS
  SELECT 
    perceived_object_emitter as emitter_id,
    perceived_object_timestamp as event_timestamp,
    PerceivedObject.perceived_object_id as `object_id`,
    abs_speed as speed,
    latitude,
    longitude,
    quadtree,
    `description`
  FROM it2s_db.Notification1
    JOIN it2s_db.PerceivedObject ON perceived_object_emitter = PerceivedObject.cpm_station_id
    and perceived_object_timestamp = PerceivedObject.event_timestamp
    and Notification1.perceived_object_id = PerceivedObject.perceived_object_id
    join it2s_db.Status on Notification1.status_id = Status.id
union
  SELECT 
    cam_emitter_station_id as emitter_id,
    cam_event_timestamp as event_timestamp,
    null as `object_id`,
    speed as speed,
    latitude,
    longitude,
    quadtree,
    `description`
  FROM it2s_db.Notification2
    JOIN it2s_db.CAM ON cam_emitter_station_id = station_id
    and cam_event_timestamp = event_timestamp
    join it2s_db.Status on Notification2.status_id = Status.id;

INSERT INTO it2s_db.Status
VALUES(0, 'Vehicle going above 140 Km/h');