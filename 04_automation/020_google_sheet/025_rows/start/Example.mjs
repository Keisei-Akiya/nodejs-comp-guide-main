import { GoogleSpreadsheet } from "google-spreadsheet";
import env from "dotenv";
env.config();
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const secrets = require("../..//../../google_secrets.json");

(async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: secrets.client_email,
    private_key: secrets.private_key,
  });

  await doc.loadInfo();

  const personSheet = doc.sheetsByTitle["persons"];
  const row = personSheet.addRows([
    {
      name: "Tom",
      age: 18,
      gender: "M",
    },
    {
      name: "Hanako",
      age: 20,
      gender: "F",
    },
    {
      name: "John",
      age: 35,
      gender: "M",
    },
  ]);
})();
