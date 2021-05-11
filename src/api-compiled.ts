export default [

  (app, responses) => app.get("/api/car_count", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.location_quadtree != undefined &&
      typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.quadtree_zoom != undefined &&
      typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.station_id != undefined &&
      typeof(JSON.parse(req.query.station_id as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on station_id parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    if(responses["car_count"])
      responses["car_count"](req, res)
    else {
      console.log("car_count not implemented yet!")
      res.send({"value":27})
    }
  }),


  (app, responses) => app.get("/api/car_speed_average", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.location_quadtree != undefined &&
      typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.quadtree_zoom != undefined &&
      typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.station_id != undefined &&
      typeof(JSON.parse(req.query.station_id as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on station_id parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    if(responses["car_speed_average"])
      responses["car_speed_average"](req, res)
    else {
      console.log("car_speed_average not implemented yet!")
      res.send({"value":73.5})
    }
  }),


  (app, responses) => app.get("/api/people_count", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
        })
      }
    
      if(
        req.query.location_quadtree != undefined &&
      typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
        })
      }
    
      if(
        req.query.quadtree_zoom != undefined &&
      typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
        })
      }
    if(responses["people_count"])
      responses["people_count"](req, res)
    else {
      console.log("people_count not implemented yet!")
      res.send({"value":27})
    }
  }),


  (app, responses) => app.get("/api/max_simultaneous_people_count", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"}]
        })
      }
    
      if(
        req.query.location_quadtree != undefined &&
      typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"}]
        })
      }
    
      if(
        req.query.quadtree_zoom != undefined &&
      typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"}]
        })
      }
    
      if(
        req.query.timte_interval != undefined &&
      typeof(JSON.parse(req.query.timte_interval as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on timte_interval parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"}]
        })
      }
    if(responses["max_simultaneous_people_count"])
      responses["max_simultaneous_people_count"](req, res)
    else {
      console.log("max_simultaneous_people_count not implemented yet!")
      res.send({"value":18})
    }
  }),


  (app, responses) => app.get("/api/min_simultaneous_people_count", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"}]
        })
      }
    
      if(
        req.query.location_quadtree != undefined &&
      typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"}]
        })
      }
    
      if(
        req.query.quadtree_zoom != undefined &&
      typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"}]
        })
      }
    
      if(
        req.query.timte_interval != undefined &&
      typeof(JSON.parse(req.query.timte_interval as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on timte_interval parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"}]
        })
      }
    if(responses["min_simultaneous_people_count"])
      responses["min_simultaneous_people_count"](req, res)
    else {
      console.log("min_simultaneous_people_count not implemented yet!")
      res.send({"value":4})
    }
  }),


  (app, responses) => app.get("/api/min_simultaneous_car_count", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.location_quadtree != undefined &&
      typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.quadtree_zoom != undefined &&
      typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.timte_interval != undefined &&
      typeof(JSON.parse(req.query.timte_interval as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on timte_interval parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.station_id != undefined &&
      typeof(JSON.parse(req.query.station_id as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on station_id parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    if(responses["min_simultaneous_car_count"])
      responses["min_simultaneous_car_count"](req, res)
    else {
      console.log("min_simultaneous_car_count not implemented yet!")
      res.send({"value":5})
    }
  }),


  (app, responses) => app.get("/api/max_simultaneous_car_count", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.location_quadtree != undefined &&
      typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.quadtree_zoom != undefined &&
      typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.timte_interval != undefined &&
      typeof(JSON.parse(req.query.timte_interval as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on timte_interval parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    
      if(
        req.query.station_id != undefined &&
      typeof(JSON.parse(req.query.station_id as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on station_id parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"timte_interval","value":"10","description":"(Optional) Time interval considered simultaneos (seconds) (default: 10s)"},{"key":"station_id","value":"[1, 2]","description":"(Optional) Array of station id of the emitter"}]
        })
      }
    if(responses["max_simultaneous_car_count"])
      responses["max_simultaneous_car_count"](req, res)
    else {
      console.log("max_simultaneous_car_count not implemented yet!")
      res.send({"value":12})
    }
  }),


  (app, responses) => app.get("/api/cams_list", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_ids","value":"[2, 99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_ids","value":"[2, 99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.location_quadtree == undefined ||
      typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_ids","value":"[2, 99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.emitter_ids != undefined &&
      typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_ids","value":"[2, 99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    if(responses["cams_list"])
      responses["cams_list"](req, res)
    else {
      console.log("cams_list not implemented yet!")
      res.send({
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
    })
    }
  }),


  (app, responses) => app.get("/api/notifications_list", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"[10, 1]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"[10, 1]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.location_quadtree != undefined &&
      typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"[10, 1]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.emitter_id != undefined &&
      typeof(JSON.parse(req.query.emitter_id as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on emitter_id parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"[10, 1]","description":"(Optional) IDs of the emitters"}]
        })
      }
    if(responses["notifications_list"])
      responses["notifications_list"](req, res)
    else {
      console.log("notifications_list not implemented yet!")
      res.send([
    {
        emitter_id: 101,
        timestamp: 1620223705,
        latitude: -86950224,
        longitude: 412400078,
        description: "Speed limit exceeded"
    }
])
    }
  }),


  (app, responses) => app.get("/api/events", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
      }
    
      if(
        req.query.location_quadtree != undefined &&
      typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
      }
    
      if(
        req.query.quadtree_zoom != undefined &&
      typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
      }
    if(responses["events"])
      responses["events"](req, res)
    else {
      console.log("events not implemented yet!")
      res.send({
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
})
    }
  }),


  (app, responses) => app.get("/api/obu_list", (req, res) => {
    
      if(
        req.query.emitter_ids == undefined ||
      typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"emitter_ids","value":"[150]","description":"(Required) IDs of the emitters"}]
        })
      }
    if(responses["obu_list"])
      responses["obu_list"](req, res)
    else {
      console.log("obu_list not implemented yet!")
      res.send([
    {
        emitter_id: 150,
        last_power_status: 70
    }
])
    }
  }),


  (app, responses) => app.get("/api/rsu_list", (req, res) => {
    
      if(
        req.query.emitter_ids != undefined &&
      typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"emitter_ids","value":"[100, 1337]","description":"(Optional) IDs of the emitters"}]
        })
      }
    if(responses["rsu_list"])
      responses["rsu_list"](req, res)
    else {
      console.log("rsu_list not implemented yet!")
      res.send([
    {
        emitter_id: 100,
        latitude: -86950224,
        longitude: 412400078,
    }
])
    }
  }),


  (app, responses) => app.get("/api/smartphone_list", (req, res) => {
    
      if(
        req.query.emitter_ids != undefined &&
      typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"emitter_ids","value":"[101, 102]","description":"(Optional) IDs of the emitters"}]
        })
      }
    if(responses["smartphone_list"])
      responses["smartphone_list"](req, res)
    else {
      console.log("smartphone_list not implemented yet!")
      res.send([
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
])
    }
  }),


  (app, responses) => app.get("/api/web_list", (req, res) => {
    
      if(
        req.query.emitter_ids != undefined &&
      typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"emitter_ids","value":"[101]","description":"(Optional) IDs of the emitters"}]
        })
      }
    if(responses["web_list"])
      responses["web_list"](req, res)
    else {
      console.log("web_list not implemented yet!")
      res.send([
    {
        emitter_id: 101,
        browser_version: "Safari 6",
        current_app_version: 1
    }
])
    }
  }),


  (app, responses) => app.get("/api/cpms_list", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_ids","value":"[2, 99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_ids","value":"[2, 99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.location_quadtree != undefined &&
      typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_ids","value":"[2, 99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.emitter_ids != undefined &&
      typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_ids","value":"[2, 99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    if(responses["cpms_list"])
      responses["cpms_list"](req, res)
    else {
      console.log("cpms_list not implemented yet!")
      res.send({
      "1620223706":[
          
      {
      "station_id": 2,
      "station_type": 1,
      "timestamp": 1620223706,
      "latitude": 148123123,
      "longitude": 81231233,
      "speed": 130
  }
      ],
   "1620223707":[
      {
      "station_id": 99,
      "station_type": 3,
      "timestamp": 1620223707,
      "latitude": 148122123,
      "longitude": 81230233,
      "speed": 145
      }]
    })
    }
  }),


  (app, responses) => app.get("/api/vams_list", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.emitter_ids != undefined &&
      typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    if(responses["vams_list"])
      responses["vams_list"](req, res)
    else {
      console.log("vams_list not implemented yet!")
      res.send({
      "1620223706":[
      {
        "station_id": 2,
        "station_type": 1,
        "timestamp": 1620223705,
        "latitude": 148123123,
        "longitude": 81231233
      }
      ]
    })
    }
  }),


  (app, responses) => app.get("/api/denms_list", (req, res) => {
    
      if(
        req.query.start_time == undefined ||
      typeof(JSON.parse(req.query.start_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.end_time == undefined ||
      typeof(JSON.parse(req.query.end_time as string)) != "number"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    
      if(
        req.query.emitter_ids != undefined &&
      typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This requesto should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters"}]
        })
      }
    if(responses["denms_list"])
      responses["denms_list"](req, res)
    else {
      console.log("denms_list not implemented yet!")
      res.send({
    "1620223706":
    [{
    "station_id": 2,
    "station_type": 1,
    "timestamp": 1620223705,
    "latitude": 148123123,
    "longitude": 81231233,
    "cause_code": 3,
    "sub_cause_code": 1,
    "duration": 200,
}]
})
    }
  }),

]
