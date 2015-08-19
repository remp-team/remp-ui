'use strict';

let debug = require('debug')('showPlaylistsAction');

module.exports = function (context, payload, done) {

  let userId     = payload.userId;
  let playlistId = payload.playlistId;

  context.service.read('playlists', {userId: userId}, {}, function (err, playlists) {
    if (err) {
      console.log(err);
      done();
    }
    context.dispatch('OPEN_PLAYLISTS', {
      playlists: playlists,
      userId: userId
    });
    context.dispatch('OPEN_MUSICS', {
      playlists: playlists,
      userId: userId,
      playlistId: playlistId
    });
    done();
  });
};

