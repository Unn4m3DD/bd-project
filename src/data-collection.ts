import { cam_t, cpm_t, denm_t, vam_t } from "../types/types"
import mqtt = require('mqtt')
let query: (procedure_name: string, query_parameters: any[]) => Promise<any>
let message_counter = {
  cpm: 0,
  cam: 0,
  vam: 0,
  denm: 0,
}
export function setupDataCollection(outer_query: (procedure_name: string, query_parameters: any[]) => Promise<any>) {
  query = outer_query
  setup()
}

const insertOrUpdateOnDb = {
  cpm: async (cpm: cpm_t) => {
    const app_version = 1; //TODO hardcoded
    await query(`insert_rsu`, [cpm.station_id, app_version, cpm.latitude, cpm.longitude]);
  },
  cam: async (cam: cam_t) => {
    const app_version = 1; //TODO hardcoded
    const power_status = 100; //TODO hardcoded
    await query(`insert_obu`, [cam.station_id, app_version, power_status]);
  },
  vam: async (vam: vam_t) => {
    const app_version = 1; //TODO hardcoded
    const power_status = 100; //TODO hardcoded
    const language = "pt" //TODO hardcoded
    await (query("insert_smartphone", [vam.station_id, app_version, power_status, language]))

  },
  denm: async (denm: denm_t) => {
    const app_version = 1; //TODO hardcoded
    const power_status = 100; //TODO hardcoded
    const language = "pt" //TODO hardcoded
    const browser_verion = 10 //TODO hardcoded
    if (denm.origin == "mobile")
      await (query("insert_smartphone", [denm.station_id, app_version, power_status, language]))
    else
      await (query("insert_website", [denm.station_id, app_version, browser_verion, language]))
  }
}


const dbOnMessage = {
  cpm: async (cpm: cpm_t, quadtree: number) => {
    message_counter.cpm++
    const current_timestamp = Math.floor(Date.now() / 1000)
    await query(`insert_cpm`,
      [cpm.station_id, current_timestamp, cpm.latitude, cpm.longitude, quadtree]);

    cpm.perceived_objects.forEach((perceived_object) => {
      query(`insert_perceived_object`, [
        cpm.station_id,
        current_timestamp,
        perceived_object.objectID,
        cpm.latitude,
        cpm.longitude,
        quadtree,
        perceived_object.xDistance,
        perceived_object.yDistance,
        perceived_object.xSpeed,
        perceived_object.ySpeed
      ])
    })
  },
  cam: async (cam: cam_t, quadtree: number) => {
    const speed = 0; //TODO hardcoded
    await query("insert_cam", [
      cam.station_id,
      Math.floor(Date.now() / 1000),
      cam.station_type,
      speed,
      cam.latitude,
      cam.longitude,
      quadtree
    ]);
  },
  vam: async (vam: vam_t, quadtree: number) => {
    message_counter.vam++
    await query("insert_vam", [
      vam.station_id,
      Math.floor(Date.now() / 1000),
      vam.station_type,
      vam.latitude,
      vam.longitude,
      quadtree
    ]);
  },
  denm: async (denm: denm_t, quadtree: number) => {
    message_counter.denm++
    console.log([
      denm.station_id, 
      Math.floor(Date.now() / 1000),
      denm.cause_code,
      denm.sub_cause_code,
      denm.latitude,
      denm.longitude,
      denm.validity_duration,
      quadtree
    ])
    await query("insert_denm", [
      denm.station_id, 
      Math.floor(Date.now() / 1000),
      denm.cause_code,
      denm.sub_cause_code,
      denm.latitude,
      denm.longitude,
      denm.validity_duration,
      quadtree
    ]);
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
      let quadtree = parseInt(topic_arr.slice(3, topic_arr.length - 1).join("").padEnd(18, "0"), 4)
      if (topic_arr.length <= 3) return;
      try {
        await insertOrUpdateOnDb[message_type](message_content);
      } catch (e) {
        console.log(e)
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