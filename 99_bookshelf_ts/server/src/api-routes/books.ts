import express from "express";
import { body } from "express-validator";

import { getAllBooks } from "../controllers/getAllBooks";
import { getBookById } from "../controllers/getBookById";
import { registerBook } from "../controllers/registerBook";
import { updateBook } from "../controllers/updateBook";
import { deleteBook } from "../controllers/deleteBook";
import { requestErrorHandler } from "../helpers/requestErrorHandler";

const router = express.Router();

// /api/books
router.get("/", requestErrorHandler(getAllBooks));

router.get("/:id", requestErrorHandler(getBookById));

router.post(
  "/",
  body("title").notEmpty(),
  body("description").notEmpty(),
  body("comment").notEmpty(),
  body("rating").notEmpty().isInt({ min: 1, max: 5 }),
  requestErrorHandler(registerBook)
);

router.patch(
  "/:id",
  body("title").optional().notEmpty(),
  body("description").optional().notEmpty(),
  body("comment").optional().notEmpty(),
  body("rating").optional().notEmpty().isInt({ min: 1, max: 5 }),
  requestErrorHandler(updateBook)
);

router.delete("/:id", requestErrorHandler(deleteBook));

export default router;
