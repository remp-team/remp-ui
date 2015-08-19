'use strict';

import React           from 'react';
import PlaylistsStore  from '../stores/PlaylistsStore';
import Playlist        from '../components/Playlist.jsx';
import connectToStores from 'fluxible/addons/connectToStores';

let NavLink = require('fluxible-router').NavLink;

let Playlists = React.createClass({
  render: function() {
    let playlists = [];
    let userId = this.props.userId;
    let currentId = this.props.currentId;
    if (this.props.playlists.length > 0) {
      playlists = this.props.playlists.map(function(playlist) {
        return (
          <NavLink href={"/" + userId + "/" + playlist.id} key={playlist.id}>
            <Playlist
              key={playlist.id}
              playlist={playlist}
            />
          </NavLink>
        );
      }, this);
    }
    return (
      <ul id="playlists">
        {playlists}
      </ul>
    );
  },
  _onChange: function() {
    this.setState(this.getStateFromStores());
  }
});

module.exports = connectToStores(Playlists, [PlaylistsStore], {
  PlaylistsStore: function(store) {
    return {
      playlists: store.getAll(),
      currentId: store.getCurrentId(),
      userId: store.getUserId()
    };
  }
});
