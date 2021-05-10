
import express = require('express')
const app = express()
let query: (sql_query: string) => Promise<any>

export function setupAPIEndpoint(outer_query: (sql_query: string) => Promise<any>) {
  query = outer_query
  setup()
}

function setup() {
  app.get("/api/car_count", (req, res) => {
    res.send({ count: 27 })
  })
  app.get("/api/car_speed_average", (req, res) => {
    res.send({ speed: 73.5 })
  })
  app.get("/api/people_count", (req, res) => {
    res.send({ count: 27 })
  })
  app.get("/api/max_simultaneous_people_count", (req, res) => {
    res.send({ max_simultaneos: 18 })
  })
  app.get("/api/min_simultaneous_people_count", (req, res) => {
    res.send({ min_simultaneos: 4 })
  })
  app.get("/api/min_simultaneous_count", (req, res) => {
    res.send({ min_simultaneos: 5 })
  })
  app.get("/api/max_simultaneous_count", (req, res) => {
    res.send({ max_simultaneos: 12 })
  })
  app.get("/api/cams_list", (req, res) => {
    res.send(
      {
        "1620223706":
        {
          "station_id": 2,
          "latitude": 148123123,
          "longitude": 81231233,
          "perceived_objects": [{
            "objectID": 3,
            "xDistance": 2,
            "yDistance": 123,
            "xSpeed": 111,
            "ySpeed": 1231
          },
          {
            "objectID": 4,
            "xDistance": 2,
            "yDistance": 123,
            "xSpeed": 1112,
            "ySpeed": 1231
          },
          {
            "objectID": 5,
            "xDistance": 321,
            "yDistance": 123,
            "xSpeed": 23,
            "ySpeed": 111
          }
          ]
        }
      }
    )
  })
  app.get("/api/notifications_list", (req, res) => {
    res.send(
      [
        {
          emitter_id: 101,
          timestamp: 1620223705,
          latitude: -86950224,
          longitude: 412400078,
          description: "Speed limit exceeded"
        }
      ]
    )
  })

  app.get("/api/events", (req, res) => {
    res.send(
      {
        "1620223705": {
          "cpm": [
            {
              "station_id": 2,
              "longitude": 81231233,
              "latitude": 148123123,
              "perceived_objects": [
                {
                  "objectID": 3,
                  "xDistance": 2,
                  "yDistance": 123,
                  "xSpeed": 111,
                  "ySpeed": 1231
                },
                {
                  "objectID": 4,
                  "xDistance": 2,
                  "yDistance": 123,
                  "xSpeed": 1112,
                  "ySpeed": 1231
                },
                {
                  "objectID": 5,
                  "xDistance": 321,
                  "yDistance": 123,
                  "xSpeed": 23,
                  "ySpeed": 111
                }
              ]
            }
          ],
          "cam": [],
          "vam": [],
          "denm": []
        }
      }
    )
  })
  app.get("/api/obu_list", (req, res) => {
    res.send(
      [
        {
          emitter_id: 150,
          last_power_status: 70
        }
      ]
    )
  })
  app.get("/api/rsu_list", (req, res) => {
    res.send(
      [
        {
          emitter_id: 100,
          latitude: -86950224,
          longitude: 412400078,
        }
      ]
    )
  })
  app.get("/api/smartphone_list", (req, res) => {
    res.send(
      [
        {
          emitter_id: 101,
          configured_language: "pt",
          current_app_version: "1.0"
        },
        {
          emitter_id: 102,
          configured_language: "en",
          current_app_version: "1.1"
        }
      ]
    )
  })
  app.get("/api/web_list", (req, res) => {
    res.send(
      [
        {
          emitter_id: 101,
          browser_version: "Safari 6",
          current_app_version: 1
        }
      ]
    )
  })
  app.get("/api/cpms_list", (req, res) => {
    res.send(
      {
        "1620223706":
        {
          "station_id": 2,
          "station_type": 1,
          "timestamp": 1620223706,
          "latitude": 148123123,
          "longitude": 81231233,
          "speed": 130
        },
        "1620223707":
        {
          "station_id": 99,
          "station_type": 3,
          "timestamp": 1620223707,
          "latitude": 148122123,
          "longitude": 81230233,
          "speed": 145
        }
      }
    )
  })
  app.get("/api/vams_list", (req, res) => {
    res.send(
      {
        "1620223706":
        {
          "station_id": 2,
          "station_type": 1,
          "timestamp": 1620223705,
          "latitude": 148123123,
          "longitude": 81231233
        }
      }
    )
  })
  app.get("/api/denms_list", (req, res) => {
    res.send(
      {
        "1620223706":
        {
          "station_id": 2,
          "station_type": 1,
          "timestamp": 1620223705,
          "latitude": 148123123,
          "longitude": 81231233,
          "cause_code": 3,
          "sub_cause_code": 1,
          "duration": 200,
        }
      }
    )
  })
  app.listen(8001)
}