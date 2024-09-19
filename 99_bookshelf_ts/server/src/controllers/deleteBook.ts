import { NextFunction, Request, Response } from "express";
import Book from "../models/bookSchema.js";

export const deleteBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const _id = req.params.id;
        const { deletedCount } = await Book.deleteOne({ _id });

        // 削除対象がない場合
        if (deletedCount === 0) {
            res.status(404).json({ msg: "Target Book not found." });
            return;
        }
        res.json({ msg: "Delete succeeded." });
};
