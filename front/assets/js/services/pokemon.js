const pokemonServices = {
  async getAllPokemons() {
    const response = await fetch("http://localhost:3000/pokemons");

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`${response.status} - ${error}`);
    }

    const data = await response.json();
    return data;
  },
};

export default pokemonServices;
