const mammoth = require("mammoth");

const products = [];

mammoth
  .extractRawText({ path: "../data/test2.docx" })
  .then(function (result) {
    var text = result.value;
    return text;
    var messages = result.messages;
  })
  .then((text) => {
    text = text.split("\n").filter((text) => text !== "");
    const indexArr = [];
    const headers = [];
    text.map((element, index, array) => {
      if (element.includes("Blake Part Number")) {
        console.log(`Header starts at ${index}`);

        for (let i = index; i < index + text.length; i++) {
          if (text[i].includes("B") && i !== index) {
            break;
          }
          headers.push(text[i]);
        }
      }

      if (element.includes("See")) {
        return;
      }
      if (/B/.test(element)) {
        indexArr.push(index);
      }
    });

    indexArr.map((element, index, array) => {
      const startIndex = element;
      const stopIndex = array[index + 1];
      const results = [];
      for (let i = startIndex; i < stopIndex; i++) {
        let entry = {
          [headers[i - startIndex]]: text[i],
        };

        results.push(entry);
      }
      console.log(results);
    });
  })
  .done();
