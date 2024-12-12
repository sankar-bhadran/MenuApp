const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/mainRoutes");
const allowedOrigins = ["https://menuapp-pied.vercel.app"];
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use("/api", mainRouter);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is connected ${5000}`);
});
