import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
      get: function (val: number) {
        return Math.round(val);
      },
      set: function (val: number) {
        return Math.round(val);
      },
    },
    description: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = model("Book", bookSchema);
export default Book;
