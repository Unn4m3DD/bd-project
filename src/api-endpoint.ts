
import express = require('express')
import api from "./api-compiled"
const app = express()
let query: (sql_query: string, query_parameters: string[]) => Promise<any>

export function setupAPIEndpoint(outer_query: (sql_query: string, query_parameters: string[]) => Promise<any>) {
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
  events: undefined,
  obu_list: undefined,
  rsu_list: async (req, res) => {
    res.send(await query("select * from it2s_db.RSU where emitter_id in ?", [req.query.emitter_ids as string]))
  },
  smartphone_list: undefined,
  web_list: undefined,
  cpms_list: undefined,
  vams_list: undefined,
  denms_list: undefined,
}

function setup() {
  app.get("sadf", (req, res) => { })
  api.forEach(e => e(app, api_response))
  app.listen(8001)
}