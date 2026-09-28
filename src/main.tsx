import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// nextPoke(poke.id).then((pokemon) => {
//   console.log(pokemon.name);
// });

// previousPoke(poke.id).then((pokemon) => {
//   console.log(pokemon.name);
// });
