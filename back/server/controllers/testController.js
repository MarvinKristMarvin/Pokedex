import { Pokemon } from "../models/Pokemon.js";
import { Type } from "../models/Type.js";
import { Team } from "../models/Team.js";
import { Team_Contains_Pokemon } from "../models/Team_Contains_Pokemon.js";

const testController = {
  testFunction: function (req, res, next) {
    console.log("OK");
    next();
  },

  getAllPokemons: async function (req, res) {
    const pokemons = await Pokemon.findAll();
    res.json(pokemons);
  },

  getAllTypes: async function (req, res) {
    const x = await Type.findAll();
    res.json(x);
  },

  getTeams: async function (req, res) {
    const x = await Team.findAll();
    res.json(x);
  },

  getAllTeamContainsPokemon: async function (req, res) {
    const x = await Team_Contains_Pokemon.findAll();
    res.json(x);
  },

  postTeam: async function (req, res) {
    const userInput = req.body;
    const team = await Team.create(userInput);
    console.log("created");
    res.status(201).json(team);
  },

  deleteTeam: async function (req, res, next) {
    const id = req.params.id;
    const result = await Team.destroy({ where: { id } });
    if (!result) {
      return next();
    }
    res.status(204).json();
  },

  patchTeam: async function (req, res, next) {
    const id = req.params.id;
    const userInput = req.body;
    // patch retourne un tableau json : [nombre, [{obj1}{obj2}]]
    // on isole donc le tableau d'objets modifiés retourné ce qui donne ca :
    const [, teams] = await Team.update(userInput, {
      where: { id },
      returning: true,
    });
    if (!teams || !teams.length) {
      return next();
    }
    const [team] = teams;
    res.json(team);
  },
};

export { testController };
