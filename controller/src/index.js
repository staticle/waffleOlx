const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();


const authRoutes = require('../routes/auth');
const userRoutes = require('../routes/user');

const nodeEnv = process.env.NODE_ENV;

if (nodeEnv === "development") {
  app.use(cors({ origin: process.env.CLIENT_URL }));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to waffleOlx API v1",
  });
});


app.use('/', authRoutes)
app.use('/', userRoutes)

app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(`${process.env.DB}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"));

const port = process.env.PORT;
app.listen(port, () => {
  if (nodeEnv === "production") {
    console.log(`WaffleOlx Ready at http://localhost:${port}`);
  } else console.log(`Dev Server Ready at http://localhost:${port}`);
});
