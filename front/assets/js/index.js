import pokemonServices from "./services/pokemon.js";
import typeServices from "./services/type.js";

import pokemonDisplayer from "./components/pokemonsDisplayer.js";
import searchMenu from "./components/searchMenu.js";

import listeners from "./utils/listeners.js";

const app = {
  async init() {
    // Récuperer et afficher les pokemons
    const allPokemonsObjArray = await pokemonServices.getAllPokemons();
    allPokemonsObjArray.forEach((pokemonObject) => {
      pokemonDisplayer.insertPokemonDivFromData(pokemonObject);
    });

    // Recuperer et afficher les options de types
    const allTypesObjArray = await typeServices.getAllTypes();
    allTypesObjArray.forEach((typeObject) => {
      searchMenu.insertTypeDivFromData(typeObject);
    });

    listeners.addListeners();
  },
};

app.init();

//export default app;
