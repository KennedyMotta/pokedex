import pokeapi from "./api";

export interface pokeInterface {
  id: number;
  name: string;
  height: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}

export interface speciesInterface {
  flavor_text_entries: {
    flavor_text: string;
  }[];
}

async function getPokemon(poke: number | string) {
  try {
    const { data } = await pokeapi.get(`/pokemon/${poke}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function nextPoke(pokeId: number) {
  const nextId = pokeId + 1;
  return getPokemon(nextId);
}

async function previousPoke(pokeId: number) {
  if (pokeId < 1) {
    throw new Error("No previous Pokemon available.");
  }

  const previousId = pokeId - 1;
  return getPokemon(previousId);
}

export { getPokemon, nextPoke, previousPoke };
