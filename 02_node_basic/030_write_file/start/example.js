// ファイルへの書き込み
// __dirname, __filename
const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "../dist/test.txt");
console.log(distPath);

fs.writeFileSync(distPath, "hello, node.js");
// console.log("hello, node.js");
