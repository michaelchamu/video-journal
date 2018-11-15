/* eslint-disable no-console */

const Hapi = require('hapi');
const inert = require('inert');
const routes = require('./routes/routes.config');
const { mongoose } = require('./db/database.config');

const server = Hapi.server({
  host: 'localhost',
  port: 7000,
  routes: { cors: true },
});

const init = async () => {
  await server.register(inert.plugin);
  server.route(routes);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
