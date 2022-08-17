import data from "../data/products.json" assert { type: "json" };

//ELEMENT SELECTOR
const searchInput = document.querySelector(".input");
const clearButton = document.getElementById("clear");
const resultsList = document.querySelector(".results-list");

const testArray = data.slice(0, 3);
console.log(testArray);
var template = Handlebars.compile(
  `<a href="{{link}}"><li class="list-item"><h2 class="list-item__partNumber">{{blakePartNumber}}</h2><p class="list-item__milSpec">{{milSpec}}</p></li></a>`
);

searchInput.addEventListener("input", (e) => {
  resultsList.innerHTML = "";
  resultsContainer.style.height = `0rem`;
  let value = e.target.value;

  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();

    const results = data
      .filter((product) => {
        if (product["mil spec"] !== null) {
          return (
            product.blakePartNumber.toLowerCase().includes(value) ||
            product["mil spec"].toLowerCase().includes(value)
          );
        }
        return product.blakePartNumber.toLowerCase().includes(value);
      })
      .slice(0, 10);
    const html = results.map((result) => {
      const { blakePartNumber, link } = result;
      const milSpec = result["mil spec"];

      return template({
        blakePartNumber: blakePartNumber,
        milSpec: milSpec,
        link: link,
      });
    });
    const resultsContainer = document.querySelector(".results-container");
    resultsContainer.style.height = `${results.length * 1.5}rem`;
    resultsList.innerHTML = html.join("");
  } else {
  }
});

// clearButton.addEventListener("click", () => {});

// console.log(template({ blakePartNumber: testPart.blakePartNumber }));

const resultsContainer = document.querySelector(".results-container");

// function setList(results) {
//   for (const product of results) {
//     const resultItem = document.createElement("li");

//     const a = document.createElement("a");
//     const linkText = document.createTextNode(
//       `${product.blakePartNumber} Spec: ${product["mil spec"]}`
//     );
//     a.appendChild(linkText);

//     a.href = `${product.link}`;

//     resultItem.classList.add("result-item");

//     // const text = document.createTextNode(
//     //   `${product.blakePartNumber} Stranding ${product.stranding} AWG ${product.awg} ${product["mil spec"]}`
//     // );

//     // resultItem.appendChild(text);
//     resultItem.appendChild(a);

//     list.appendChild(resultItem);
//   }
// }
