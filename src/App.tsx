import { useEffect, useState, type FormEvent } from "react";
import PokedexScreen from "./components/PokedexSprite";
import PokeInfos from "./components/PokeInfos";
import {
  getPokemon,
  nextPoke,
  previousPoke,
  type pokeInterface,
} from "./services/pokeService";

function App() {
  const [pokemon, setPokemon] = useState<pokeInterface | null>(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPokemon("charizard")
      .then((result) => {
        setPokemon(result);
        setQuery(result.name);
      })
      .catch(() => setError("Could not connect to the Pokédex."))
      .finally(() => setIsLoading(false));
  }, []);

  async function loadPokemon(request: () => Promise<pokeInterface>) {
    setIsLoading(true);
    setError("");
    try {
      const result = await request();
      setPokemon(result);
      setQuery(result.name);
    } catch {
      setError("No Pokémon found. Try another name or number.");
    } finally {
      setIsLoading(false);
    }
  }

  function searchPokemon(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const search = query.trim();
    if (search) loadPokemon(() => getPokemon(search.toLowerCase()));
  }

  return (
    <main className="app-shell">
      <section className="pokedex" aria-label="Pokédex">
        <header className="pokedex-header">
          <div className="brand-lockup">
            <span className="brand-mark" aria-hidden="true">
              <span />
            </span>
            <div>
              <p className="eyebrow">FIELD RESEARCH DEVICE</p>
              <p className="brand-name">
                POKÉDEX <span>01</span>
              </p>
            </div>
          </div>
          <div className="header-lights" aria-label="Device status">
            <span className="light light-red" />
            <span className="light light-yellow" />
            <span className="light light-green" />
          </div>
        </header>

        <div className="pokedex-content">
          <section className="display-column" aria-label="Pokémon display">
            <div className="screen-bezel">
              <div className="screen-topline">
                <span>LIVE SPECIMEN</span>
                <span className="signal">
                  <i /> SYNC
                </span>
              </div>
              {pokemon ? (
                <PokedexScreen pokemon={pokemon} />
              ) : (
                <div className="pokedex-screen screen-placeholder">
                  <span>{isLoading ? "TUNING IN..." : "NO SIGNAL"}</span>
                </div>
              )}
              <div className="screen-caption">
                <span>KANTO FIELD INDEX</span>
                <span>
                  #{pokemon ? String(pokemon.id).padStart(3, "0") : "---"}
                </span>
              </div>
            </div>
            <div className="hardware-details">
              <div className="speaker-grille" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <p>
                POKÉMON OBSERVATION SYSTEM <span>v.1.0</span>
              </p>
            </div>
          </section>

          <section className="info-column" aria-label="Pokémon details">
            <div className="section-kicker">
              <span /> SPECIMEN DATA
            </div>
            {pokemon ? (
              <PokeInfos pokemon={pokemon} />
            ) : (
              <div className="empty-info">Waiting for a specimen...</div>
            )}

            <form className="search-form" onSubmit={searchPokemon}>
              <label htmlFor="pokemon-search">LOOK UP A POKÉMON</label>
              <div className="search-control">
                <input
                  id="pokemon-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Name or Pokédex number"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  aria-label="Search Pokémon"
                  disabled={isLoading || !query.trim()}
                >
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
              {error && (
                <p className="error-message" role="status">
                  {error}
                </p>
              )}
            </form>

            <div className="navigation-controls">
              <button
                className="nav-button"
                aria-label="Previous Pokémon"
                onClick={() =>
                  pokemon && loadPokemon(() => previousPoke(pokemon.id))
                }
                disabled={!pokemon || isLoading || pokemon.id <= 1}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                className="nav-button nav-button-next"
                aria-label="Next Pokémon"
                onClick={() =>
                  pokemon && loadPokemon(() => nextPoke(pokemon.id))
                }
                disabled={!pokemon || isLoading}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="index-note">
              <span>●</span> NATIONAL DEX DATABASE
            </div>
          </section>
        </div>
        <div className="pokedex-footer">
          <span>TRAINER'S FIELD COMPANION</span>
          <span>
            NO. {pokemon ? String(pokemon.id).padStart(4, "0") : "----"}
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;
