import express, { Router } from "express";

import booksRouter from "./books";

const router: Router = express.Router();
router.use("/books", booksRouter);

export default router;
