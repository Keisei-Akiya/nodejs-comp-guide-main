import { NextFunction, Request, Response } from "express";
import Book from "../models/bookSchema.js";

export const getBookById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const _id = req.params.id;
    const book = await Book.findById(_id);

    if (book === null) {
        res.status(404).json({ msg: "Page not found." });
        return;
    }
    res.json(book);
};
