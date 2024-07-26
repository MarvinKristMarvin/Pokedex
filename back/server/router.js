import { Router } from "express";

import { teamController } from "./controllers/teamController.js";
import { pokemonController } from "./controllers/pokemonController.js";
import { typeController } from "./controllers/typeController.js";

import validationMiddleware from "./middlewares/validationMiddleware.js";
import teamPatchSchema from "./schemas_joi/team.patch.schema.js";
import teamPostSchema from "./schemas_joi/team.post.schema.js";

export const router = Router();

router.get("/pokemons", pokemonController.getAll);
router.get("/pokemons/:id", pokemonController.get);

router.get("/types", typeController.getAll);
router.get("/types/:id", typeController.get);

router.get("/teams", teamController.getAll);
router.post(
  "/teams",
  validationMiddleware(teamPostSchema, "body"),
  teamController.post
);
router.get("/teams/:id", teamController.get);
router.delete("/teams/:id", teamController.delete);
router.patch(
  "/teams/:id",
  validationMiddleware(teamPatchSchema, "body"),
  teamController.patch
);
router.put(
  "/teams/:team_id/pokemons/:pokemon_id",
  teamController.putPokemonInTeam
);
router.delete(
  "/teams/:team_id/pokemons/:pokemon_id",
  teamController.deletePokemonFromTeam
);

/* TO DO
router.post("/pokemons/:id/votes", voteController.post)
router.get("/pokemons/leaderboard", voteController.getTopTen)
*/
