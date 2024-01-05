const express = require("express");
const mongoose = require("mongoose");
const routerLaptop = require("./routes/pcRoute");
require("dotenv").config();
const app = express();
app.use(express.json());
const uriDb = process.env.MONGO_DB_HOST;

const connection = mongoose.connect(uriDb, {
  useNewUrlParser: true,
});

app.use("/api/laptop", routerLaptop);

app.use((_, res, __) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Use api on routes: /api/",
    data: "Not found",
  });
});

app.use((err, _, res, __) => {
  console.log(err.stack);
  res.status(500).json({
    status: "fail",
    code: 500,
    message: err.message,
    data: "Internal Server Error",
  });
});

connection
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log(`Server running. Use our API on port:${process.env.PORT}`);
    });
  })
  .catch((err) =>
    console.log(`Server not running. Error message: ${err.message}`)
  );
