
import ms_sql_connection = require('mssql')

let my_sql_connection: any;


async function queryMySql(sql_query: string) {
  return new Promise((resolve, reject) => my_sql_connection.query(
    sql_query,
    function (error, results, fields) {
      if (error)
        reject(error)
      resolve(results)
    })
  )
}
async function queryMsSql(sql_query: string) {
  return await ms_sql_connection.query(sql_query)
}

async function getQueryInterface() {
  if (process.argv[2] == "mySql") {
    var mysql = require('mysql');
    my_sql_connection = mysql.createConnection({
      host: 'localhost',
      user: 'me',
      password: 'secret',
      database: 'my_db'
    });
    my_sql_connection.connect();
    return queryMySql
  }
  else {
    await ms_sql_connection.connect({
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
    return queryMsSql
  }
}
export default getQueryInterface;