import { cam_t, cpm_t, denm_t, vam_t } from "../types/types"
import mqtt = require('mqtt')
let query: (sql_query: string, query_parameters: any[]) => Promise<any>
let message_counter = {
  cpm: 0,
  cam: 0,
  vam: 0,
  denm: 0,
}
export function setupDataCollection(outer_query: (sql_query: string, query_parameters: any[]) => Promise<any>) {
  query = outer_query
  setup()
}

async function checkIDInDB(station_id: number): Promise<boolean> {
  const result =
    await query(`Select * from it2s_db.Emitter where station_id = ?`, [station_id]);
  return result.length == 1;
}

const updateIDInDB = {
  cpm: async (cpm: cpm_t) => {
    await query(`update it2s_db.Emitter set current_app_version=? where station_id = ?`, [1,cpm.station_id]); //hardcode
    await query(`update it2s_db.RSU set latitude=?, longitude=? where emitter_station_id = ?`, [cpm.latitude, cpm.longitude, cpm.station_id]);
  },
  cam: async (cam: cam_t) => {
    await query(`update it2s_db.Emitter set current_app_version=? where station_id = ?`, [1,cam.station_id]); //hardcode
    await query(`update it2s_db.OBU set last_power_status=? where  emitter_station_id = ?`, [100, cam.station_id]); //hardcode
  },
  vam: async (vam: vam_t) => {
    await query(`update it2s_db.Emitter set current_app_version=? where  station_id = ?`, [1, vam.station_id]); //hardcode
    await query(`update it2s_db.App set configured_language=? where  emitter_station_id = ?`, ['pt', vam.station_id]); //hardcode
    await query(`update it2s_db.Smartphone set last_power_status=? where  emitter_station_id = ?`, [100, vam.station_id]); //hardcode
  },
  denm: async (denm: denm_t) => {
    await query(`update it2s_db.Emitter set current_app_version=? where  station_id = ?`, [1,denm.station_id]); //hardcode
    await query(`update it2s_db.App set configured_language=? where  emitter_station_id = ?`, ['pt', denm.station_id]); //hardcode
  }
}

const insertIDInDB = {
  cpm: async (cpm: cpm_t) => {
    await query(`insert into it2s_db.Emitter values(?, ?)`, [cpm.station_id, 1]); //hardcoded
    await query(`insert into it2s_db.RSU values(?,?,?)`, [cpm.station_id, cpm.latitude, cpm.longitude]);
  },
  cam: async (cam: cam_t) => {
    await query(`insert into it2s_db.Emitter values(?, ?)`, [cam.station_id, 1]); //hardcoded
    await query(`insert into it2s_db.OBU values(?, ?)`, [cam.station_id, 100]); //hardcoded
  },
  vam: async (vam: vam_t) => {
    await query(`insert into it2s_db.Emitter values(?, ?)`, [vam.station_id, 1]); //hardcoded
    await query(`insert into it2s_db.App values(?, ?)`, [vam.station_id, 'pt']); //hardcoded
    await query(`insert into it2s_db.Smartphone values(?, ?)`, [vam.station_id, 100]); //hardcoded
  },
  denm: async (denm: denm_t) => {
    await query(`insert into it2s_db.Emitter values(?, ?)`, [denm.station_id, 1]); //hardcoded
    await query(`insert into it2s_db.App values(?, ?)`, [denm.station_id, 'pt']); //hardcoded
  }
}


const dbOnMessage = {
  cpm: async (cpm: cpm_t, quadtree: number) => {
    message_counter.cpm++
    const current_timestamp = Math.floor(Date.now() / 1000)
    await query(`insert into it2s_db.CPM values(?,?,?,?,?)`,
      [cpm.station_id, current_timestamp, cpm.latitude, cpm.longitude, quadtree]);
    for (let perceived_object of cpm.perceived_objects) {
      let abs_speed = Math.sqrt(Math.pow(perceived_object.xSpeed, 2) + Math.pow(perceived_object.ySpeed, 2));
      const object_latitude = (cpm.latitude / 10e6 + (perceived_object.yDistance / 100 / 6371000) * (180 / Math.PI)) * 10e6;
      const object_longitude =
        (cpm.longitude / 10e6 + (perceived_object.xDistance / 100 / 6371000) * (180 / Math.PI) /
          Math.cos(object_latitude * Math.PI / 180)) * 10e6;
      await query(`insert into it2s_db.PerceivedObject values(?,?,?,?,?,?,?,?,?,?,?)`, [
        cpm.station_id,
        current_timestamp,
        perceived_object.objectID,
        Math.floor(object_latitude),
        Math.floor(object_longitude),
        quadtree,
        perceived_object.xDistance,
        perceived_object.yDistance,
        perceived_object.xSpeed,
        perceived_object.ySpeed,
        abs_speed]);
    }
  },
  cam: async (cam: cam_t, quadtree: number) => {
    try {
      message_counter.cam++
      const query_to_send = `insert into it2s_db.CAM values(?,?,?,?,?,?,?)`; //${cam.speed} hardcoded 0
      const query_params = [cam.station_id, Math.floor(Date.now() / 1000), cam.station_type, 0, cam.latitude, cam.longitude, quadtree]
      await query(query_to_send, query_params);
    } catch { console.log("fix me please")}
  },
  vam: async (vam: vam_t, quadtree: number) => {
    message_counter.vam++
    const query_to_send = `insert into it2s_db.VAM values(?,?,?,?,?,?)`;
    const query_params = [vam.station_id, Math.floor(Date.now() / 1000), vam.station_type, vam.latitude, vam.longitude, quadtree]
    await query(query_to_send, query_params);
  },
  denm: async (denm: denm_t, quadtree: number) => {
    message_counter.denm++
    const query_to_send = `insert into it2s_db.DENM values(?,?,?,?,?,?,?,?)`;
    const query_params = [denm.station_id, Math.floor(Date.now() / 1000), denm.cause_code, denm.sub_cause_code, denm.latitude, denm.longitude, denm.validity_duration, quadtree]
    await query(query_to_send, query_params);
  }
}

const mosquitto_credentials: { [key: string]: { brokerUrl?: any, opts?: mqtt.IClientOptions } } = {
  "msSql": { brokerUrl: 'mqtt://unn4m3dd.xyz', opts: { port: 21, } },
  "mariadb": { brokerUrl: 'mqtt://localhost', opts: { port: 1883, username: "it2s", password: "it2sit2s" } },
}

async function setup() {
  try {
    const credentials = mosquitto_credentials[process.argv[2]]
    let client = mqtt.connect(credentials.brokerUrl, credentials.opts)
    let sent_recently = {
      cpm: {},
      cam: {},
      denm: {},
      vam: {},
    }
    client.on('connect', function () {
      console.log("Connected to mosquitto: ", credentials.brokerUrl)
      client.subscribe('its_center/inqueue/cpm/#')
      client.subscribe('its_center/inqueue/denm/#')
      client.subscribe('its_center/inqueue/cam/#')
      client.subscribe('its_center/inqueue/vam/#')
      //console.log("connected")
    })
    client.on('message', async (topic, message) => {
      let topic_arr = topic.split("/")
      let message_type = topic_arr[2]
      let message_content = JSON.parse(message.toString())
      let quadtree = parseInt(topic_arr.slice(3, topic_arr.length - 1).join("").padEnd(18,"0"), 4)
      if (topic_arr.length <= 3) return;
      try {
        let id_in_db = await checkIDInDB(message_content.station_id);
        if (id_in_db) await updateIDInDB[message_type](message_content);
        else await insertIDInDB[message_type](message_content)
      } catch (e) {
        /*this path might be taken due to race conditions but the db ensures data integrity
        this is not a problem because it only occurs once or twice every time a new id is added to the db*/
      }
      if (!sent_recently[message_type][message_content.station_id]) {
        sent_recently[message_type][message_content.station_id] = true;
        setTimeout(() => sent_recently[message_type][message_content.station_id] = false, 1000);
        dbOnMessage[message_type](message_content, quadtree);
      }
    })
  } catch (e) { console.log(e) }
  // setInterval(() => { console.log(message_counter) }, 1000)
}