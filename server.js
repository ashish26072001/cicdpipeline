import express from "express";
import router from "./route.js";
const app = express();

app.use(router);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});