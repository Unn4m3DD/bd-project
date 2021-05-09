"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
const sql = require('mssql');
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