# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### How to Upload

1- Add to vite.config.js:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://<USERNAME>.github.io/<REPONAME>',
})
```

2- command line
```sh
npm install --save-dev gh-pages
```

3- add to package.json:
```json
"scripts": {
    "deploy": "npm run build && gh-pages -d dist"
},
```

4- command
```sh
npm run deploy
```

Checkout gh-pages branch