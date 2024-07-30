import { Pokemon, Type } from "../models/associations.js";

const pokemonController = {
  getAll: async function (req, res) {
    const json = await Pokemon.findAll();
    res.status(200).json(json);
  },

  get: async function (req, res, next) {
    const id = req.params.id;
    const json = await Pokemon.findAll({ where: { id } });
    if (!json) {
      return next();
    }
    res.status(200).json(json);
  },

  getAllWithTheirTypes: async function (req, res) {
    const json = await Pokemon.findAll({
      include: "types",
    });
    res.status(200).json(json);
  },

  getPokemonsOfType: async function (req, res) {
    const { id } = req.params;
    const json = await Type.findByPk(id, {
      include: "pokemons",
    });
    res.status(200).json(json);
  },
};

export { pokemonController };
