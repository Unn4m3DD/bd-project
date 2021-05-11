const docs = require("./api-doc")
const items = [...docs.item[0].item, ...docs.item[1].item]
console.log("export default [")
for (let item of items)
  console.log(`
  (app) => app.get("/api/${item.name}", (req, res) => {
    ${item.request.url.query.map(e => {
    return `if(
      ${e.description.includes("Required") ? `req.query.${e.key} == undefined ||`:``}
      typeof(JSON.parse(req.query.${e.key} as string)) != ${e.value.charAt(0) == "[" ? '"object"' : '"number"'}
      ){
        res.send({ 
          message: "An error occured parsing input", 
          sub_message: "Error on ${e.key} parameter", 
          info: "This requesto should look like:",
          sub_info: ${JSON.stringify(item.request.url.query)}
        })
      }`
  }).join("\n    ")}
    
    res.send(${item.response[0].body})
  }),
`)
console.log("]")