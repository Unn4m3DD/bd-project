import { setupAPIEndpoint } from "./api-endpoint";
import { setupDataCollection } from "./data-collection";
import getQueryInterface from "./db-management"
let query: (sql_query: string) => Promise<any>

async function setup() {
  if (process.argv[2] != "mariadb" && process.argv[2] != "msSql") {
    console.log("Usage: node index.js [mariadb|msSql]")
    process.exit(1);
  }
  console.log("CITS-Backend started successfully")
  try { query = await getQueryInterface() }
  catch (e) { console.log("An error occurred connecting to the database:", e); }
  console.log("Connection to the database started successfully")
}

async function main() {
  await setup();
  setupAPIEndpoint(query)
  setupDataCollection(query)
}

main();

