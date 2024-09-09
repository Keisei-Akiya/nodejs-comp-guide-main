import cron from "node-cron";
import env from "dotenv";
env.config();

import { addEmployeesToGS } from "./google-sheet.mjs";
import { sendEmail } from "./email.mjs";

// 開発環境ではcronを使わずコメントアウトし，本番環境では外す．
cron.schedule("46 20 * * *", () => {
  main();
});

async function main() {
  const dt = new Date();
  const dtStr = dt.toDateString();
  const sheetUrl = `https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}`;

  try {
    await addEmployeesToGS();
    sendEmail("success", `処理時刻: ${dtStr}\n${sheetUrl}`);
  } catch (e) {
    sendEmail("Error", `エラー発生時刻: ${dtStr}\n${e}`);
  }
}
