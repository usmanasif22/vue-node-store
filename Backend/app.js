const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/ProductRoutes");
const categoryRoutes = require("./routes/CategoryRoutes");
//logs
app.use(morgan("dev"));
//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
    return res.status(200).json({});
  }
  next();
});
// routes
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
//Error Handling
app.use((req, res, next) => {
  const error = new Error("No routes Matched");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
module.exports = app;
