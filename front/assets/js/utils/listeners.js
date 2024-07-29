//import app from "../index";
import searchMenu from "../components/searchMenu.js";

const listeners = {
  addListeners() {
    const searchBarElement = document.querySelector(".input-name");
    searchBarElement.addEventListener("keyup", searchMenu.searchName);
  },
};

export default listeners;
