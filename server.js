const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./server/database/connection");

const app = express();
const bodyparser = require("body-parser");
const path = require("path");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
// set view engine
app.set("view engine", "ejs");
//app.set('views',path.resolve(__dirname,'views/index.html'))

//load assests
app.use("/css", express.static(path.resolve(__dirname, "assests/css")));
app.use("/img", express.static(path.resolve(__dirname, "assests/img")));
app.use("/js", express.static(path.resolve(__dirname, "assests/js")));

// load routerss

app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  
  console.log(`Server is running on http://localhost:${PORT}`);
});
//const server=http.createServer((req,res)=>)
