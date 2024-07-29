const pokemonDisplayer = {
  insertPokemonDivFromData(objectData) {
    const pokemonDivTemplate = document.querySelector(".pokemon-div-template");
    const newPokemonDiv = document.importNode(pokemonDivTemplate.content, true);

    newPokemonDiv.querySelector(
      "img"
    ).src = `./assets/img/${objectData.id}.webp`;
    newPokemonDiv.querySelector(".pokemon-name").textContent = objectData.name;
    newPokemonDiv.querySelector(".pokemon-id").textContent =
      "#" + objectData.id;
    newPokemonDiv.querySelector(".value-hp").textContent = objectData.hp;
    newPokemonDiv.querySelector(".value-speed").textContent = objectData.speed;
    newPokemonDiv.querySelector(".value-atk").textContent = objectData.atk;
    newPokemonDiv.querySelector(".value-def").textContent = objectData.def;
    newPokemonDiv.querySelector(".value-atkspd").textContent =
      objectData.atk_spe;
    newPokemonDiv.querySelector(".value-defspd").textContent =
      objectData.def_spe;

    const typeSpanTemplate = document.querySelector(".type-span-template");

    objectData.types.forEach((type) => {
      const newTypeSpan = document.importNode(typeSpanTemplate.content, true);
      newTypeSpan.querySelector("span").textContent = type.name;
      newTypeSpan.querySelector("span").style.color = "#" + type.color;
      newPokemonDiv.querySelector(".types").append(newTypeSpan);
    });

    document.querySelector(".results-section").append(newPokemonDiv);
  },
};

export default pokemonDisplayer;
