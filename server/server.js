const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/mainRoutes");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "https://menuapp-pied.vercel.app" }));
app.use("/api", mainRouter);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is connected ${5000}`);
});
