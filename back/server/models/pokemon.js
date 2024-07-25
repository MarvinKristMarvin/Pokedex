import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

class Pokemon extends Model {}

// 1er objet pour la définition des attributs du model
// 2nd objet pour la configuration du model
Pokemon.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atk_spe: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    def_spe: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize(),
    // * Si on ne précise pas le nom de la table, sequelize va aller chercher le nom du modèle, en minuscule et au pluriel
    tableName: "pokemon",
    modelName: "Pokemon",
  }
);

export { Pokemon };
