'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import Fetcher from 'fetchr';
import Handlebars from 'handlebars';
import fs from 'fs';

import meFetcher from './fetchers/me';
import friendsFetcher from './fetchers/friends';
import playlistsFetcher from './fetchers/playlists';
import searchesFetcher from './fetchers/searches';
import inboxFetcher from './fetchers/inbox';

import meView from './views/me';
import friendsView from './views/friends';
import playlistsView from './views/playlists';
import searchesView from './views/searches';
import inboxView from './views/inbox';
import musicsView from './views/musics';

Fetcher.registerFetcher(friendsFetcher);
Fetcher.registerFetcher(meFetcher);
Fetcher.registerFetcher(playlistsFetcher);
Fetcher.registerFetcher(searchesFetcher);
Fetcher.registerFetcher(inboxFetcher);

let app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

app.use('/api', Fetcher.middleware());

app.get('/', function (req, res) {

  let fetcher = new Fetcher({
    xhrPath: '/api'
  });

  let fetcherPromisefy = function(name) {
    return new Promise(function (resolve) {
      fetcher.read(name, {}, {}, function (err, data) {
        resolve(data);
      });
    });
  }

  Promise.all([
    fetcherPromisefy('me'),
    fetcherPromisefy('friends'),
    fetcherPromisefy('playlists'),
    fetcherPromisefy('searches'),
    fetcherPromisefy('inbox'),
  ]).then(function (values) {

    let me        = values[0];
    let friends   = values[1];
    let playlists = values[2];
    let searches  = values[3];
    let inbox     = values[4];

    let initialData = {
      'me': me,
      'friends': friends,
      'playlists': playlists,
      'searches': searches,
      'inbox': inbox,
      'musics': playlists[0].musics
    };
    let initialDataStr = JSON.stringify(initialData);

    let meElm = React.createElement(meView, {data: me});
    let meStr = React.renderToString(meElm);

    let friendsElm = React.createElement(friendsView, {data: friends});
    let friendsStr = React.renderToString(friendsElm);

    let playlistsElm = React.createElement(playlistsView, {data: playlists});
    let playlistsStr = React.renderToString(playlistsElm);

    let searchesElm = React.createElement(searchesView, {data: searches});
    let searchesStr = React.renderToString(searchesElm);

    let inboxElm = React.createElement(inboxView, {data: inbox});
    let inboxStr = React.renderToString(inboxElm);

    let musicsElm = React.createElement(musicsView, {data: playlists[0].musics});
    let musicsStr = React.renderToString(musicsElm);

    let html = Handlebars.compile(fs.readFileSync('./src/tmpl/index.hbs').toString());

    res.set('Content-Type', 'text/html');
    res.send(html({
      initialData: initialDataStr,
      me: meStr,
      friends: friendsStr,
      playlists: playlistsStr,
      searches: searchesStr,
      inbox: inboxStr,
      musics: musicsStr,
    }));

  }).catch(function(error){

    console.log(error);
    res.status(500).send('Something broke!');
  });

  return;
});

app.listen(8090);
