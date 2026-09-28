# Pokédex

Pokédex interativa e responsiva para pesquisar Pokémon e consultar seus dados. A interface combina uma tela de campo, uma ficha informativa e controles inspirados em um videogame portátil.

## Funcionalidades

- Pesquisar Pokémon por nome ou número da Pokédex Nacional.
- Navegar entre entradas com os botões anterior e próximo.
- Ver sprites animadas quando disponíveis, com fallback para sprites estáticas.
- Consultar tipos e altura; a escala da sprite acompanha a altura informada pela API.
- Usar a interface em telas desktop e mobile.

## Tecnologias

- React 19
- TypeScript 6
- Vite 8
- Axios
- [PokéAPI](https://pokeapi.co/)

## Executar localmente

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

O Vite informa no terminal o endereço local para abrir no navegador.

## Scripts

| Comando           | Descrição                                                 |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento.                     |
| `npm run build`   | Verifica os tipos e gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente a versão gerada.                         |
| `npm run lint`    | Executa o ESLint.                                         |

## API

Os dados são consultados em `https://pokeapi.co/api/v2` usando Axios. Não é necessário configurar uma chave de API.

## Estrutura do projeto

```text
src/
	assets/       Imagens usadas pela interface
	components/   Tela da Pokédex e ficha do Pokémon
	services/     Cliente Axios e funções de consulta à PokéAPI
	App.tsx       Estado e composição da aplicação
	index.css     Estilos e layout responsivo
```
