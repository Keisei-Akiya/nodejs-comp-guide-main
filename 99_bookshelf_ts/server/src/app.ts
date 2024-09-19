import express, { NextFunction, Request, Response } from "express";
import apiRoutes from "./api-routes/index.js";
import cors from 'cors';
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

app.use(cors());
app.use(express.json());

// test
app.get('/api/test', (req: Request, res: Response) => {
  res.json({message: 'Hello from the server!'});
});

// API
app.use("/api", apiRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(res.headersSent) {
    return next(err);
  }
  res.status(500).json({ msg: "Internal Server Error." });
})

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
