var fs = require("fs");

var files = fs.readdirSync("./img/catalog");
const filesArr = files.map((file) => {
  return `./img/catalog/${file}`;
});
const fileText = filesArr.join(",");
fs.writeFileSync("files.txt", fileText, () => {
  console.log("FileWrite");
});
