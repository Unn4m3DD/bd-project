create schema it2s_db;
GO
;

create table it2s_db.Emitter(
    station_id int not null,
    current_app_version int not null,
    primary key(station_id)
)
GO
;

create table it2s_db.OBU(
    last_power_status int not null,
    emitter_station_id int foreign key references it2s_db.Emitter(station_id) not null,
    primary key(emitter_station_id)
)
GO
;

create table it2s_db.App(
    emitter_station_id int foreign key references it2s_db.Emitter(station_id) not null,
    configured_language char(2) check( configured_language in ('pt', 'en')) not null,
    primary key(emitter_station_id)
)
GO
;

create table it2s_db.Smartphone(
    emitter_station_id int foreign key references it2s_db.App(emitter_station_id) not null,
    last_power_status int not null,
    primary key(emitter_station_id)
)
GO
;

create table it2s_db.WebSite(
    emitter_station_id int foreign key references it2s_db.App(emitter_station_id) not null,
    browser_version int not null,
    primary key(emitter_station_id)
)
GO
;

create table it2s_db.RSU(
    emitter_station_id int foreign key references it2s_db.Emitter(station_id) not null,
    latitude int not null,
    longitude int not null,
    primary key(emitter_station_id)
)
GO
;

create table it2s_db.CPM(
    rsu_station_id int foreign key references it2s_db.RSU(emitter_station_id) not null,
    event_timestamp int not null,
    longitude int not null, 
    latitude int not null,
    quadtree bigint check(0 <= quadtree and quadtree <= 68719476736) not null,
    primary key(rsu_station_id, event_timestamp)
)
GO
;

create table it2s_db.PerceivedObject(
    cpm_station_id int not null, 
    event_timestamp int not null, 
	perceived_object_id int not null,
    longitude int not null, 
    latitude int not null,
    quadtree bigint check(0 <= quadtree and quadtree <= 68719476736) not null,
    x_distance int not null,
    y_distance int not null,
    x_speed int not null,
    y_speed int not null,
    abs_speed int not null,
    foreign key (cpm_station_id, event_timestamp) references it2s_db.CPM(rsu_station_id, event_timestamp),
    primary key(cpm_station_id, event_timestamp, perceived_object_id)
)
GO
;

-- create table it2s_db.roadEvent(
--     cpm_station_id int not null,
--     event_timestamp int not null,
--     perceived_object_id int not null,
--     latitude int not null,
--     longitude int not null,
--     foreign key(cpm_station_id, event_timestamp, perceived_object_id) references it2s_db.PerceivedObject( cpm_station_id, event_timestamp, perceived_object_id),
--     primary key(cpm_station_id, event_timestamp)
-- )
-- GO
-- ;

create table it2s_db.CAM(
    station_id int foreign key references it2s_db.OBU(emitter_station_id) not null,
    event_timestamp int not null,
    station_type int not null,
    speed int not null,
    latitude int not null,
    longitude int not null,
    quadtree bigint check(0 <= quadtree and quadtree <= 68719476736) not null, -- check limite quadtree zoom 18
    primary key(station_id, event_timestamp)
)
GO
;

create table it2s_db.VAM(
    event_timestamp int not null,
    station_type int not null,
    latitude int not null,
    longitude int not null,
    quadtree bigint check(0 <= quadtree and quadtree <= 68719476736) not null,
    emitter_station_id int foreign key references it2s_db.SmartPhone(emitter_station_id),
    primary key(emitter_station_id, event_timestamp)
)
GO
;

create table it2s_db.DENM(
    emitter_station_id int foreign key references it2s_db.App(emitter_station_id) not null,
    event_timestamp int not null,
    cause_code int not null,
    sub_cause_code int not null,
    latitude int not null,
    longitude int not null,
    duration int,
    quadtree bigint check(0 <= quadtree and quadtree <= 68719476736) not null,
    primary key(emitter_station_id, event_timestamp)
)
GO
;

create table it2s_db.Status(
    id int primary key not null,
    [description] varchar(1024) not null, 
)
GO
;

create table it2s_db.Notification1(
    cam_emitter_station_id int not null,
    cam_event_timestamp int not null,
	perceived_object_emmiter int not null,
	perceived_object_timestamp int not null,
    perceived_object_id int not null,
    status_id int foreign key references it2s_db.Status(id),
	foreign key (perceived_object_emmiter, perceived_object_timestamp, perceived_object_id) references it2s_db.PerceivedObject(cpm_station_id, event_timestamp, perceived_object_id),
    foreign key (cam_emitter_station_id, cam_event_timestamp) references it2s_db.CAM(station_id, event_timestamp),
    primary key(cam_emitter_station_id, cam_event_timestamp, perceived_object_id)
)
GO
;

create table it2s_db.Notification2(
    cam_emitter_station_id int not null,
    cam_event_timestamp int not null,
    status_id int foreign key references it2s_db.Status(id),
    foreign key (cam_emitter_station_id, cam_event_timestamp) references it2s_db.CAM(station_id, event_timestamp),
    primary key(cam_emitter_station_id, cam_event_timestamp)
)
GO
;
