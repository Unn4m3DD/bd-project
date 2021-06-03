create schema it2s_db;
GO
;

create table it2s_db.Emitter
(
    station_id bigint not null,
    current_app_version int not null,
    primary key(station_id)
)
GO
;

create table it2s_db.OBU
(
    emitter_station_id bigint foreign key references it2s_db.Emitter(station_id) not null,
    last_power_status int not null,
    primary key(emitter_station_id)
)
GO
;

create table it2s_db.App
(
    emitter_station_id bigint foreign key references it2s_db.Emitter(station_id) not null,
    configured_language char(2) check( configured_language in ('pt', 'en')) not null,
    primary key(emitter_station_id)
)
GO
;

create table it2s_db.Smartphone
(
    emitter_station_id bigint foreign key references it2s_db.App(emitter_station_id) not null,
    last_power_status int not null,
    primary key(emitter_station_id)
)
GO
;

create table it2s_db.WebSite
(
    emitter_station_id bigint foreign key references it2s_db.App(emitter_station_id) not null,
    browser_version int not null,
    primary key(emitter_station_id)
)
GO
;

create table it2s_db.RSU
(
    emitter_station_id bigint foreign key references it2s_db.Emitter(station_id) not null,
    latitude BIGINT not null,
    longitude BIGINT not null,
    primary key(emitter_station_id)
)
GO
;

create table it2s_db.CPM
(
    rsu_station_id bigint foreign key references it2s_db.RSU(emitter_station_id) not null,
    event_timestamp bigint not null,
    latitude BIGINT not null,
    longitude BIGINT not null,
    quadtree bigint check(0 <= quadtree and quadtree <= 68719476736) not null,
    primary key(rsu_station_id, event_timestamp)
)
GO
;

create table it2s_db.PerceivedObject
(
    cpm_station_id bigint not null,
    event_timestamp bigint not null,
    perceived_object_id int not null,
    latitude BIGINT not null,
    longitude BIGINT not null,
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
--     event_timestamp bigint not null,
--     perceived_object_id int not null,
--     latitude int not null,
--     longitude BIGINT not null,
--     foreign key(cpm_station_id, event_timestamp, perceived_object_id) references it2s_db.PerceivedObject( cpm_station_id, event_timestamp, perceived_object_id),
--     primary key(cpm_station_id, event_timestamp)
-- )
-- GO
-- ;

create table it2s_db.CAM
(
    station_id bigint foreign key references it2s_db.OBU(emitter_station_id) not null,
    event_timestamp bigint not null,
    station_type int not null,
    speed int not null,
    latitude BIGINT not null,
    longitude BIGINT not null,
    quadtree bigint check(0 <= quadtree and quadtree <= 68719476736) not null,
    -- check limite quadtree zoom 18
    primary key(station_id, event_timestamp)
)
GO
;

create table it2s_db.VAM
(
    emitter_station_id bigint foreign key references it2s_db.SmartPhone(emitter_station_id),
    event_timestamp bigint not null,
    station_type int not null,
    latitude BIGINT not null,
    longitude BIGINT not null,
    quadtree bigint check(0 <= quadtree and quadtree <= 68719476736) not null,
    primary key(emitter_station_id, event_timestamp)
)
GO
;

create table it2s_db.DENM
(
    emitter_station_id bigint foreign key references it2s_db.App(emitter_station_id) not null,
    event_timestamp bigint not null,
    cause_code int not null,
    sub_cause_code int not null,
    latitude BIGINT not null,
    longitude BIGINT not null,
    duration int,
    quadtree bigint check(0 <= quadtree and quadtree <= 68719476736) not null,
    primary key(emitter_station_id, event_timestamp)
)
GO
;

create table it2s_db.Status
(
    id int primary key not null,
    [description] varchar(1024) not null,
)
GO
;

create table it2s_db.Notification1
(
    perceived_object_emitter bigint not null,
    perceived_object_timestamp int not null,
    perceived_object_id int not null,
    status_id int foreign key references it2s_db.Status(id),
    foreign key (perceived_object_emitter, perceived_object_timestamp, perceived_object_id)
        references it2s_db.PerceivedObject(cpm_station_id, event_timestamp, perceived_object_id),
    primary key(perceived_object_emitter, perceived_object_timestamp, perceived_object_id)
)
GO
;

create table it2s_db.Notification2
(
    cam_emitter_station_id bigint not null,
    cam_event_timestamp bigint not null,
    status_id int foreign key references it2s_db.Status(id),
    foreign key (cam_emitter_station_id, cam_event_timestamp) references it2s_db.CAM(station_id, event_timestamp),
    primary key(cam_emitter_station_id, cam_event_timestamp)
)
GO
;
CREATE VIEW notifications
AS
            SELECT perceived_object_emitter as emitter_id,
            perceived_object_timestamp as event_timestamp,
            PerceivedObject.perceived_object_id as [object_id],
            latitude,
            longitude,
            quadtree,
            [description]
        FROM it2s_db.Notification1
            JOIN it2s_db.PerceivedObject ON perceived_object_emitter = PerceivedObject.cpm_station_id
                and perceived_object_timestamp = PerceivedObject.event_timestamp
                and Notification1.perceived_object_id = PerceivedObject.perceived_object_id
            join it2s_db.Status on Notification1.status_id = Status.id
    union
        SELECT cam_emitter_station_id as emitter_id,
            cam_event_timestamp as event_timestamp,
            object_id=null,
            latitude,
            longitude,
            quadtree,
            [description]
        FROM it2s_db.Notification2
            JOIN it2s_db.CAM ON cam_emitter_station_id = station_id
                and cam_event_timestamp = event_timestamp
            join it2s_db.Status on Notification2.status_id = Status.id;
GO
INSERT INTO it2s_db.Status
VALUES(0, 'Vehicle going above 120 Km/h');