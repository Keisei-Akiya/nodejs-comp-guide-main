import { NextFunction, Request, Response } from "express";
import Book from "../models/bookSchema.js";

export const getAllBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const books = await Book.find();
    res.json(books);
};
