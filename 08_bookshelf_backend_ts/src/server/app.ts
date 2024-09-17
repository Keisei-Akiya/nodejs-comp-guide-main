import express, { NextFunction, Request, Response } from "express";
import apiRoutes from "./api-routes/index.js";
import dotenv from "dotenv";
import "./helpers/db.js";

dotenv.config();

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// API
app.use("/api", apiRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(res.headersSent) {
    return next(err);
  }
  res.status(500).json({ msg: "Internal Server Error." });
})
app.listen(PORT, () => {
  console.log(`Server Start: http://localhost:${PORT}`);
});
