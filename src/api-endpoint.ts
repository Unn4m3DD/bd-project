
import express = require('express')

import api from "./api-compiled"
const app = express()
let query: (sql_query: string, query_parameters: any[]) => Promise<any>

export function setupAPIEndpoint(outer_query: (sql_query: string, query_parameters: any[]) => Promise<any>) {
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
      `call get_${event_type}s_quadtree_and_station_id(?, ?, ?, ?, ?);`,
      [start_time, end_time, quadtree_start, quadtree_end, station_id]
    ))
  }
  if (zoom && quadtree) {
    return await (query(
      `call get_${event_type}s_quadtree(?, ?, ?, ?);`,
      [start_time, end_time, quadtree_start, quadtree_end]
    ))
  }

  if (station_id) {
    return await (query(
      `call get_${event_type}s_station_id(?, ?, ?);`,
      [start_time, end_time, station_id]
    ))
  }
  return await (query(
    `call get_${event_type}s(?, ?);`,
    [start_time, end_time]
  ))

}

const api_response: { [key: string]: (req: express.Request, res: express.Response) => Promise<void> } = {
  car_count: undefined,
  car_speed_average: undefined,
  people_count: undefined,
  max_simultaneous_people_count: undefined,
  min_simultaneous_people_count: undefined,
  min_simultaneous_car_count: undefined,
  max_simultaneous_car_count: undefined,
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
      timestamps = (await query(`call get_timestamps_between(?, ?)`, [start_time, end_time]))[0]
    else
      timestamps = (await query(`call get_timestamps()`, []))[0]
    timestamps = timestamps.map(e => e.event_timestamp)

    let result = []
    let max = 0
    for (let i = 0; i < timestamps.length; i += 2) {
      if ((timestamps[i + 1] - timestamps[i]) > 30)
        result.push([timestamps[i], timestamps[i + 1]])
    }
    res.send(result)

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

    const cam_raw = await get_events("vam", start_time, end_time, number_quadtree, zoom, station_id)
    const cam = {}
    cam_raw[0].forEach(element => {
      if (!cam[element.timestamp])
        cam[element.timestamp] = []
      cam[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        station_type: element.station_type,
        perceived_objects: JSON.parse(element.perceived_objects),
      })
    })
    res.send(cam)
  },
  notifications_list: undefined,
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

    const cpm_raw = await get_events("cpm", start_time, end_time, number_quadtree, zoom, station_id)
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

    const cam_raw = await get_events("cam", start_time, end_time, number_quadtree, zoom, station_id)
    const cam = {}
    cam_raw[0].forEach(element => {
      if (!cam[element.timestamp])
        cam[element.timestamp] = []
      cam[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        station_type: element.station_type,
        perceived_objects: JSON.parse(element.perceived_objects),
      })
    })


    const vam_raw = await get_events("vam", start_time, end_time, number_quadtree, zoom, station_id)
    const vam = {}
    vam_raw[0].forEach(element => {
      if (!vam[element.timestamp])
        vam[element.timestamp] = []
      vam[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        station_type: element.station_type,
        perceived_objects: JSON.parse(element.perceived_objects),
      })
    })

    let response = {};
    for (let i = JSON.parse(req.query.start_time as string); i < JSON.parse(req.query.end_time as string); i++) {
      response[i] = {
        "cpm": cpm[i],
        "cam": cam[i],
        "vam": vam[i]
      }
    }
    res.send(response)
  },
  obu_list: undefined,
  rsu_list: async (req, res) => {
    if (req.query.emitter_ids) {
      let response = [];
      for (let id of JSON.parse(req.query.emitter_ids as string)) {
        /* we would like to use emitter_station_id in (...emitter_ids) but there is no secure way of doing it without 
         creating complex code. since almost every query will not have more than 3 to 4 ids on a worst case scenario
         this is not a performance issue, we've opted to do it this way */
        console.log(id)
        response.push(...await query("select * from it2s_db.RSU where emitter_station_id = ?", [id]))
      }
      res.send(response)
    }
    else
      res.send(await query("select * from it2s_db.RSU", []))
  },
  smartphone_list: undefined,
  web_list: undefined,
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
    const cpm_raw = await get_events("cpm", start_time, end_time, number_quadtree, zoom, station_id)
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

    const vam_raw = await get_events("vam", start_time, end_time, number_quadtree, zoom, station_id)
    const vam = {}
    vam_raw[0].forEach(element => {
      if (!vam[element.timestamp])
        vam[element.timestamp] = []
      vam[element.timestamp].push({
        station_id: element.station_id,
        longitude: element.longitude,
        latitude: element.latitude,
        station_type: element.station_type,
        perceived_objects: JSON.parse(element.perceived_objects),
      })
    })
    res.send(vam)
  },
  denms_list: undefined,
}

function setup() {
  api.forEach(e => e(app, api_response))
  app.listen(8001)
}
