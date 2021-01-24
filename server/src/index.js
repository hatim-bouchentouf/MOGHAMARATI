const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");

require("dotenv").config();

const { notFound, errorHandler } = require("./middlewares");

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose
  .connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
