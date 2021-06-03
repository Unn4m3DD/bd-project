
import express = require('express')

import api from "./api-compiled"
const app = express()
let query: (procedure_name: string, query_parameters: any[]) => Promise<any>

export function setupAPIEndpoint(outer_query: (procedure_name: string, query_parameters: any[]) => Promise<any>) {
  query = outer_query
  setup()
}

async function get_events(
  event_type: string,
  start_time: number,
  end_time: number,
  quadtree: number | undefined,
  zoom: number | undefined,
  station_id: number | undefined) {
  let quadtree_start: number, quadtree_end: number;
  if (zoom && quadtree) {
    quadtree_start = quadtree - Math.pow(2, 18 - zoom)
    quadtree_end = quadtree + Math.pow(2, 18 - zoom)
  }
  if (station_id && zoom && quadtree) {
    return await (query(
      `get_${event_type}_quadtree_and_station_id`,
      [start_time, end_time, quadtree_start, quadtree_end, station_id]
    ))
  }
  if (zoom && quadtree) {
    return await (query(
      `get_${event_type}_quadtree`,
      [start_time, end_time, quadtree_start, quadtree_end]
    ))
  }

  if (station_id) {
    return await (query(
      `get_${event_type}_station_id`,
      [start_time, end_time, station_id]
    ))
  }
  return await (query(
    `get_${event_type}`,
    [start_time, end_time]
  ))

}

const api_response: { [key: string]: (req: express.Request, res: express.Response) => Promise<void> } = {
  car_count: async (req, res) => {
    /*
    req start_time=1620223705
    req end_time=1620223708
    opt location_quadtree=16443191796
    opt quadtree_zoom=18
    */
    let start_time = JSON.parse(req.query.start_time as string)
    let end_time = JSON.parse(req.query.end_time as string)
    let station_id: number;
    let number_quadtree: number;
    let zoom: number = 18;
    if (req.query.rsu_station_id)
      station_id = JSON.parse(req.query.rsu_station_id as string)
    if (req.query.location_quadtree)
      number_quadtree = JSON.parse(req.query.location_quadtree as string)
    if (req.query.quadtree_zoom)
      zoom = JSON.parse(req.query.quadtree_zoom as string)
    const car_count = await get_events("car_count", start_time, end_time, number_quadtree, zoom, station_id)
    res.send({ value: car_count[0][0]["value"] })
  },
  car_speed_average: async (req, res) => {
    /*
    req start_time=1620223705
    req end_time=1620223708
    opt location_quadtree=16443191796
    opt quadtree_zoom=18
    */
    let start_time = JSON.parse(req.query.start_time as string)
    let end_time = JSON.parse(req.query.end_time as string)
    let station_id: number;
    let number_quadtree: number;
    let zoom: number = 18;
    if (req.query.rsu_station_id)
      station_id = JSON.parse(req.query.rsu_station_id as string)
    if (req.query.location_quadtree)
      number_quadtree = JSON.parse(req.query.location_quadtree as string)
    if (req.query.quadtree_zoom)
      zoom = JSON.parse(req.query.quadtree_zoom as string)
    const car_speed = await get_events("car_average_speed", start_time, end_time, number_quadtree, zoom, station_id)
    res.send({ value: car_speed[0][0]["value"] })
  },
  people_count: async (req, res) => {
    /*
    req start_time=1620223705
    req end_time=1620223708
    opt location_quadtree=16443191796
    opt quadtree_zoom=18
    */
    let start_time = JSON.parse(req.query.start_time as string)
    let end_time = JSON.parse(req.query.end_time as string)
    let number_quadtree: number;
    let zoom: number = 18;
    if (req.query.location_quadtree)
      number_quadtree = JSON.parse(req.query.location_quadtree as string)
    if (req.query.quadtree_zoom)
      zoom = JSON.parse(req.query.quadtree_zoom as string)
    const car_speed = await get_events("people_count", start_time, end_time, number_quadtree, zoom, undefined)
    res.send({ value: car_speed[0][0]["value"] })
  },
  event_timestamps: async (req, res) => {
    /*
    req start_time=1620223705
    req end_time=1620223708
    */
    let start_time: number, end_time: number
    if (req.query.time_interval) {
      start_time = JSON.parse(req.query.time_interval as string)[0]
      end_time = JSON.parse(req.query.time_interval as string)[1]
    }
    let timestamps;
    if (start_time && end_time)
      timestamps = (await query(`get_timestamps_between`, [start_time, end_time]))[0]
    else
      timestamps = (await query(`get_timestamps`, []))[0]
    timestamps = timestamps.map(e => e.event_timestamp)
    timestamps.shift()
    timestamps.pop()

    let result = []
    for (let i = 0; i < timestamps.length; i += 2) {
      if ((timestamps[i + 1] - timestamps[i]) > 30)
        result.push([timestamps[i], timestamps[i + 1]])
    }
    res.send(result)

  },
  notifications_list:  async (req, res) => {

    /*
    req start_time=1620223705
    req end_time=1620223708
    opt location_quadtree=16443191796
    opt quadtree_zoom=18
    */
    let start_time = JSON.parse(req.query.start_time as string)
    let end_time = JSON.parse(req.query.end_time as string)
    let station_id: number;
    let number_quadtree: number;
    let zoom: number = 18;
    if (req.query.emitter_id)
      station_id = JSON.parse(req.query.emitter_id as string)
    if (req.query.location_quadtree)
      number_quadtree = JSON.parse(req.query.location_quadtree as string)
    if (req.query.quadtree_zoom)
      zoom = JSON.parse(req.query.quadtree_zoom as string)

    const notification_raw = await get_events("notifications_list", start_time, end_time, number_quadtree, zoom, station_id)
    const notification = {}
    notification_raw[0].forEach(element => {
      if (!notification[element.timestamp])
        notification[element.timestamp] = []
      notification[element.timestamp].push({
        emitter_id: element.emitter_id,
        event_timestamp: element.event_timestamp,
        object_id: element.object_id,
        longitude: element.longitude,
        latitude: element.latitude,
        description: element.description
      })
    })
    res.send(notification)
  },
  events: async (req, res) => {
    /*
    req start_time=1620223705
    req end_time=1620223708
    opt location_quadtree=16443191796
    opt quadtree_zoom=18
    */
    let start_time = JSON.parse(req.query.start_time as string)
    let end_time = JSON.parse(req.query.end_time as string)
    let station_id: number;
    let number_quadtree: number;
    let zoom: number = 18;
    if (req.query.emitter_id)
      station_id = JSON.parse(req.query.emitter_id as string)
    if (req.query.location_quadtree)
      number_quadtree = JSON.parse(req.query.location_quadtree as string)
    if (req.query.quadtree_zoom)
      zoom = JSON.parse(req.query.quadtree_zoom as string)

    const cpm_raw = await get_events("cpms", start_time, end_time, number_quadtree, zoom, station_id)
    const cpm = {}
    cpm_raw[0].forEach(element => {
      if (!cpm[element.timestamp])
        cpm[element.timestamp] = []
      cpm[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        perceived_objects: JSON.parse(element.perceived_objects),
      })
    })

    const cam_raw = await get_events("cams", start_time, end_time, number_quadtree, zoom, station_id)
    const cam = {}
    cam_raw[0].forEach(element => {
      if (!cam[element.timestamp])
        cam[element.timestamp] = []
      cam[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        station_type: element.station_type,
      })
    })


    const vam_raw = await get_events("vams", start_time, end_time, number_quadtree, zoom, station_id)
    const vam = {}
    vam_raw[0].forEach(element => {
      if (!vam[element.timestamp])
        vam[element.timestamp] = []
      vam[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        station_type: element.station_type,
      })
    })


    const denm_raw = await get_events("denms", start_time, end_time, number_quadtree, zoom, station_id)
    const denm = {}
    denm_raw[0].forEach(element => {
      if (!denm[element.timestamp])
        denm[element.timestamp] = []
      denm[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        cause_code: element.cause_code,
        sub_cause_code: element.sub_cause_code,
        duration: element.duration,
      })
    })

    let response = {};
    for (let i = JSON.parse(req.query.start_time as string); i < JSON.parse(req.query.end_time as string); i++) {
      response[i] = {
        "cpm": cpm[i],
        "cam": cam[i],
        "vam": vam[i],
        "denm": denm[i]
      }
    }
    res.send(response)
  },
  cams_list: async (req, res) => {
    /*
    req start_time=1620223705
    req end_time=1620223708
    opt location_quadtree=16443191796
    opt quadtree_zoom=18
    */
    let start_time = JSON.parse(req.query.start_time as string)
    let end_time = JSON.parse(req.query.end_time as string)
    let station_id: number;
    let number_quadtree: number;
    let zoom: number = 18;
    if (req.query.emitter_id)
      station_id = JSON.parse(req.query.emitter_id as string)
    if (req.query.location_quadtree)
      number_quadtree = JSON.parse(req.query.location_quadtree as string)
    if (req.query.quadtree_zoom)
      zoom = JSON.parse(req.query.quadtree_zoom as string)

    const cam_raw = await get_events("vams", start_time, end_time, number_quadtree, zoom, station_id)
    const cam = {}
    cam_raw[0].forEach(element => {
      if (!cam[element.timestamp])
        cam[element.timestamp] = []
      cam[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        station_type: element.station_type,
      })
    })
    res.send(cam)
  },
  cpms_list: async (req, res) => {
    /*
    req start_time=1620223705
    req end_time=1620223708
    opt location_quadtree=16443191796
    opt quadtree_zoom=18
    */
    let start_time = JSON.parse(req.query.start_time as string)
    let end_time = JSON.parse(req.query.end_time as string)
    let station_id: number;
    let number_quadtree: number;
    let zoom: number = 18;
    if (req.query.emitter_id)
      station_id = JSON.parse(req.query.emitter_id as string)
    if (req.query.location_quadtree)
      number_quadtree = JSON.parse(req.query.location_quadtree as string)
    if (req.query.quadtree_zoom)
      zoom = JSON.parse(req.query.quadtree_zoom as string)
    const cpm_raw = await get_events("cpms", start_time, end_time, number_quadtree, zoom, station_id)
    const cpm = {}
    cpm_raw[0].forEach(element => {
      if (!cpm[element.timestamp])
        cpm[element.timestamp] = []
      cpm[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        perceived_objects: JSON.parse(element.perceived_objects),
      })
    })
    res.send(cpm)
  },
  vams_list: async (req, res) => {
    /*
    req start_time=1620223705
    req end_time=1620223708
    opt location_quadtree=16443191796
    opt quadtree_zoom=18
    */
    let start_time = JSON.parse(req.query.start_time as string)
    let end_time = JSON.parse(req.query.end_time as string)
    let station_id: number;
    let number_quadtree: number;
    let zoom: number = 18;
    if (req.query.emitter_id)
      station_id = JSON.parse(req.query.emitter_id as string)
    if (req.query.location_quadtree)
      number_quadtree = JSON.parse(req.query.location_quadtree as string)
    if (req.query.quadtree_zoom)
      zoom = JSON.parse(req.query.quadtree_zoom as string)

    const vam_raw = await get_events("vams", start_time, end_time, number_quadtree, zoom, station_id)
    const vam = {}
    vam_raw[0].forEach(element => {
      if (!vam[element.timestamp])
        vam[element.timestamp] = []
      vam[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        station_type: element.station_type,
      })
    })
    res.send(vam)
  },
  denms_list: async (req, res) => {
    /*
    req start_time=1620223705
    req end_time=1620223708
    opt location_quadtree=16443191796
    opt quadtree_zoom=18
    */
    let start_time = JSON.parse(req.query.start_time as string)
    let end_time = JSON.parse(req.query.end_time as string)
    let station_id: number;
    let number_quadtree: number;
    let zoom: number = 18;
    if (req.query.emitter_id)
      station_id = JSON.parse(req.query.emitter_id as string)
    if (req.query.location_quadtree)
      number_quadtree = JSON.parse(req.query.location_quadtree as string)
    if (req.query.quadtree_zoom)
      zoom = JSON.parse(req.query.quadtree_zoom as string)

    const denm_raw = await get_events("denms", start_time, end_time, number_quadtree, zoom, station_id)
    const denm = {}
    denm_raw[0].forEach(element => {
      if (!denm[element.timestamp])
        denm[element.timestamp] = []
      denm[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        cause_code: element.cause_code,
        sub_cause_code: element.sub_cause_code,
        duration: element.duration,
      })
    })
    res.send(denm)
  },
  obu_list: async (req, res) => {

    if (req.query.emitter_ids) {
      let response = [];
      for (let id of JSON.parse(req.query.emitter_ids as string)) {
        /* we would like to use emitter_station_id in (...emitter_ids) but there is no secure way of doing it without 
         creating complex code. since almost every query will not have more than 3 to 4 ids on a worst case scenario
         this is not a performance issue, we've opted to do it this way */
        response.push(...((await query("get_obu_list_emitter_id", [id]))[0]))
      }
      res.send(response)
    }
    else
      res.send((await query("get_obu_list", []))[0])
  },
  rsu_list: async (req, res) => {
    if (req.query.emitter_ids) {
      let response = [];
      for (let id of JSON.parse(req.query.emitter_ids as string)) {
        /* we would like to use emitter_station_id in (...emitter_ids) but there is no secure way of doing it without 
         creating complex code. since almost every query will not have more than 3 to 4 ids on a worst case scenario
         this is not a performance issue, we've opted to do it this way */
        response.push(...((await query("get_rsus_emitter_id", [id]))[0]))
      }
      res.send(response)
    }
    else
      res.send((await query("get_rsus", []))[0])
  },
  smartphone_list: async (req, res) => {

    if (req.query.emitter_ids) {
      let response = [];
      for (let id of JSON.parse(req.query.emitter_ids as string)) {
        /* we would like to use emitter_station_id in (...emitter_ids) but there is no secure way of doing it without 
         creating complex code. since almost every query will not have more than 3 to 4 ids on a worst case scenario
         this is not a performance issue, we've opted to do it this way */
        response.push(...((await query("get_smartphone_list_emitter_id", [id]))[0]))
      }
      res.send(response)
    }
    else
      res.send((await query("get_smartphone_list", []))[0])
  },
  web_list: async (req, res) => {

    if (req.query.emitter_ids) {
      let response = [];
      for (let id of JSON.parse(req.query.emitter_ids as string)) {
        /* we would like to use emitter_station_id in (...emitter_ids) but there is no secure way of doing it without 
         creating complex code. since almost every query will not have more than 3 to 4 ids on a worst case scenario
         this is not a performance issue, we've opted to do it this way */
        response.push(...((await query("get_website_list_emitter_id", [id]))[0]))
      }
      res.send(response)
    }
    else
      res.send((await query("get_website_list", []))[0])
  },
}

function setup() {
  api.forEach(e => e(app, api_response))
  app.listen(8001)
}
