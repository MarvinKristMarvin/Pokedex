import { Pokemon } from "./Pokemon.js";
import { Type } from "./Type.js";
import { Team } from "./Team.js";
import { Team_Contains_Pokemon } from "./Team_Contains_Pokemon.js";
import { Pokemon_Has_Type } from "./Pokemon_Has_Type.js";

//* Voici deux exemples possibles pour une relation many to many XN XN
//* Association ON 1N via une table (on aurait pu faire un modèle Pokemon_Has_Type)
Type.belongsToMany(Pokemon, {
  foreignKey: "type_id",
  as: "pokemons",
  through: Pokemon_Has_Type,
});
Pokemon.belongsToMany(Type, {
  foreignKey: "pokemon_id",
  as: "types",
  through: Pokemon_Has_Type,
});

//* Association ON ON via un modèle (on aurait pu mettre la table pokemon_type)
Pokemon.belongsToMany(Team, {
  foreignKey: "pokemon_id",
  as: "teams",
  through: Team_Contains_Pokemon,
});
Team.belongsToMany(Pokemon, {
  foreignKey: "team_id",
  as: "pokemons",
  through: Team_Contains_Pokemon,
});

export { Pokemon, Type, Team, Team_Contains_Pokemon };
