"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
const sql = require('mssql');
<<<<<<< HEAD
const mqtt = require("mqtt");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sql.connect({
                user: "p2g1",
                password: "Tuprima1!",
                server: "mednat.ieeta.pt",
                serverName: "\\SQLSERVER",
                port: 8101,
                database: "p2g1",
                options: {
                    enableArithAbort: false,
                    trustedConnection: false
                }
            });
            var client = mqtt.connect('mqtt://unn4m3dd.xyz', { port: 21, }); // ws://ccam.av.it.pt clientId: "it2s", username: "it2s", password: "it2sit2s", protocolId: 'MQIsdp', protocolVersion: 3 })
            let can_send_by_id = {
                10: {
                    cpm: true,
                }
            };
            client.on('connect', function () {
                client.subscribe('its_center/inqueue/#');
                console.log("connected");
            });
            client.on('message', (topic, message) => __awaiter(this, void 0, void 0, function* () {
                // message is Buffer
                let topic_arr = topic.split("/");
                let message_type = topic_arr[2];
                let message_content = JSON.parse(message.toString());
                let quadtree = parseInt(topic_arr.slice(3).join(""), 4);
                let query_to_send = "";
                //let id_in_db = await checkEmitterIDInDB(message_content.station_id);
                let id_in_db = true;
                if (id_in_db)
                    switch (message_type) {
                        case "cpm":
                            if (!(message_content.station_id in can_send_by_id))
                                can_send_by_id[message_content.station_id].last_cpm = false;
                            if (!can_send_by_id[message_content.station_id].cpm)
                                break;
                            can_send_by_id[message_content.station_id].cpm = false;
                            setTimeout(() => can_send_by_id[message_content.station_id].cpm = true, 1000);
                            query_to_send = "insert into it2s_db.CPM values(" +
                                message_content.station_id + ", " +
                                message_content.timestamp_delta + ", " +
                                message_content.longitude + ", " +
                                message_content.latitude + ", " +
                                quadtree +
                                ")";
                            console.log(query_to_send);
                            yield sql.query(query_to_send);
                            for (let perceived_object of message_content.perceived_objects) {
                                let abs_speed = Math.sqrt(Math.pow(perceived_object.xSpeed, 2) + Math.pow(perceived_object.ySpeed, 2));
                                query_to_send = "insert into it2s_db.PerceivedObject values(" +
                                    message_content.station_id + ", " +
                                    message_content.timestamp_delta + ", " +
                                    perceived_object.objectID + ", " +
                                    message_content.longitude + ", " +
                                    message_content.latitude + ", " +
                                    quadtree + ", " +
                                    perceived_object.xDistance + ", " +
                                    perceived_object.yDistance + ", " +
                                    perceived_object.xSpeed + ", " +
                                    perceived_object.ySpeed + ", " +
                                    abs_speed + ")";
                                yield sql.query(query_to_send);
                            }
                            break;
                        case "cam":
                            break;
                        case "vam":
                            break;
                        case "denm":
                            console.log(message_content);
                            /*if (!(message_content.station_id in can_send_by_id))
                              can_send_by_id[message_content.station_id].last_cpm = false;
                            if (!can_send_by_id[message_content.station_id].cpm) break;
                            can_send_by_id[message_content.station_id].cpm = false;
                            setTimeout(() => can_send_by_id[message_content.station_id].cpm = true, 1000);
                            query_to_send = "insert into it2s_db.CPM values(" +
                              message_content.station_id + ", " +
                              message_content.timestamp_delta + ", " +
                              message_content.longitude + ", " +
                              message_content.latitude + ", " +
                              quadtree +
                              ")";
                            console.log(query_to_send)
                            await sql.query(query_to_send);*/
                            break;
                        default:
                            //console.log(message_type + " is not recognized")
                            break;
                    }
                //client.end()
            }));
        }
        catch (e) {
            console.log(e);
        }
    });
}
main();
function checkEmitterIDInDB(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield sql.query('Select * from it2s_db.Emitter');
        for (let record of result.recordset) {
            if (id == record.station_id)
                return true;
        }
        return false;
    });
}
/*app.get("/api/timeline", (req, res) => {
  res.send({
    cpm: [
=======
/*
async function main() {
  try {
    await sql.connect({
      user: "p2g1",
      password: "Tuprima1!",
      server: "mednat.ieeta.pt",
      serverName: "\\SQLSERVER",
      port: 8101,
      database: "p2g1",
      options: {
        enableArithAbort: false,
        trustedConnection: false
      }
    })
    var client = mqtt.connect('ws://ccam.av.it.pt', { port: 8884, clientId: "it2s", username: "it2s", password: "it2sit2s", protocolId: 'MQIsdp', protocolVersion: 3 })

    client.on('connect', function () {
      client.subscribe('its_center/inqueue/#')
      console.log("connected")
    })

    client.on('message', (topic, message) => {
      // message is Buffer
      let message_type = topic.split("/")[2]
      let message_content = JSON.parse(message.toString())
      console.log(message_type)
      console.log(message_content)
>>>>>>> acc7e35e6a1cd0941c06ba5164da6e6ccc8c8bee

      switch (message_type) {
        case "cpm":
          //checkEmitterIDInDB(message_content.station_id);

          break;
        case "cam":
          break;
        case "vam":
          break;
        case "denm":
          break;
        default:
          console.log(message_type + " is not recognized")
          break;
      }
      console.log(topic);
      console.log(JSON.parse(message.toString()))
      client.end()
    })

  
  } catch (e) { console.log(e) }
} main();

async function checkEmitterIDInDB(id) {
  const result = await sql.query('Select * from it2s_db.Emitter');
    for(let record of result.recordset) {
      if(id == record.station_id) return true;
    }
    return false;
}
*/
app.get("/api/car_count", (req, res) => {
    res.send({ count: 27 });
});
app.listen(10000);
//# sourceMappingURL=index.js.map