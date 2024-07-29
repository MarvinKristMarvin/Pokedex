import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

class Pokemon_Has_Type extends Model {}

Pokemon_Has_Type.init(
  {
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "pokemon_type",
    modelName: "Pokemon_Has_Type",
    timestamps: false,
  }
);

export { Pokemon_Has_Type };
