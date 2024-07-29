import { Router } from "express";

import { teamController } from "./controllers/teamController.js";
import { pokemonController } from "./controllers/pokemonController.js";
import { typeController } from "./controllers/typeController.js";

import validationMiddleware from "./middlewares/validationMiddleware.js";
import teamPatchSchema from "./schemas_joi/team.patch.schema.js";
import teamPostSchema from "./schemas_joi/team.post.schema.js";

import error404Middleware from "./middlewares/error404Middleware.js";
import wrapperMiddleware from "./middlewares/wrapperMiddleware.js";

export const router = Router();

router.get(
  "/pokemons",
  wrapperMiddleware(pokemonController.getAllWithTheirTypes)
);
/*router.get("/pokemons", wrapperMiddleware(pokemonController.getAll));*/
router.get("/pokemons/:id", wrapperMiddleware(pokemonController.get));

router.get("/types", wrapperMiddleware(typeController.getAll));
router.get("/types/:id", wrapperMiddleware(typeController.get));

router.get("/teams", wrapperMiddleware(teamController.getAll));
router.post(
  "/teams",
  validationMiddleware(teamPostSchema, "body"),
  wrapperMiddleware(teamController.post)
);
router.get("/teams/:id", wrapperMiddleware(teamController.get));
router.delete("/teams/:id", wrapperMiddleware(teamController.delete));
router.patch(
  "/teams/:id",
  validationMiddleware(teamPatchSchema, "body"),
  wrapperMiddleware(teamController.patch)
);
router.put(
  "/teams/:team_id/pokemons/:pokemon_id",
  wrapperMiddleware(teamController.putPokemonInTeam)
);
router.delete(
  "/teams/:team_id/pokemons/:pokemon_id",
  wrapperMiddleware(teamController.deletePokemonFromTeam)
);

/* TO DO
router.post("/pokemons/:id/votes", voteController.post)
router.get("/pokemons/leaderboard", voteController.getTopTen)
*/

router.use(error404Middleware);
