import { connect, Schema, model, Mixed } from "mongoose";
import env from "dotenv";
env.config();

connect(process.env.MONGO_URI);
const catSchema = new Schema(
  {
    name: { type: String, required: true },
    size: { type: Number, required: true, enum: [0, 1] },
    bool: { type: Boolean, default: false, alias: "b" },
    dt: {
      type: Date,
      set: function (newVal) {
        return new Date(newVal);
      },
      get: function (val) {
        return val instanceof Date ? val : new Date(val);
      },
    },
    arry: [String],
    anything: Mixed,
  },
  { timestamps: true }
);
const Cat = model("Cat", catSchema);

const kitty = new Cat();
kitty.name = "Zildjian";
kitty.size = 1;
kitty.arry = [0, 1];
kitty.dt = "2017/12/21";

kitty.save().then((doc) => console.log(doc.b));
