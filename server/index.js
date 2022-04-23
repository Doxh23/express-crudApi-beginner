require("dotenv").config();
let env = process.env
let port = process.env.PORT || 5000; 
let express = require("express");
let app = express();
let cors = require('cors')
let routes = require("./router/tasks");
const dbConnect = require("./db/connect");
const notFound = require('./middleware/not-found')
// middleware
app.use(express.json()); 
app.use(cors())
//route 
app.use("/api/v1/tasks", routes);
//route not found
app.use(notFound)
dbConnect(env.MONGO_URI)

app.listen(port,console.log(`🚀the server is listening on port ${port}🚀`))
