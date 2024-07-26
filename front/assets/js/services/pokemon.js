const pokemonServices = {
  async getFirstPokemon() {
    const response = await fetch("http://localhost:3000/pokemons/1");

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`${response.status} - ${error}`);
    }

    const data = await response.json();
    return data;
  },
};

export default pokemonServices;
