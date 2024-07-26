# MCD AND MLD

## MCD

- TEAM (<ins>id</ins>, name, description)
- POKEMON (<ins>id</ins>, name, hp, atk, def, atk_spe, def_spe, speed)
- TYPE (<ins>id</ins> name, color)

- TEAM 0N (CONTENIR) 0N POKEMON
- POKEMON 1N (POSSEDER) 0N TYPE

## MLD

- TEAM (<ins>id</ins>, name, description)
- POKEMON (<ins>id</ins>, name, hp, atk, def, atk_spe, def_spe, speed, #type_id)
- TYPE (<ins>id</ins>, name, color)
- CONTENIR (<ins>id</ins>, #team_id, #pokemon_id)
- POSSEDER (<ins>id</ins>, #pokemon_id, #type_id)
