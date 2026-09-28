import type { pokeInterface } from "../services/pokeService";
import pokeBackground from "../assets/PokeBg.png";

const PokedexScreen = ({ pokemon }: { pokemon: pokeInterface }) => {
  const animatedSprite =
    pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default;

  const sprite = animatedSprite ?? pokemon.sprites.front_default;
  const spriteScale = Math.min(
    1.35,
    Math.max(0.42, Math.sqrt(pokemon.height / 17)),
  );

  return (
    <div className="pokedex-screen">
      <img
        className="pokedex-bg"
        src={pokeBackground}
        alt="Pokedex Background"
      />
      <img
        className="pokedex-sprite"
        src={sprite}
        alt={pokemon.name}
        style={{ transform: `translate(-50%, -50%) scale(${spriteScale})` }}
      />
    </div>
  );
};

export default PokedexScreen;
