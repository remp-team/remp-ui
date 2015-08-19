'use strict';

let createStore = require('fluxible/addons').createStore;

let FriendsStore = createStore({
  storeName: 'FriendsStore',
  handlers: {
    'SHOW_FRIENDS': 'showFriends'
  },
  initialize: function () {
    this.currentID = null;
    this.friends = {};
  },
  showFriends: function (friends) {
    this.friends = friends;
    this.currentID = friends[0].id;
    this.emitChange();
  },
  get: function(id) {
    return this.friends[id];
  },
  getAll: function() {
    return this.friends;
  },
  getCurrentID: function() {
    return this.currentID;
  },
  getCurrentFriendsName: function() {
    return this.friends[this.currentID].name;
  },
  getCurrent: function() {
    return this.get(this.getCurrentID());
  },
  dehydrate: function () {
    return {
      currentID: this.currentID,
      friends: this.friends
    };
  },
  rehydrate: function (state) {
    this.currentID = state.currentID;
    this.friends = state.friends;
  }
});

module.exports = FriendsStore;

