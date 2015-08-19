'use strict';

let createStore = require('fluxible/addons').createStore;

let SearchesStore = createStore({
  storeName: 'SearchesStore',
  handlers: {
    'OPEN_SEARCHES': 'openSearches'
  },
  initialize: function () {
    this.searches = {};
    this.userId = null;
  },
  openSearches: function (payload) {
    this.searches = payload.searches;
    this.currentId = payload.searches[0].id;
    this.userId = payload.userId;
    this.emitChange();
  },
  getAll: function () {
    return this.searches;
  },
  getCurrentId: function () {
    return this.currentId;
  },
  getUserId: function () {
    return this.userId;
  },
  get: function (id) {
    return this.searches[id];
  },
  dehydrate: function () {
    return {
      searches: this.searches,
      currentId: this.currentId,
      userId: this.userId
    };
  },
  rehydrate: function (state) {
    this.searches = state.searches;
    this.currentId = state.currentId;
    this.userId = state.userId;
  }
});

module.exports = SearchesStore;

