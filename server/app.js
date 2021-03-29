const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const csrf = require("csurf");
// const flash = require("connect-flash");

const errorController = require("./controllers/error");
const sequelize = require("./utils/database");

const app = express();

const authRoutes = require("./routes/auth");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
// const csrfProtection = csrf();
// app.use(flash());

app.use(authRoutes);

app.use(errorController.get404);
// app.use(csrfProtection);

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    console.log("Connected to database");
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
