// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// // import { readdirSync } from "fs";

// const morgan = require("morgan");
// // require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
// const bodypar = require("body-parser");
const app = express();

//init of middleware{allways on top  }
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ mag: "heloooo...." });
});

//defining the route
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));

//mongodb connection
const connectDB = require("./config/db");
connectDB();

port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`server is running at the port ${port}`);
});
