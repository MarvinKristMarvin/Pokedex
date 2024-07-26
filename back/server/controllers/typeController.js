import { Type } from "../models/Type.js";

const typeController = {
  getAll: async function (req, res) {
    const json = await Type.findAll();
    res.status(200).json(json);
  },

  get: async function (req, res, next) {
    const id = req.params.id;
    const json = await Type.findAll({ where: { id } });
    if (!json) {
      return next();
    }
    res.status(200).json(json);
  },
};

export { typeController };
