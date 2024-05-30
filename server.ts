const http = require("http")
const app = require("./app.ts")

app.set("port", process.env.PORT || 8000)
const server = http.createServer(app)

server.listen(process.env.PORT || 8000)
