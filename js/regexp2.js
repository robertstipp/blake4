const mammoth = require("mammoth");
const fs = require("fs");

const filenames = fs.readdirSync("../catalog");
// mammoth
//   .extractRawText({ path: "../data/test2.docx" })
//   .then(function (result) {
//     let text = result.value;

//     return text;
//   })
//   .then((text) => {
//     text = text.split("\n").filter((text) => text !== "");
//     const products = [];

//     text.map((element, index) => {
//       if (/^B[A-Z]/.test(element)) {
//         console.log(element, index);
//         products.push(text.slice(index, index + 10));
//       }
//     });
//     console.log(products.length);
//   });
let fullText = [];
filenames.forEach((file) => {
  mammoth
    .extractRawText({ path: `../catalog/${file}` })
    .then(function (result) {
      let text = result.value;
      fullText += text;
    });
});
console.log(fullText);

// then((text) => {
//   text = text.split("\n").filter((text) => text != "");
//   text.map((element) => {
//     if (/^B[A-Z]/.test(element)) {
//       partNumbers.push(element);
//     }
//   });
// });
// console.log("partNumbers", partNumbers);
// let partNumber = "BWX-223";

// console.log(/^B[A-Z]/.test(partNumber));
