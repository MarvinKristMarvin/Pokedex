import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

class Team_Contains_Pokemon extends Model {}

Team_Contains_Pokemon.init(
  {
    team_id: {
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
    tableName: "team_pokemon",
    modelName: "Team_Contains_Pokemon",
    timestamps: false,
  }
);

export { Team_Contains_Pokemon };
