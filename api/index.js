const express = require("express");
const app = express();
import router from "./router/indexRouter";
import sequelize from "./model/dataSource";

app.use(express.json());
app.use(
  express.urlencoded({ limit: "300mb", parameterLimit: 100000, extended: true })
);
app.use(router);

try {
  sequelize.authenticate();
  console.log("Connection has -been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.get("/test", (req, res) => {
  console.log(req);
  res.send("OK");
});

module.exports = {
  path: "/api",
  handle: app,
};

//? MOCK DATA
//*
//!
//TODO
