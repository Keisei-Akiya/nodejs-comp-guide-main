import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Book from "../models/book";

const registerBook = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  // エラーの場合
  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }
  const book = new Book(req.body);
  const newBook = await book.save();
  res.status(201).json(newBook);
}

export { registerBook };
