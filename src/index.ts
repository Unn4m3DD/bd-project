import express = require('express')
const app = express()
const port = 3000

const sql = require('mssql')
sql.connect({
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
}).catch(e => console.log(e));

app.get("/api/timeline", (req, res) => {
  res.send({
    cpm: [

    ]
  })
})

