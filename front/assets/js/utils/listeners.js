//import app from "../index";
import searchMenu from "../components/searchMenu.js";

const listeners = {
  addListeners() {
    const searchBarElement = document.querySelector(".input-name");
    searchBarElement.addEventListener("keyup", searchMenu.searchName);

    const typeCheckboxesElements = document.querySelectorAll(".type-div");
    typeCheckboxesElements.forEach((element) => {
      element.addEventListener("change", searchMenu.searchType);
    });
  },
};

export default listeners;
