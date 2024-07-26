import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

class Team extends Model {}

// 1er objet pour la définition des attributs du model
// 2nd objet pour la configuration du model
Team.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    // * Si on ne précise pas le nom de la table, sequelize va aller chercher le nom du modèle, en minuscule et au pluriel
    tableName: "team",
    modelName: "Team",
    timestamps: false,
  }
);

export { Team };
