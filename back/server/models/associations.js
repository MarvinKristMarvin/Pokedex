import { Pokemon } from "./pokemon.js";
import { Type } from "./type.js";
import { Team } from "./team.js";
import { Team_Contains_Pokemon } from "./team_contains_pokemon.js";

// * Association Type et Pokemon, pas besoin de creer de modele car ON - 11
Type.hasMany(Pokemon, {
  foreignKey: "type_id",
  as: "pokemons",
});
Pokemon.belongsTo(Type, {
  foreignKey: "type_id",
  as: "type",
});

// Association ON ON, création d'un modèle requis
Pokemon.belongsToMany(Team, {
  foreignKey: "pokemon_id",
  otherKey: "team_id",
  through: Team_Contains_Pokemon,
  as: "teams",
});
Team.belongsToMany(Pokemon, {
  foreignKey: "team_id",
  otherKey: "pokemon_id",
  through: Team_Contains_Pokemon,
  as: "pokemons",
});

export { Pokemon, Type /*, Team, Team_Contains_Pokemon */ };
