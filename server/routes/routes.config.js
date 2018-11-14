const createRoutes = require('./create.routes');
const readRoutes = require('./read.routes');
const updateRoutes = require('./update.routes');

module.exports = [].concat(createRoutes, readRoutes, updateRoutes);
