create index timestamp_cpm on it2s_db.CPM(event_timestamp);
create index timestamp_perceived_object on it2s_db.PerceivedObject(event_timestamp);
create index timestamp_cam on it2s_db.CAM(event_timestamp);
create index timestamp_vam on it2s_db.VAM(event_timestamp);
create index timestamp_denm on it2s_db.DENM(event_timestamp);
create index username on it2s_db.dbUser(normalized_username);


drop index timestamp_cpm on it2s_db.CPM;
drop index timestamp_perceived_object on it2s_db.PerceivedObject;
drop index timestamp_cam on it2s_db.CAM;
drop index timestamp_vam on it2s_db.VAM;
drop index timestamp_denm on it2s_db.DENM;