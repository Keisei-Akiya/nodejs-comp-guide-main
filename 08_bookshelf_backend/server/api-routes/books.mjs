import express from "express";
import { body } from "express-validator";
import { deleteBook, getAllBooks, getBookById, registerBook, updateBook } from "../controllers/books.mjs";

const router = express.Router();

// /api/books
router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.post(
  "/",
  body("title").notEmpty(),
  body("description").notEmpty(),
  body("comment").notEmpty(),
  body("rating").notEmpty().isInt({ min: 1, max: 5 }),
  registerBook
);

router.patch(
  "/:id",
  body("title").optional().notEmpty(),
  body("description").optional().notEmpty(),
  body("comment").optional().notEmpty(),
  body("rating").optional().notEmpty().isInt({ min: 1, max: 5 }),
  updateBook
);

router.delete("/:id", deleteBook);

export default router;
