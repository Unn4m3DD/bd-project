
import ms_sql_connection = require('mssql')
import mariadb = require('mariadb');

let maria_sql_connection: mariadb.Connection;


async function queryMariaDb(procedure_name: string, query_parameters: any[]) {
  query_parameters = query_parameters.map(e => { try { return JSON.parse(e) } catch (err) { return e } })
  //const startTime = Date.now();
  const result = await maria_sql_connection.query(
    `call ${procedure_name}(${"?,".repeat(query_parameters.length - 1 > 0 ? query_parameters.length - 1 : 0)
    }${query_parameters.length != 0 ? "?" : ""
    });`,
    query_parameters)
  //if (procedure_name.includes("join"))
  //  console.log((Date.now() - startTime) + "ms");
  return result[0]

}
async function queryMsSql(procedure_name: string, query_parameters: any[]) {
  const request = new ms_sql_connection.Request(/* [pool or transaction] */)
  let query_string = `exec ${procedure_name} ${"?,".repeat(query_parameters.length - 1 > 0 ? query_parameters.length - 1 : 0)
    }${query_parameters.length != 0 ? "?" : ""
    };`
  let index = 0;
  while (query_string.match(/\?/))
    query_string = query_string.replace("?", "@arg" + index++)
  for (let i = 0; i < index; i++) {
    if (typeof (query_parameters[i]) == "number" && query_parameters[i] > (1 << 32))
      request.input('arg' + i, ms_sql_connection.BigInt, query_parameters[i]);
    else
      request.input('arg' + i, query_parameters[i]);
  }
  try {
    //console.log((await request.query(query_string)).recordset)
    return (await request.query(query_string)).recordset
  } catch (e) {
    console.log(query_string)
    console.log(query_parameters)
    console.log(e)
    return null;
  }
}

async function getQueryInterface(username?: string, password?: string) {
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
      user: username,
      password: password,
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
