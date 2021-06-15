const docs = require("./api-doc")
const items = [...docs.item[0].item, ...docs.item[1].item]
console.log("export default [")
for (let item of items) {
  console.log(`
  (app, responses) => app.get("/api/${item.name}", async (req, res) => {
      ${item.request.url.query.map(e => {
      return `
      try{
        if(
            ${e.description.includes("Required") ? `req.query.${e.key} == undefined ||` : `req.query.${e.key} != undefined &&`}
          typeof(JSON.parse(req.query.${e.key} as string)) != ${e.value.charAt(0) == "[" ? '"object"' : '"number"'}
          ){
            res.send({ 
              message: "An error occurred parsing input", 
              sub_message: "Error on ${e.key} parameter", 
              info: "This request should look like:",
              sub_info: ${JSON.stringify(item.request.url.query)}
            })
            return
          }
      } catch(e) {
        console.error("an error occurred parsing parameters")
        res.send({ 
          message: "An error occurred parsing input", 
          sub_message: "Error on ${e.key} parameter", 
          info: "This request should look like:",
          sub_info: ${JSON.stringify(item.request.url.query)}
        })
        return
      }
    `
    }).join("\n    ")}
      if(responses["${item.name}"])
        try{
          await responses["${item.name}"](req, res)
        } catch(e) {
          console.log("An error occurred on ${item.name} request", e)
          res.send("An error occurred on ${item.name} request, please report to the host");
        }
      else {
        console.log("${item.name} not implemented yet!")
        res.send(${item.response[0].body})
      }
  }),
`)
}
console.log("]")
