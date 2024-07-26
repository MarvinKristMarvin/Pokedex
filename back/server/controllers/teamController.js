import { Team } from "../models/Team.js";

const teamController = {
  getAll: async function (req, res) {
    const json = await Team.findAll();
    res.status(200).json(json);
  },

  get: async function (req, res, next) {
    const id = req.params.id;
    const json = await Team.findAll({ where: { id } });
    if (!json) {
      return next();
    }
    res.status(200).json(json);
  },

  post: async function (req, res) {
    const userInput = req.body;
    const json = await Team.create(userInput);
    res.status(201).json(json);
  },

  delete: async function (req, res, next) {
    const id = req.params.id;
    const json = await Team.destroy({ where: { id } });
    if (!json) {
      return next();
    }
    res.status(204).json();
  },

  patch: async function (req, res, next) {
    const id = req.params.id;
    const userInput = req.body;
    // patch retourne un tableau json : [nombre, [{obj1}{obj2}]]
    // on prend donc le tableau d'objets modifiés retourné ce qui donne ca :
    const [, objs] = await Team.update(userInput, {
      where: { id },
      returning: true,
    });
    if (!objs || !objs.length) {
      return next();
    }
    const [json] = objs;
    res.status(200).json(json);
  },

  putPokemonInTeam: async function (req, res, next) {
    const teamId = req.params.team_id;
    const pokemonId = req.params.pokemon_id;
    const userInput = req.body;
    /* TO DO
    const [, objs] = await Team.update(userInput, {
      where: { id },
      returning: true,
    });
    if (!objs || !objs.length) {
      return next();
    }
    const [json] = objs;
    res.status(200).json(json);
    */
  },

  deletePokemonFromTeam: async function (req, res, next) {
    const teamId = req.params.team_id;
    const pokemonId = req.params.pokemon_id;
    /* TO DO
    const json = await Team.destroy({ where: { id } });
    if (!json) {
      return next();
    }
    res.status(204).json();
    */
  },
};

export { teamController };
