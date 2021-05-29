
import express = require('express')

import api from "./api-compiled"
const app = express()
let query: (sql_query: string, query_parameters: any[]) => Promise<any>

export function setupAPIEndpoint(outer_query: (sql_query: string, query_parameters: any[]) => Promise<any>) {
  query = outer_query
  setup()
}
const api_response: { [key: string]: (req: express.Request, res: express.Response) => Promise<void> } = {
  car_count: undefined,
  car_speed_average: undefined,
  people_count: undefined,
  max_simultaneous_people_count: undefined,
  min_simultaneous_people_count: undefined,
  min_simultaneous_car_count: undefined,
  max_simultaneous_car_count: undefined,
  cams_list: undefined,
  notifications_list: undefined,
  events: async (req, res) => {
    /*
    req start_time=1620223705
    req end_time=1620223708
    opt location_quadtree=16443191796
    opt quadtree_zoom=18
    */
    let number_quadtree: number;
    let zoom: number = 18;
    if (req.query.location_quadtree)
      number_quadtree = JSON.parse(req.query.location_quadtree as string)
    if (req.query.quadtree_zoom)
      zoom = JSON.parse(req.query.quadtree_zoom as string)
    let response = {};
    for (let i = JSON.parse(req.query.start_time as string); i < JSON.parse(req.query.end_time as string); i++) {
      let cpm = await query(
        `select 
  rsu_station_id as station_id,
  longitude as longitude,
  latitude as latitude,
  quadtree
from CPM where event_timestamp = ?
${req.query.location_quadtree ? "and ? < quadtree and quadtree < ? " : ""}
`,
        [i, ...(req.query.location_quadtree ?
          [number_quadtree - Math.pow(2, 18 - zoom), number_quadtree + Math.pow(2, 18 - zoom)] : [])]
      )

      cpm.forEach(async element => {
        element.perceived_objects = await query(
          `select 
  perceived_object_id as objectID,
  x_distance as xDistance,
  y_distance as yDistance,
  x_speed as xSpeed,
  y_speed as ySpeed 
from 
  CPM inner join PerceivedObject on 
  ? = cpm_station_id and 
  CPM.event_timestamp = PerceivedObject.event_timestamp
  where CPM.event_timestamp = ?`, [element.station_id, i])
      });
      response[i] = {
        "cpm": cpm,
        "cam": query(
          `select 
  station_id as  station_id,
  station_type as station_type,
  speed as speed,
  latitude as latitude,
  longitude as longitude
from CAM where event_timestamp = ?
  ${req.query.location_quadtree ? "and ? < quadtree and quadtree < ? " : ""}`,
          [i, ...(req.query.location_quadtree ?
            [number_quadtree - Math.pow(2, 18 - zoom), number_quadtree + Math.pow(2, 18 - zoom)] : [])]),
        "vam": query(
          `select 
  emitter_station_id as  station_id,
  station_type as station_type,
  latitude as latitude,
  longitude as longitude
from VAM where event_timestamp = ?
  ${req.query.location_quadtree ? "and ? < quadtree and quadtree < ? " : ""}`,
          [i, ...(req.query.location_quadtree ?
            [number_quadtree - Math.pow(2, 18 - zoom), number_quadtree + Math.pow(2, 18 - zoom)] : [])]),
        "denm": query(
          `select 
  emitter_station_id as station_id,
  cause_code as cause_code,
  sub_cause_code as sub_cause_code,
  latitude as latitude,
  longitude as longitude,
  duration as validity_duration
from DENM where event_timestamp = ?
  ${req.query.location_quadtree ? "and ? < quadtree and quadtree < ? " : ""}`,
          [i, ...(req.query.location_quadtree ?
            [number_quadtree - Math.pow(2, 18 - zoom), number_quadtree + Math.pow(2, 18 - zoom)] : [])])
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
  cpms_list: undefined,
  vams_list: undefined,
  denms_list: undefined,
}

function setup() {
  api.forEach(e => e(app, api_response))
  app.listen(8001)
}
