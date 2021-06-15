export default [

  (app, responses) => app.get("/api/car_count", async (req, res) => {
      
      try{
        if(
            req.query.start_time == undefined ||
          typeof(JSON.parse(req.query.start_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on start_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)","disabled":true},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)","disabled":true},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.end_time == undefined ||
          typeof(JSON.parse(req.query.end_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on end_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)","disabled":true},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)","disabled":true},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.location_quadtree != undefined &&
          typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on location_quadtree parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)","disabled":true},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)","disabled":true},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.quadtree_zoom != undefined &&
          typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on quadtree_zoom parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)","disabled":true},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)","disabled":true},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.rsu_station_id != undefined &&
          typeof(JSON.parse(req.query.rsu_station_id as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on rsu_station_id parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)","disabled":true},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on rsu_station_id parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)","disabled":true},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter","disabled":true}]
        })
        return
      }
    
      if(responses["car_count"])
        try{
          await responses["car_count"](req, res)
        } catch(e) {
          console.log("An error occurred on car_count request", e)
          res.send("An error occurred on car_count request, please report to the host");
        }
      else {
        console.log("car_count not implemented yet!")
        res.send({"value":27})
      }
  }),


  (app, responses) => app.get("/api/car_speed_average", async (req, res) => {
      
      try{
        if(
            req.query.start_time == undefined ||
          typeof(JSON.parse(req.query.start_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on start_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.end_time == undefined ||
          typeof(JSON.parse(req.query.end_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on end_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.location_quadtree != undefined &&
          typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on location_quadtree parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.quadtree_zoom != undefined &&
          typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on quadtree_zoom parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.rsu_station_id != undefined &&
          typeof(JSON.parse(req.query.rsu_station_id as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on rsu_station_id parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on rsu_station_id parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621172276","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621174276","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"},{"key":"rsu_station_id","value":"10","description":"(Optional) Array of station id of the emitter"}]
        })
        return
      }
    
      if(responses["car_speed_average"])
        try{
          await responses["car_speed_average"](req, res)
        } catch(e) {
          console.log("An error occurred on car_speed_average request", e)
          res.send("An error occurred on car_speed_average request, please report to the host");
        }
      else {
        console.log("car_speed_average not implemented yet!")
        res.send({"value":73.5})
      }
  }),


  (app, responses) => app.get("/api/people_count", async (req, res) => {
      
      try{
        if(
            req.query.start_time == undefined ||
          typeof(JSON.parse(req.query.start_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on start_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.end_time == undefined ||
          typeof(JSON.parse(req.query.end_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on end_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.location_quadtree != undefined &&
          typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on location_quadtree parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.quadtree_zoom != undefined &&
          typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on quadtree_zoom parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected (default: 18)"}]
        })
        return
      }
    
      if(responses["people_count"])
        try{
          await responses["people_count"](req, res)
        } catch(e) {
          console.log("An error occurred on people_count request", e)
          res.send("An error occurred on people_count request, please report to the host");
        }
      else {
        console.log("people_count not implemented yet!")
        res.send({"value":27})
      }
  }),


  (app, responses) => app.get("/api/notifications_list", async (req, res) => {
      
      try{
        if(
            req.query.start_time == undefined ||
          typeof(JSON.parse(req.query.start_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on start_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"1","description":"(Optional) IDs of the emitters"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"1","description":"(Optional) IDs of the emitters"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.end_time == undefined ||
          typeof(JSON.parse(req.query.end_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on end_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"1","description":"(Optional) IDs of the emitters"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"1","description":"(Optional) IDs of the emitters"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.location_quadtree != undefined &&
          typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on location_quadtree parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"1","description":"(Optional) IDs of the emitters"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"1","description":"(Optional) IDs of the emitters"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.emitter_id != undefined &&
          typeof(JSON.parse(req.query.emitter_id as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on emitter_id parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"1","description":"(Optional) IDs of the emitters"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on emitter_id parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"60045410497","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"1","description":"(Optional) IDs of the emitters"}]
        })
        return
      }
    
      if(responses["notifications_list"])
        try{
          await responses["notifications_list"](req, res)
        } catch(e) {
          console.log("An error occurred on notifications_list request", e)
          res.send("An error occurred on notifications_list request, please report to the host");
        }
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


  (app, responses) => app.get("/api/cams_list", async (req, res) => {
      
      try{
        if(
            req.query.start_time == undefined ||
          typeof(JSON.parse(req.query.start_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on start_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.end_time == undefined ||
          typeof(JSON.parse(req.query.end_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on end_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.location_quadtree == undefined ||
          typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on location_quadtree parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.emitter_id != undefined &&
          typeof(JSON.parse(req.query.emitter_id as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on emitter_id parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on emitter_id parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.quadtree_zoom != undefined &&
          typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on quadtree_zoom parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Required) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
      if(responses["cams_list"])
        try{
          await responses["cams_list"](req, res)
        } catch(e) {
          console.log("An error occurred on cams_list request", e)
          res.send("An error occurred on cams_list request, please report to the host");
        }
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


  (app, responses) => app.get("/api/events", async (req, res) => {
      
      try{
        if(
            req.query.start_time == undefined ||
          typeof(JSON.parse(req.query.start_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on start_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621707278","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621707578","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"17","description":"(Optional) Zoom level of the data collected","disabled":true},{"key":"emitter_id","value":"1","description":"(Optional) Filter per station_id","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621707278","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621707578","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"17","description":"(Optional) Zoom level of the data collected","disabled":true},{"key":"emitter_id","value":"1","description":"(Optional) Filter per station_id","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.end_time == undefined ||
          typeof(JSON.parse(req.query.end_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on end_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621707278","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621707578","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"17","description":"(Optional) Zoom level of the data collected","disabled":true},{"key":"emitter_id","value":"1","description":"(Optional) Filter per station_id","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621707278","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621707578","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"17","description":"(Optional) Zoom level of the data collected","disabled":true},{"key":"emitter_id","value":"1","description":"(Optional) Filter per station_id","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.location_quadtree != undefined &&
          typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on location_quadtree parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621707278","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621707578","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"17","description":"(Optional) Zoom level of the data collected","disabled":true},{"key":"emitter_id","value":"1","description":"(Optional) Filter per station_id","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621707278","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621707578","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"17","description":"(Optional) Zoom level of the data collected","disabled":true},{"key":"emitter_id","value":"1","description":"(Optional) Filter per station_id","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.quadtree_zoom != undefined &&
          typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on quadtree_zoom parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621707278","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621707578","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"17","description":"(Optional) Zoom level of the data collected","disabled":true},{"key":"emitter_id","value":"1","description":"(Optional) Filter per station_id","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621707278","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621707578","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"17","description":"(Optional) Zoom level of the data collected","disabled":true},{"key":"emitter_id","value":"1","description":"(Optional) Filter per station_id","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.emitter_id != undefined &&
          typeof(JSON.parse(req.query.emitter_id as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on emitter_id parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1621707278","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621707578","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"17","description":"(Optional) Zoom level of the data collected","disabled":true},{"key":"emitter_id","value":"1","description":"(Optional) Filter per station_id","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on emitter_id parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1621707278","description":"(Required) Event listing start timestamp (seconds)"},{"key":"end_time","value":"1621707578","description":"(Required) Event listing end timestamp (seconds)"},{"key":"location_quadtree","value":"15011352623","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"17","description":"(Optional) Zoom level of the data collected","disabled":true},{"key":"emitter_id","value":"1","description":"(Optional) Filter per station_id","disabled":true}]
        })
        return
      }
    
      if(responses["events"])
        try{
          await responses["events"](req, res)
        } catch(e) {
          console.log("An error occurred on events request", e)
          res.send("An error occurred on events request, please report to the host");
        }
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


  (app, responses) => app.get("/api/obu_list", async (req, res) => {
      
      try{
        if(
            req.query.emitter_ids != undefined &&
          typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on emitter_ids parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"emitter_ids","value":"[2]","description":"(Optional) IDs of the emitters IDs of the emitters"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"emitter_ids","value":"[2]","description":"(Optional) IDs of the emitters IDs of the emitters"}]
        })
        return
      }
    
      if(responses["obu_list"])
        try{
          await responses["obu_list"](req, res)
        } catch(e) {
          console.log("An error occurred on obu_list request", e)
          res.send("An error occurred on obu_list request, please report to the host");
        }
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


  (app, responses) => app.get("/api/rsu_list", async (req, res) => {
      
      try{
        if(
            req.query.emitter_ids != undefined &&
          typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on emitter_ids parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"emitter_ids","value":"[100, 1337]","description":"(Optional) IDs of the emitters"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"emitter_ids","value":"[100, 1337]","description":"(Optional) IDs of the emitters"}]
        })
        return
      }
    
      if(responses["rsu_list"])
        try{
          await responses["rsu_list"](req, res)
        } catch(e) {
          console.log("An error occurred on rsu_list request", e)
          res.send("An error occurred on rsu_list request, please report to the host");
        }
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


  (app, responses) => app.get("/api/smartphone_list", async (req, res) => {
      
      try{
        if(
            req.query.emitter_ids != undefined &&
          typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on emitter_ids parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"emitter_ids","value":"[101, 102]","description":"(Optional) IDs of the emitters"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"emitter_ids","value":"[101, 102]","description":"(Optional) IDs of the emitters"}]
        })
        return
      }
    
      if(responses["smartphone_list"])
        try{
          await responses["smartphone_list"](req, res)
        } catch(e) {
          console.log("An error occurred on smartphone_list request", e)
          res.send("An error occurred on smartphone_list request, please report to the host");
        }
      else {
        console.log("smartphone_list not implemented yet!")
        res.send([
    {
        emitter_id: 101,
        last_power_status: 100, 
        configured_language: "pt"
    },
    {
        emitter_id: 102,
        configured_language: "en",
        current_app_version: "1.1"
    }
])
      }
  }),


  (app, responses) => app.get("/api/web_list", async (req, res) => {
      
      try{
        if(
            req.query.emitter_ids != undefined &&
          typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on emitter_ids parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"emitter_ids","value":"[101]","description":"(Optional) IDs of the emitters"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"emitter_ids","value":"[101]","description":"(Optional) IDs of the emitters"}]
        })
        return
      }
    
      if(responses["web_list"])
        try{
          await responses["web_list"](req, res)
        } catch(e) {
          console.log("An error occurred on web_list request", e)
          res.send("An error occurred on web_list request, please report to the host");
        }
      else {
        console.log("web_list not implemented yet!")
        res.send([
    {
        emitter_id: 101,
        browser_version: "Safari 6",
        configured_language: "pt"
    }
])
      }
  }),


  (app, responses) => app.get("/api/cpms_list", async (req, res) => {
      
      try{
        if(
            req.query.start_time == undefined ||
          typeof(JSON.parse(req.query.start_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on start_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.end_time == undefined ||
          typeof(JSON.parse(req.query.end_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on end_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.location_quadtree != undefined &&
          typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on location_quadtree parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.emitter_id != undefined &&
          typeof(JSON.parse(req.query.emitter_id as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on emitter_id parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on emitter_id parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.quadtree_zoom != undefined &&
          typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on quadtree_zoom parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1620223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1620223708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"emitter_id","value":"2","description":"(Optional) ID of the emitters"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
      if(responses["cpms_list"])
        try{
          await responses["cpms_list"](req, res)
        } catch(e) {
          console.log("An error occurred on cpms_list request", e)
          res.send("An error occurred on cpms_list request, please report to the host");
        }
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


  (app, responses) => app.get("/api/vams_list", async (req, res) => {
      
      try{
        if(
            req.query.start_time == undefined ||
          typeof(JSON.parse(req.query.start_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on start_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1610223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1621293708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_id","value":"3","description":"(Optional) ID of the emitters"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1610223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1621293708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_id","value":"3","description":"(Optional) ID of the emitters"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.end_time == undefined ||
          typeof(JSON.parse(req.query.end_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on end_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1610223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1621293708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_id","value":"3","description":"(Optional) ID of the emitters"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1610223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1621293708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_id","value":"3","description":"(Optional) ID of the emitters"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.emitter_id != undefined &&
          typeof(JSON.parse(req.query.emitter_id as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on emitter_id parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1610223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1621293708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_id","value":"3","description":"(Optional) ID of the emitters"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on emitter_id parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1610223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1621293708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_id","value":"3","description":"(Optional) ID of the emitters"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.location_quadtree != undefined &&
          typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on location_quadtree parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1610223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1621293708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_id","value":"3","description":"(Optional) ID of the emitters"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1610223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1621293708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_id","value":"3","description":"(Optional) ID of the emitters"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
    
      try{
        if(
            req.query.quadtree_zoom != undefined &&
          typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on quadtree_zoom parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1610223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1621293708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_id","value":"3","description":"(Optional) ID of the emitters"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1610223705","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1621293708","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_id","value":"3","description":"(Optional) ID of the emitters"},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried"},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected"}]
        })
        return
      }
    
      if(responses["vams_list"])
        try{
          await responses["vams_list"](req, res)
        } catch(e) {
          console.log("An error occurred on vams_list request", e)
          res.send("An error occurred on vams_list request, please report to the host");
        }
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


  (app, responses) => app.get("/api/denms_list", async (req, res) => {
      
      try{
        if(
            req.query.start_time == undefined ||
          typeof(JSON.parse(req.query.start_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on start_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1622806954","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1622836954","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters","disabled":true},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on start_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1622806954","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1622836954","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters","disabled":true},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.end_time == undefined ||
          typeof(JSON.parse(req.query.end_time as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on end_time parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1622806954","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1622836954","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters","disabled":true},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on end_time parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1622806954","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1622836954","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters","disabled":true},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.emitter_ids != undefined &&
          typeof(JSON.parse(req.query.emitter_ids as string)) != "object"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on emitter_ids parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1622806954","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1622836954","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters","disabled":true},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on emitter_ids parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1622806954","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1622836954","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters","disabled":true},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.location_quadtree != undefined &&
          typeof(JSON.parse(req.query.location_quadtree as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on location_quadtree parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1622806954","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1622836954","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters","disabled":true},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on location_quadtree parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1622806954","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1622836954","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters","disabled":true},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected","disabled":true}]
        })
        return
      }
    
    
      try{
        if(
            req.query.quadtree_zoom != undefined &&
          typeof(JSON.parse(req.query.quadtree_zoom as string)) != "number"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on quadtree_zoom parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"start_time","value":"1622806954","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1622836954","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters","disabled":true},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on quadtree_zoom parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"start_time","value":"1622806954","description":"(Required) Notification listing start timestamp (seconds)"},{"key":"end_time","value":"1622836954","description":"(Required) Notification listing end timestamp (seconds)"},{"key":"emitter_ids","value":"[2,99]","description":"(Optional) IDs of the emitters","disabled":true},{"key":"location_quadtree","value":"16443191796","description":"(Optional) Tile of the location from where the data must be queried","disabled":true},{"key":"quadtree_zoom","value":"18","description":"(Optional) Zoom level of the data collected","disabled":true}]
        })
        return
      }
    
      if(responses["denms_list"])
        try{
          await responses["denms_list"](req, res)
        } catch(e) {
          console.log("An error occurred on denms_list request", e)
          res.send("An error occurred on denms_list request, please report to the host");
        }
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


  (app, responses) => app.get("/api/event_timestamps", async (req, res) => {
      
      try{
        if(
            req.query.time_interval == undefined ||
          typeof(JSON.parse(req.query.time_interval as string)) != "object"
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on time_interval parameter", 
              info: "This request should look like:",
              sub_info: [{"key":"time_interval","value":"[1621172002, 1621172253]","description":"(Required) Filter by Time Interval","disabled":true}]
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on time_interval parameter", 
          info: "This request should look like:",
          sub_info: [{"key":"time_interval","value":"[1621172002, 1621172253]","description":"(Required) Filter by Time Interval","disabled":true}]
        })
        return
      }
    
      if(responses["event_timestamps"])
        try{
          await responses["event_timestamps"](req, res)
        } catch(e) {
          console.log("An error occurred on event_timestamps request", e)
          res.send("An error occurred on event_timestamps request, please report to the host");
        }
      else {
        console.log("event_timestamps not implemented yet!")
        res.send([[1620223705, 1620223712]])
      }
  }),

]
