import express from "express";
import apiRoutes from "./server/api-routes/index";
import dotenv from "dotenv";
import "./server/helpers/db";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// API
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server Start: http://localhost:${port}`);
});
