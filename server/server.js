/* eslint-disable no-console */


const Hapi = require('hapi');
const routes = require('./routes/routes.config');
const { mongoose } = require('./db/database.config');

const server = Hapi.server({
  host: 'localhost',
  port: 7000,
  routes: { cors: true },
});
server.route(routes);
const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
