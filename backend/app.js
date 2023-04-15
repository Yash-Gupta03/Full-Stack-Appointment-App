const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json({ extended: false }));

const sequelize = require("./utils/database");
app.use(cors());
const userRoutes = require("./routers/user");

app.use(userRoutes);

sequelize
  .sync()
  .then()
  .catch((err) => console.log(err));

app.listen(3000);
