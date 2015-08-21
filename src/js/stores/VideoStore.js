'use strict';

import PlayerFactory from '../utils/playerFactory';

let createStore = require('fluxible/addons').createStore;

let VideoStore = createStore({
  storeName: 'VideoStore',
  handlers: {
    'QUE_VIDEO':   'queVideo',
    'PLAY_VIDEO':  'playVideo',
    'PAUSE_VIDEO': 'pauseVideo',
    'STOP_VIDEO':  'stopVideo'
  },
  initialize: function () {
    this.currentId = null;
  },
  queVideo: function (payload) {
    let factory = new PlayerFactory();
    let player = factory.create(payload.providerId);

    player.que(payload.videoId);

    this.emitChange();
  },
  playVideo: function (payload) {
    let factory = new PlayerFactory();
    let player = factory.create(payload.providerId);
    player.play(payload.videoId);
    this.emitChange();
  },
  pauseVideo: function (payload) {
    let factory = new PlayerFactory();
    let player = factory.create(payload.providerId);
    player.pause(payload.videoId);
    this.emitChange();
  },
  stopVideo: function (payload) {
    let factory = new PlayerFactory();
    let player = factory.create(payload.providerId);
    player.stop(payload.videoId);
    this.emitChange();
  },
  getCurrentId: function () {
    return this.currentId;
  },
  dehydrate: function () {
    return {
      currentId: this.currentId
    };
  },
  rehydrate: function (state) {
    this.currentId = state.currentId;
  }
});

module.exports = VideoStore;

