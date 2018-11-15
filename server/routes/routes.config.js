const createRoutes = require('./create.routes');
const readRoutes = require('./read.routes');
const updateRoutes = require('./update.routes');
const staticRoutes = require('./static.routes');

module.exports = [].concat(createRoutes, readRoutes, updateRoutes, staticRoutes);
