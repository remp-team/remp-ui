'use strict';

let createStore = require('fluxible/addons').createStore;

let PlaylistsStore = createStore({
  storeName: 'PlaylistsStore',
  handlers: {
    'OPEN_PLAYLISTS': 'openPlaylists'
  },
  initialize: function () {
    this.playlists = {};
    this.userId = null;
  },
  openPlaylists: function (payload) {
    this.playlists = payload.playlists;
    this.currentId = payload.playlists[0].id;
    this.userId = payload.userId;
    this.emitChange();
  },
  getAll: function () {
    return this.playlists;
  },
  getCurrentId: function () {
    return this.currentId;
  },
  getUserId: function () {
    return this.userId;
  },
  get: function (id) {
    return this.playlists[id];
  },
  dehydrate: function () {
    return {
      playlists: this.playlists,
      currentId: this.currentId,
      userId: this.userId
    };
  },
  rehydrate: function (state) {
    this.playlists = state.playlists;
    this.currentId = state.currentId;
    this.userId = state.userId;
  }
});

module.exports = PlaylistsStore;

