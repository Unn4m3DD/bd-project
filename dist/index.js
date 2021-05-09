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
const process = require("process");
const express = require("express");
const app = express();
const port = 3000;
const mqtt = require("mqtt");
const ms_sql_connection = require("mssql");
let my_sql_connection;
function queryMySql(sql_query) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => my_sql_connection.query(sql_query, function (error, results, fields) {
            if (error)
                reject(error);
            resolve(results);
        }));
    });
}
function queryMsSql(sql_query) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield ms_sql_connection.query(sql_query);
    });
}
let query;
function parseArgs() {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.argv[2] != "mySql" && process.argv[2] != "msSql") {
            console.log(process.argv);
            console.log("Usage: node index.js [mySql|msSql]");
            process.exit(1);
        }
        if (process.argv[2] == "mySql") {
            var mysql = require('mysql');
            my_sql_connection = mysql.createConnection({
                host: 'localhost',
                user: 'me',
                password: 'secret',
                database: 'my_db'
            });
            my_sql_connection.connect();
            query = queryMySql;
        }
        else {
            yield ms_sql_connection.connect({
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
            query = queryMsSql;
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield parseArgs();
        try {
            let client = mqtt.connect('mqtt://unn4m3dd.xyz', { port: 21, }); // ws://ccam.av.it.pt clientId: "it2s", username: "it2s", password: "it2sit2s", protocolId: 'MQIsdp', protocolVersion: 3 })
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
                            query_to_send = `insert into it2s_db.CPM values(
              ${message_content.station_id},
              ${message_content.timestamp_delta},
              ${message_content.longitude},
              ${message_content.latitude},
              ${quadtree}
              ")`;
                            console.log(query_to_send);
                            yield query(query_to_send);
                            for (let perceived_object of message_content.perceived_objects) {
                                let abs_speed = Math.sqrt(Math.pow(perceived_object.xSpeed, 2) + Math.pow(perceived_object.ySpeed, 2));
                                query_to_send = `insert into it2s_db.PerceivedObject values( 
                ${message_content.station_id},
                ${message_content.timestamp_delta},
                ${perceived_object.objectID},
                ${message_content.longitude},
                ${message_content.latitude},
                ${quadtree},
                ${perceived_object.xDistance},
                ${perceived_object.yDistance},
                ${perceived_object.xSpeed},
                ${perceived_object.ySpeed},
                ${abs_speed})`;
                                yield query(query_to_send);
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
                            await query(query_to_send);*/
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
        const result = yield query('Select * from it2s_db.Emitter');
        for (let record of result.recordset) {
            if (id == record.station_id)
                return true;
        }
        return false;
    });
}
app.get("/api/car_count", (req, res) => {
    res.send({ count: 27 });
});
app.get("/api/car_speed_average", (req, res) => {
    res.send({ speed: 73.5 });
});
app.get("/api/people_count", (req, res) => {
    res.send({ count: 27 });
});
app.get("/api/max_simultaneous_people_count", (req, res) => {
    res.send({ max_simultaneos: 18 });
});
app.get("/api/min_simultaneous_people_count", (req, res) => {
    res.send({ min_simultaneos: 4 });
});
app.get("/api/min_simultaneous_count", (req, res) => {
    res.send({ min_simultaneos: 5 });
});
app.get("/api/max_simultaneous_count", (req, res) => {
    res.send({ max_simultaneos: 12 });
});
app.get("/api/cams_list", (req, res) => {
    res.send({
        "1620223706": {
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
    });
});
app.get("/api/notifications_list", (req, res) => {
    res.send([
        {
            emitter_id: 101,
            timestamp: 1620223705,
            latitude: -86950224,
            longitude: 412400078,
            description: "Speed limit exceeded"
        }
    ]);
});
app.get("/api/events", (req, res) => {
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
    });
});
app.get("/api/obu_list", (req, res) => {
    res.send([
        {
            emitter_id: 150,
            last_power_status: 70
        }
    ]);
});
app.get("/api/rsu_list", (req, res) => {
    res.send([
        {
            emitter_id: 100,
            latitude: -86950224,
            longitude: 412400078,
        }
    ]);
});
app.get("/api/smartphone_list", (req, res) => {
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
    ]);
});
app.get("/api/web_list", (req, res) => {
    res.send([
        {
            emitter_id: 101,
            browser_version: "Safari 6",
            current_app_version: 1
        }
    ]);
});
app.get("/api/cpms_list", (req, res) => {
    res.send({
        "1620223706": {
            "station_id": 2,
            "station_type": 1,
            "timestamp": 1620223706,
            "latitude": 148123123,
            "longitude": 81231233,
            "speed": 130
        },
        "1620223707": {
            "station_id": 99,
            "station_type": 3,
            "timestamp": 1620223707,
            "latitude": 148122123,
            "longitude": 81230233,
            "speed": 145
        }
    });
});
app.get("/api/vams_list", (req, res) => {
    res.send({
        "1620223706": {
            "station_id": 2,
            "station_type": 1,
            "timestamp": 1620223705,
            "latitude": 148123123,
            "longitude": 81231233
        }
    });
});
app.get("/api/denms_list", (req, res) => {
    res.send({
        "1620223706": {
            "station_id": 2,
            "station_type": 1,
            "timestamp": 1620223705,
            "latitude": 148123123,
            "longitude": 81231233,
            "cause_code": 3,
            "sub_cause_code": 1,
            "duration": 200,
        }
    });
});
app.listen(8001);
//# sourceMappingURL=index.js.map