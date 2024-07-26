import { Router } from "express";
// import * as taskController from "./controllers/task.js";
import { testController } from "./controllers/testController.js";

export const router = Router();

// route test
router.get("/", testController.testFunction);
router.get("/pokemons", testController.getAllPokemons);

router.get("/teams", testController.getTeams);
router.post("/teams", testController.postTeam);
router.delete("/teams/:id", testController.deleteTeam);
router.patch("/teams/:id", testController.patchTeam);
router.get("/types", testController.getAllTypes);
router.get("/teamspokemons", testController.getAllTeamContainsPokemon);

// Route pour la liste des taches
// router.get("/tasks", taskController.getAllTasks);

// Route pour ajouter une tache
// router.post("/tasks", taskController.createTask);

// Route pour modifier une tache
// router.patch("/tasks/:id", taskController.updateTask);

// Route pour supprimer une tache
// router.delete("/tasks/:id", taskController.deleteTask);
