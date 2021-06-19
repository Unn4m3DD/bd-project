create index timestamp_cpm on CPM(event_timestamp);
create index timestamp_perceived_object on PerceivedObject(event_timestamp);
create index timestamp_cam on CAM(event_timestamp);
create index timestamp_vam on VAM(event_timestamp);
create index timestamp_denm on DENM(event_timestamp);


drop index timestamp_cpm on CPM;
drop index timestamp_perceived_object on PerceivedObject;
drop index timestamp_cam on CAM;
drop index timestamp_vam on VAM;
drop index timestamp_denm on DENM;