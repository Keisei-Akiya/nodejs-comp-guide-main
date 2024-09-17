import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import Book from "../models/bookSchema.js";

export const registerBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req);

    // エラーの場合
    if (!errors.isEmpty()) {
      const errs = errors.array();
      res.status(400).json(errs);
      return;
    }
    const book = new Book(req.body);
    const newBook = await book.save();
    res.status(201).json(newBook);
};
