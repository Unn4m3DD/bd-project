
ALTER TABLE it2s_db.OBU DROP foreign key OBU_ibfk_1;
ALTER TABLE it2s_db.App DROP foreign key App_ibfk_1;
ALTER TABLE it2s_db.Smartphone DROP foreign key Smartphone_ibfk_1;
ALTER TABLE it2s_db.WebSite DROP foreign key WebSite_ibfk_1;
ALTER TABLE it2s_db.RSU DROP foreign key RSU_ibfk_1;
ALTER TABLE it2s_db.CPM DROP foreign key CPM_ibfk_1;
ALTER TABLE it2s_db.PerceivedObject DROP foreign key PerceivedObject_ibfk_1;
ALTER TABLE it2s_db.CAM DROP foreign key CAM_ibfk_1;
ALTER TABLE it2s_db.VAM DROP foreign key VAM_ibfk_1;
ALTER TABLE it2s_db.DENM DROP foreign key DENM_ibfk_1;
ALTER TABLE it2s_db.Notification1 DROP foreign key Notification1_ibfk_1;
ALTER TABLE it2s_db.Notification2 DROP foreign key Notification2_ibfk_1;


alter table `Emitter` modify `station_id` bigint; 
alter table `OBU` modify `emitter_station_id` bigint; 
alter table `App` modify `emitter_station_id` bigint; 
alter table `Smartphone` modify `emitter_station_id` bigint; 
alter table `WebSite` modify `emitter_station_id` bigint; 
alter table `RSU` modify `emitter_station_id` bigint; 
alter table `CPM` modify `rsu_station_id` bigint; 
alter table `PerceivedObject` modify `cpm_station_id` bigint; 
alter table `CAM` modify `station_id` bigint; 
alter table `VAM` modify `emitter_station_id` bigint; 
alter table `DENM` modify `emitter_station_id` bigint; 
alter table `Notification1` modify `perceived_object_emmiter` bigint; 
alter table `Notification2` modify `cam_emitter_station_id` bigint; 


ALTER TABLE it2s_db.OBU add foreign key (emitter_station_id) references it2s_db.Emitter(station_id);
ALTER TABLE it2s_db.App add foreign key (emitter_station_id) references it2s_db.Emitter(station_id);
ALTER TABLE it2s_db.Smartphone add foreign key (emitter_station_id) references it2s_db.App(emitter_station_id);
ALTER TABLE it2s_db.WebSite add foreign key (emitter_station_id) references it2s_db.App(emitter_station_id);
ALTER TABLE it2s_db.RSU add foreign key (emitter_station_id) references it2s_db.Emitter(station_id);
ALTER TABLE it2s_db.CPM add foreign key (rsu_station_id) references it2s_db.RSU(emitter_station_id);
ALTER TABLE it2s_db.PerceivedObject add foreign key (cpm_station_id, event_timestamp) references it2s_db.CPM(rsu_station_id, event_timestamp);
ALTER TABLE it2s_db.CAM add foreign key (station_id) references it2s_db.OBU(emitter_station_id);
ALTER TABLE it2s_db.VAM add foreign key (emitter_station_id) references it2s_db.Smartphone(emitter_station_id);
ALTER TABLE it2s_db.DENM add foreign key (emitter_station_id) references it2s_db.App(emitter_station_id);
ALTER TABLE it2s_db.Notification1 add foreign key (
    perceived_object_emmiter,
    perceived_object_timestamp,
    perceived_object_id
  ) references it2s_db.PerceivedObject(
    cpm_station_id,
    event_timestamp,
    perceived_object_id
  );
ALTER TABLE it2s_db.Notification1 add foreign key (status_id) references it2s_db.Status(id);
ALTER TABLE it2s_db.Notification2 add foreign key (cam_emitter_station_id, cam_event_timestamp) references it2s_db.CAM(station_id, event_timestamp);
ALTER TABLE it2s_db.Notification2 add foreign key (status_id) references it2s_db.Status(id);
