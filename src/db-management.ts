
import ms_sql_connection = require('mssql')
import mariadb = require('mariadb');

let maria_sql_connection: mariadb.Connection;


async function queryMariaDb(sql_query: string, query_parameters: string[]) {
  const result = await maria_sql_connection.query(sql_query, query_parameters)
  return result

}
async function queryMsSql(sql_query: string, query_parameters: string[]) {
  let index = 0;
  while (sql_query.match(/\?/))
    sql_query = sql_query.replace("?", "arg" + index++)
  for (let i = 0; i < index; i++) {
    ms_sql_connection.input('arg' + i, query_parameters[i]);
  }
  return (await ms_sql_connection.query(sql_query)).recordset
}
queryMsSql("select * from ? where ? = ?", [])

async function getQueryInterface() {
  if (process.argv[2] == "mariadb") {
    const pool = mariadb.createPool({
      host: 'localhost',
      user: 'root',
      password: 'it2sit2s',
      connectionLimit: 5,
      socketPath: "/run/mysqld/mysqld.sock",
      database: "it2s_db"
    });

    maria_sql_connection = await pool.getConnection();
    return queryMariaDb
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