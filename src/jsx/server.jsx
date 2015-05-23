'use strict';
import express    from 'express';
import bodyParser from 'body-parser';
import React      from 'react';
import Fetcher    from 'fetchr';
import Handlebars from 'handlebars';
import fs         from 'fs';

import meFetcher        from './fetchers/me';
import friendsFetcher   from './fetchers/friends';
import playlistsFetcher from './fetchers/playlists';
import searchesFetcher  from './fetchers/searches';
import inboxFetcher     from './fetchers/inbox';

import App from './components/app';

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
      fetcher.read(name, {}, {}, function (error, data) {
        if (error) {
          console.log(error);
        }
        resolve(data);
      });
    });
  };

  Promise.all([
    fetcherPromisefy('me'),
    fetcherPromisefy('friends'),
    fetcherPromisefy('playlists'),
    fetcherPromisefy('searches'),
    fetcherPromisefy('inbox')
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

    let html = Handlebars.compile(fs.readFileSync('./src/tmpl/index.hbs').toString());

    let appElm = React.createElement(App, initialData);
    let appStr = React.renderToString(appElm);

    res.set('Content-Type', 'text/html');
    res.send(html({
      initialData: initialDataStr,
      app: appStr
    }));

  }).catch(function(error){

    console.log(error);
    res.status(500).send('Something broke!');
  });

  return;
});

app.listen(8090);
