const docs = require("./api-doc")
const items = [...docs.item[0].item, ...docs.item[1].item]
console.log("const fetch = require('node-fetch');")
for (let item of items) {
  let required_params = item.request.url.query.filter(e => e.description.includes("Required"))
  let queries = [""]
  for (let param of item.request.url.query) {
    queries = [...queries, ...queries]
    for (let i = 0; i < queries.length / 2; i++) {
      queries[i] += `${param.key}=${param.value}&`
    }
  }
  queries = queries.filter(query => required_params.reduce((prev, req_param) => prev && query.includes(req_param.key), true))
  for (let query of queries)
    console.log(`
fetch("http://ccam.av.it.pt/api/${item.name}?${query}", { method: 'GET', redirect: 'follow' })
  .then(response => response.text())
  .then(result => JSON.parse(result))
  .catch(error => console.log('An error occurred attempting to access ${item.name}, query details: http://ccam.av.it.pt/api/${item.name}?${query}'));
  `)
}
