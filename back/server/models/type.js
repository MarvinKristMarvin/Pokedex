import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

class Type extends Model {}

// 1er objet pour la définition des attributs du model
// 2nd objet pour la configuration du model
Type.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "ffffff",
    },
  },
  {
    sequelize: sequelize(),
    // * Si on ne précise pas le nom de la table, sequelize va aller chercher le nom du modèle, en minuscule et au pluriel
    tableName: "type",
    modelName: "Type",
  }
);

export { Type };
