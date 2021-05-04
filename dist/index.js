"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
const sql = require('mssql');
const mqtt = require("mqtt");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            /*await sql.connect({
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
            })*/
            var client = mqtt.connect('ws://ccam.av.it.pt', { port: 8884, clientId: "it2s", username: "it2s", password: "it2sit2s", protocolId: 'MQIsdp', protocolVersion: 3 });
            client.on('connect', function () {
                client.subscribe('its_center/inqueue/#');
                console.log("connected");
            });
            client.on('message', (topic, message) => {
                // message is Buffer
                let message_type = topic.split("/")[2];
                let message_content = JSON.parse(message.toString());
                console.log(message_type);
                console.log(message_content);
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
                        console.log(message_type + " is not recognized");
                        break;
                }
                console.log(topic);
                console.log(JSON.parse(message.toString()));
                client.end();
            });
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

    ]
  })
})*/ 
//# sourceMappingURL=index.js.map