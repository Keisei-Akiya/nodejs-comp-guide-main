import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import Book from "../models/bookSchema.js";

export const updateBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req);

    // エラーの場合
    if (!errors.isEmpty()) {
      const errs = errors.array();
      res.status(400).json(errs);
      return;
    }

    const { title, description, comment, rating } = req.body;
    const _id = req.params.id;
    const book = await Book.findById(_id);

    // 更新対象がない場合
    if (book === null) {
      res.status(404).json({ msg: "Target Book not found." });
      return;
    };

    if (title !== undefined) book.title = title;
    if (description !== undefined) book.description = description;
    if (comment !== undefined) book.comment = comment;
    if (rating !== undefined) book.rating = rating;
    await book.save();
    res.json(book);
};
