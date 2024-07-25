import { Pokemon } from "../models/pokemon.js";
import { Type } from "../models/type.js";
import { Team } from "../models/team.js";
import { Team_Contains_Pokemon } from "../models/team_contains_pokemon.js";

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

  getAllTeams: async function (req, res) {
    const x = await Team.findAll();
    res.json(x);
  },

  getAllTeamContainsPokemon: async function (req, res) {
    const x = await Team_Contains_Pokemon.findAll();
    res.json(x);
  },
};

export { testController };
