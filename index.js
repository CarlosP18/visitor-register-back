const express = require("express");
const dbConnection = require("./config");
const cors = require("cors");
require("dotenv").config();

console.log(process.env);

const app = express();

dbConnection();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.use("/api", require("./routes/visitorRegister"));

app.listen(process.env.PORT, () => {
  console.log("server port 4000");
});
