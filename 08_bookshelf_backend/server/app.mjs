import express from "express";
import env from "dotenv";
env.config();

import apiRoutes from "./api-routes/index.mjs";
import "./helpers/db.mjs";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// API
app.use("/api", apiRoutes);

// 404 ページが見つからない場合は実行されない
app.use((req, res) => {
  res.status(404).json({ msg: "Page not found." });
});

app.listen(port, function () {
  console.log(`Server Start: http://localhost:${port}`);
});
