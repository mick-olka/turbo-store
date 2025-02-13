# Admin panel for online marketplace by Mykola Hutsal

### install dependencies
`yarn install`

### developing
`yarn dev`

### build
`yarn build`

old package.json
```
{
  "name": "admin-ui",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "start": "serve -s -p 3005 dist"
  },
  "dependencies": {
    "@repo/ui": "workspace:*",
    "@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "@fontsource/roboto": "^4.5.8",
    "@mui/icons-material": "^5.11.11",
    "@mui/material": "^5.11.14",
    "@mui/styled-engine-sc": "^5.11.11",
    "@mui/x-data-grid": "^6.0.3",
    "axios": "^1.3.3",
    "framer-motion": "^9.0.3",
    "immer": "^9.0.19",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-drag-drop-files": "^2.3.9",
    "react-hook-form": "^7.43.1",
    "react-query": "^3.39.3",
    "react-router-dom": "^6.8.1",
    "react-toastify": "^9.1.1",
    "sass": "^1.58.3",
    "styled-components": "^5.3.9",
    "use-debounce": "^9.0.3",
    "vite-tsconfig-paths": "^4.0.5",
    "zustand": "^4.3.3"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@types/styled-components": "^5.1.26",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@vitejs/plugin-react-swc": "^3.0.0",
    "eslint": "^8.0.1",
    "eslint-config-prettier": "^8.6.0",
    "eslint-config-standard-with-typescript": "^34.0.0",
    "eslint-import-resolver-typescript": "^3.5.3",
    "eslint-plugin-import": "^2.25.2",
    "eslint-plugin-n": "^15.0.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-promise": "^6.0.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "2.8.4",
    "stylelint": "^15.1.0",
    "stylelint-config-prettier": "^9.0.5",
    "stylelint-config-standard": "^30.0.1",
    "stylelint-config-standard-scss": "^7.0.1",
    "stylelint-order": "^6.0.2",
    "stylelint-prettier": "^2.0.0",
    "typescript": "*",
    "vite": "^4.1.0"
  },
  "resolutions": {
    "styled-components": "^5.3.9"
  }
}
```