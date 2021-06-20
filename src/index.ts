import { setupAPIEndpoint } from "./api-endpoint";
import { setupDataCollection } from "./data-collection";
import getQueryInterface from "./db-management"
let query: (procedure_name: string, query_parameters: any[]) => Promise<any>

async function setup() {
  if (process.argv[2] != "mariadb" && process.argv[2] != "msSql") {
    console.log("Usage: node index.js [mariadb|msSql] [db_username] [db_password]")
    process.exit(1);
  }
  console.log("CITS-Backend started successfully")
  try {
    query = await getQueryInterface(process.argv[3], process.argv[4])
  }
  catch (e) { console.log("An error occurred connecting to the database:", e); }
  console.log("Connection to the database started successfully")
}

async function main() {
  await setup();
  setupAPIEndpoint(query)
  setupDataCollection(query)
}

main();

