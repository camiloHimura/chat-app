## My chap App

Real-time React app server and built with express and socket io

### `npm install`

node version 12 or greater.

### `npm run start:dev` 

Run develop mode.

Uses webpack-dev-server to build and serve the app (hot reload it's available), it opens automatically on the browser. <br>[.env.dev](https://github.com/camiloHimura/chat-app/blob/master/.env.dev) config environment variables.


### `npm run server:dev` 

Builds the app for development to the `public` folder, it's severed by express, hot reload it isn't available.
<br>[.env.dev](https://github.com/camiloHimura/chat-app/blob/master/.env.dev) config environment variables.


### `npm run server:prod`

Runs and build the app in the production mode.


### `npm run test`

Runs all the tests in the App, Jest + Enzyme.


### `npm run test:watch`

Runs all the tests in the App in 'watch' mode.


### Features

* Chat page
  * User’s messages on the right 
  * Other user’s messages on the left
  * Message display the time it was sent
  * Users can send pictures via URL, valid images' format jpg, png, and gif.

* Settings page
  * Usar can config it's userName, time format, and shortcut.
  * All settings are consumed and saved on the LocalStorage.
  *  Button to reset all the settings back to its defaults.

