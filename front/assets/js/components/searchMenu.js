const searchMenu = {
  insertTypeDivFromData(objectData) {
    const typeDivTemplate = document.querySelector(".type-div-template");
    const newTypeDiv = document.importNode(typeDivTemplate.content, true);

    newTypeDiv.querySelector("label").textContent = objectData.name;
    newTypeDiv.querySelector("label").setAttribute("for", objectData.name);
    newTypeDiv.querySelector("input").id = objectData.name;
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

  searchType(event) {
    const typeCheckboxesElements =
      document.querySelectorAll(".type-div > input");
    typeCheckboxesElements.forEach((element) => {
      element.checked = false;
    });
    event.target.checked = true;
    const pokemonDivs = document.querySelectorAll(".pokemon-div");
    let results = 0;
    console.log(event.target.id);
    if (event.target.id !== "All") {
      pokemonDivs.forEach((pokemonDiv) => {
        pokemonDiv.classList.remove("hidden");
        const typeSpanElements = pokemonDiv.querySelectorAll(".types > span");
        let alreadyFound = false;
        typeSpanElements.forEach((element) => {
          if (
            element.textContent !== event.target.id &&
            alreadyFound === false
          ) {
            pokemonDiv.classList.add("hidden");
            // le pokemon n'appartient au type choisi
          } else if (
            element.textContent === event.target.id &&
            alreadyFound === false
          ) {
            // il appartient
            pokemonDiv.classList.remove("hidden");
            results += 1;
            alreadyFound = true;
          }
        });
      });
    } else {
      pokemonDivs.forEach((pokemonDiv) => {
        pokemonDiv.classList.remove("hidden");
        results += 1;
      });
    }

    const resultPara = document.querySelector(".search-infos-div > p");
    resultPara.textContent = results + " Pokemons found";
  },
};

export default searchMenu;
