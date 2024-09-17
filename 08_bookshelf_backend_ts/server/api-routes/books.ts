import express from "express";
import { body, validationResult } from "express-validator";
import Book from "../models/book.mjs";
import { registerBook } from "../controllers/books.mjs";

const router = express.Router();

// /api/books
router.get("/", async function (req, res) {
  const books = await Book.find().sort({ updatedAt: -1 });
  res.json(books);
});

router.get("/:id", async function (req, res) {
  const _id = req.params.id;
  const book = await Book.findById(_id);
  res.json(book);
});

router.post(
  "/",
  body("title").notEmpty(),
  body("description").notEmpty(),
  body("comment").notEmpty(),
  body("rating").notEmpty().isInt({ min: 1, max: 5 }),
  registerBook
);

router.patch("/:id", async function (req, res) {
  const { title, description, comment, rating } = req.body;
  const _id = req.params.id;
  const book = await Book.findById(_id);
  if (title !== undefined) book.title = title;
  if (description !== undefined) book.description = description;
  if (comment !== undefined) book.comment = comment;
  if (rating !== undefined) book.rating = rating;
  await book.save();
  res.json(book);
});

router.delete("/:id", async function (req, res) {
  const _id = req.params.id;
  const books = await Book.deleteOne({ _id });
  res.json({ msg: "Delete succeeded." });
});

export default router;
