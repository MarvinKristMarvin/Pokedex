// "import module specifier ending" et choisir .js et ça marche directement
import { Pokemon } from "./pokemon.js";
import { Type } from "./type.js";
// import { Team } from "./team.js";
// import { Team_Contains_Pokemon } from "./team_contains_pokemon.js";

// * Association entre List et Card
// * Dans le cas de la méthode hasMany, la clé étrangère se trouve sur le modèle cible
Type.hasMany(Pokemon, {
  // * redondant : dans la fonction de connexion on a passé underscord:true à la config
  foreignKey: "type_id",
  // * définition de l'alias
  as: "pokemons",
});

// * Réciproque
// * Dans le cas de la méthode belongsTo, la clé étrangère se trouve sur le modèle source
Pokemon.belongsTo(Type, {
  foreignKey: "type_id",
  as: "type",
});

// * Association Tag et Card
/*Pokemon.belongsToMany(Team, {
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
});*/

export { Pokemon, Type /*, Team, Team_Contains_Pokemon */ };
