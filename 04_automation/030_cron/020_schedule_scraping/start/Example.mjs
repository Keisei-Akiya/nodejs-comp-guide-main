import { addEmployeesToGS } from "./google-sheet.mjs";
import cron from "node-cron";

cron.schedule("18 15 * * *", () => {
  addEmployeesToGS();
});
