'use strict';

import React     from 'react';
import Friends   from './Friends.jsx';
import Friend    from './Friend.jsx';
import Playlists from './Playlists.jsx';
import Playlist  from './Playlist.jsx';
import Searches  from './Searches.jsx';
import Search    from './Search.jsx';
import Musics    from './Musics.jsx';
import Music     from './Music.jsx';
import Menu      from './Menu.jsx';
import Controls  from './Controls.jsx';

import provideContext from 'fluxible/addons/provideContext';
let handleHistory  = require('fluxible-router').handleHistory;

let App = React.createClass({
  render: function() {
    return (
      <section id="app-component" className="gray">
        <header>
          <h1 className="logo"><img src="/public/img/logo.png" alt="REMP logo" /></h1>
          <Menu />
        </header>
        <section className="main">
          <section className="item list">
            <h2>Friends</h2>
            <div id="me-component">
            </div>
            <div id="friends-component">
              <Friends />
            </div>
            <ul>
              <li><a href="#"><i className="btl bt-fw bt-envelope"></i>Send Invitation</a></li>
              <li><a href="#"><i className="btl bt-fw bt-plus"></i>Add Friend</a></li>
            </ul>
          </section>
          <section className="item list">
            <h2>Playlists</h2>
            <div id="playlists-component">
              <Playlists />
            </div>
            <div id="searches-component">
              <Searches />
            </div>
            <div id="inbox-component">
            </div>
            <ul>
              <li><a href="#"><i className="btl bt-fw bt-search-plus"></i>Search</a></li>
              <li><a href="#"><i className="btl bt-fw bt-plus"></i>Add Playlist</a></li>
            </ul>
          </section>
          <section className="item list">
            <h2>Musics</h2>
            <div id="musics-component">
              <Musics />
            </div>
            <ul>
              <li><a href="#"><i className="btl bt-fw bt-pencil"></i>Edit</a></li>
              <li><a href="#"><i className="btl bt-fw bt-redo"></i>Reload</a></li>
            </ul>
          </section>
          <section className="item video">
            <div id="video-frame">
              <div id="video-youtube"></div>
              <div id="video-vimeo"></div>
              <div id="video-soundcloud"></div>
            </div>
          </section>
        </section>
        <footer>
          <Controls />
        </footer>
      </section>
    );
  }
});

App = handleHistory(App);
App = provideContext(App);
module.exports = App;

