let express = require("express");
let app = express();
let cors = require('cors')
let routes = require("./router/tasks");
require("dotenv").config();
let port = process.env.PORT || 5000;
const dbConnect = require("./db/connect");
const notFound = require('./middleware/not-found')
// middleware
app.use(express.json()); 
app.use(cors())
app.use("/api/v1/tasks", routes);
app.use(notFound)

const start = async () => {
  try {
    await dbConnect(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
