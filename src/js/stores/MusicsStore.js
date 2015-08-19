'use strict';

let createStore = require('fluxible/addons').createStore;

let MusicsStore = createStore({
  storeName: 'MusicsStore',
  handlers: {
    'OPEN_MUSICS': 'openMusics'
  },
  initialize: function () {
    this.playlists = {};
    this.musics = {};
    this.userId = null;
  },
  openMusics: function (payload) {
    this.currentId = payload.playlistId;
    this.playlists = payload.playlists;
    this.musics = this.getCurrent();
    this.userId    = payload.userId;
    this.emitChange();
  },
  getAll: function () {
    return this.musics;
  },
  get: function(id) {
    let musics = [];
    this.playlists.forEach(function(playlist) {
      if (id == playlist.id) {
        musics = playlist.musics;
      }
    });
    return musics;
  },
  getCurrentId: function () {
    return this.currentId;
  },
  getCurrent: function () {
    return this.get(this.getCurrentId());
  },
  getUserId: function () {
    return this.userId;
  },
  dehydrate: function () {
    return {
      musics: this.musics,
      currentId: this.currentId,
      userId: this.userId
    };
  },
  rehydrate: function (state) {
    this.musics = state.musics;
    this.currentId = state.currentId;
    this.userId = state.userId;
  }
});

module.exports = MusicsStore;

