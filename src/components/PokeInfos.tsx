import type { pokeInterface } from "../services/pokeService";

const PokeInfos = ({ pokemon }: { pokemon: pokeInterface }) => {
  const number = String(pokemon.id).padStart(3, "0");
  const height = (pokemon.height / 10).toFixed(1);

  return (
    <div className="poke-infos" aria-live="polite">
      <div className="pokemon-heading">
        <span className="pokemon-number">NO. {number}</span>
        <h1 id="poke-name">{pokemon.name}</h1>
      </div>
      <div className="type-list" aria-label="Types">
        {pokemon.types.map(({ type }) => (
          <span className={`type-chip type-${type.name}`} key={type.name}>
            {type.name}
          </span>
        ))}
      </div>
      <div className="data-rule" />
      <div className="data-readout">
        <span>SPECIMEN HEIGHT</span>
        <strong>{height} m</strong>
      </div>
    </div>
  );
};

export default PokeInfos;
