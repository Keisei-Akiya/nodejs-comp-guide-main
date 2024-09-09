import cron from "node-cron";

cron.schedule("* * * * * *", () => console.log("every seconds"));
cron.schedule("*/3 * * * * *", () => console.log("every 3 seconds"));
