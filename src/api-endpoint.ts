
import express = require('express')
import api from "./api-compiled"
const app = express()
let query: (sql_query: string) => Promise<any>

export function setupAPIEndpoint(outer_query: (sql_query: string) => Promise<any>) {
  query = outer_query
  setup()
}
function setup() {
  api.forEach(e => e(app))
  app.listen(8001)
}