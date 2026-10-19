# UofT AI Website

Built with [React](https://react.dev/), [Vite](https://vite.dev/), and
[Chakra UI](https://v2.chakra-ui.com/).

## Getting Started

Requires Node.js 22.22 or newer. Clone the repository and run `npm install` to
install all the dependencies.

## Available Scripts

### `npm run dev`

Starts the development server at [http://localhost:5173](http://localhost:5173)
with hot reloading.

### `npm run build`

Type-checks the project and builds it for production to the `dist` folder.

### `npm run preview`

Serves the production build locally for a final check before deploying.

### `npm run lint`

Lints the code using [Oxlint](https://oxc.rs/docs/guide/usage/linter).

### `npm run prettier:write`

Formats the code using [Prettier](https://prettier.io/).

## Deployment

The site is deployed on [Vercel](https://vercel.com/). `vercel.json` sets the
framework preset and rewrites all routes to `index.html` so client-side routing
works on direct page loads.
