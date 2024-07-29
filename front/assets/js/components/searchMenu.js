const searchMenu = {
  insertTypeDivFromData(objectData) {
    const typeDivTemplate = document.querySelector(".type-div-template");
    const newTypeDiv = document.importNode(typeDivTemplate.content, true);

    newTypeDiv.querySelector("label").textContent = objectData.name;
    newTypeDiv.querySelector("label").style.color = "#" + objectData.color;

    document.querySelector(".type-selection").append(newTypeDiv);
  },

  searchName(event) {
    const inputString = event.target.value;
    const pokemonDivs = document.querySelectorAll(".pokemon-div");
    let results = 0;
    pokemonDivs.forEach((pokemonDiv) => {
      pokemonDiv.classList.remove("hidden");
      results += 1;
      if (
        !pokemonDiv
          .querySelector(".pokemon-name")
          .textContent.toLowerCase()
          .includes(inputString.toLowerCase())
      ) {
        pokemonDiv.classList.add("hidden");
        results -= 1;
      }
    });

    const resultPara = document.querySelector(".search-infos-div > p");
    resultPara.textContent = results + " Pokemons found";
  },
};

export default searchMenu;
