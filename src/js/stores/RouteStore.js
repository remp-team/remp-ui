let RouteStore = require('fluxible-router').RouteStore;

import routes from '../configs/routes';

module.exports = RouteStore.withStaticRoutes(routes);
