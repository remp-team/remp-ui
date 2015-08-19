'use strict';

import React           from 'react';
import MusicsStore     from '../stores/MusicsStore';
import Music           from '../components/Music.jsx';
import connectToStores from 'fluxible/addons/connectToStores';

let NavLink = require('fluxible-router').NavLink;

let Musics = React.createClass({
  render: function() {
    let musics = [];
    let userId = this.props.userId;
    let currentId = this.props.currentId;

    if (this.props.musics.length > 0) {
      musics = this.props.musics.map(function(music) {
        return (
          <NavLink href={`/${userId}/${currentId}/${music.providerId}/${music.videoId}`} key={music.id}>
            <Music
              key={musics.id}
              music={music}
            />
          </NavLink>
        );
      }, this);
    }
    return (
      <ul id="musics">
        {musics}
      </ul>
    );
  },
  _onChange: function() {
    this.setState(this.getStateFromStores());
  }
});

module.exports = connectToStores(Musics, [MusicsStore], {
  MusicsStore: function(store) {
    return {
      musics: store.getAll(),
      currentId: store.getCurrentId(),
      userId: store.getUserId()
    };
  }
});
