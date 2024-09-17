import { validationResult } from "express-validator";
import Book from "../models/book.mjs";

export const getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

export const getBookById = async (req, res) => {
  const _id = req.params.id;
  const book = await Book.findById(_id);

  if (book === null) {
    return res.status(404).json({ msg: "Page not found." });
  }
  res.json(book);
};

export const registerBook = async (req, res) => {
  const errors = validationResult(req);

  // エラーの場合
  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }
  const book = new Book(req.body);
  const newBook = await book.save();
  res.status(201).json(newBook);
};

export const updateBook = async (req, res) => {
  const errors = validationResult(req);

  // エラーの場合
  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }

  const { title, description, comment, rating } = req.body;
  const _id = req.params.id;
  const book = await Book.findById(_id);

  if (book === null) {
    return res.status(404).json({ msg: "Page not found." });
  }

  if (title !== undefined) book.title = title;
  if (description !== undefined) book.description = description;
  if (comment !== undefined) book.comment = comment;
  if (rating !== undefined) book.rating = rating;
  await book.save();
  res.json(book);
};

export const deleteBook = async (req, res) => {
  const _id = req.params.id;
  const { deletedCount } = await Book.deleteOne({ _id });
  if (deletedCount === 0) {
    return res.status(404).json({ msg: "Target Book not found." });
  }
  res.json({ msg: "Delete succeeded." });
};
