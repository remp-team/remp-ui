'use strict';

import React        from 'react';
import Fluxible     from 'fluxible';
import fetchrPlugin from 'fluxible-plugin-fetchr';

let app = new Fluxible({
  component: require('./components/App.jsx')
});

app.plug(fetchrPlugin({
  xhrPath: '/api'
}));

app.registerStore(require('./stores/RouteStore'));
app.registerStore(require('./stores/FriendsStore'));
app.registerStore(require('./stores/PlaylistsStore'));
app.registerStore(require('./stores/SearchesStore'));
app.registerStore(require('./stores/MusicsStore'));
app.registerStore(require('./stores/VideoStore'));

module.exports = app;

