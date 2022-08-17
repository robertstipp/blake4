const listArr = Array.from(document.querySelector(".about-box__list").children);
const contentArr = Array.from(
  document.querySelector(".about-box__content").children
);

listArr.forEach((item) => {
  item.addEventListener("click", (e) => {
    selectedId = e.target.id;

    hideContent();
    removeActive();
    addActive(e.target);

    document
      .querySelector(`#${selectedId.split("-")[0]}`)
      .classList.remove("hide");
  });
});

const hideContent = () => {
  contentArr.forEach((item) => {
    item.classList.add("hide");
  });
};

const removeActive = () => {
  listArr.forEach((item) => {
    item.classList.remove("active");
  });
};

const addActive = (element) => {
  element.classList.add("active");
};
