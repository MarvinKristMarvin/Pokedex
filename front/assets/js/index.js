// import * as taskManager from "./task.js";
// import { setupErrorModal } from "./utils.js";

import pokemonServices from "./services/pokemon.js";

// document.addEventListener("DOMContentLoaded", init);

const app = {
  async init() {
    // Fetch et afficher les tâches
    // await taskManager.fetchAndInsertTasks();
    const allPokemonsObjArray = await pokemonServices.getAllPokemons();
    console.log(...allPokemonsObjArray);
    // Ecouter la soumission du formulaire d"ajout de tâche
    /*const createTaskForm = document.querySelector("#create-task");
    createTaskForm.addEventListener("submit", taskManager.handleCreateForm);*/
  },
};

app.init();
