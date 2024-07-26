import { Pokemon } from "./Pokemon.js";
import { Type } from "./Type.js";
import { Team } from "./Team.js";
import { Team_Contains_Pokemon } from "./Team_Contains_Pokemon.js";

//* Voici deux exemples possibles pour une relation many to many XN XN
//* Association ON 1N via une table (on aurait pu faire un modèle Pokemon_Has_Type)
Type.belongsToMany(Pokemon, {
  foreignKey: "type_id",
  as: "pokemons",
  through: "pokemon_type",
});
Pokemon.belongsToMany(Type, {
  foreignKey: "pokemon_id",
  as: "types",
  through: "pokemon_type",
});

//* Association ON ON via un modèle (on aurait pu mettre la table pokemon_type)
Pokemon.belongsToMany(Team, {
  foreignKey: "pokemon_id",
  // otherKey: "team_id",
  through: Team_Contains_Pokemon,
  as: "teams",
});
Team.belongsToMany(Pokemon, {
  foreignKey: "team_id",
  // otherKey: "pokemon_id",
  through: Team_Contains_Pokemon,
  as: "pokemons",
});

export { Pokemon, Type /*, Team, Team_Contains_Pokemon */ };
