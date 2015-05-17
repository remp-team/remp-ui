'use strict';

import React from 'react';

import 'jquery';
import 'fitvids';

import meView from './views/me.jsx';
import friendsView from './views/friends.jsx';
import playlistsView from './views/playlists.jsx';
import searchesView from './views/searches.jsx';
import inboxView from './views/inbox.jsx';
import musicsView from './views/musics.jsx';

$(function() {

  var data = $('#initial-data').data('json');
  console.log(data);

  let meElm = React.createElement(meView, {data: data.me});
  React.render(meElm, document.getElementById('me-component'));

  let friendsElm = React.createElement(friendsView, {data: data.friends});
  React.render(friendsElm, document.getElementById('friends-component'));

  let playlistsElm = React.createElement(playlistsView, {data: data.playlists});
  React.render(playlistsElm, document.getElementById('playlists-component'));

  let searchesElm = React.createElement(searchesView, {data: data.searches});
  React.render(searchesElm, document.getElementById('searches-component'));

  let inboxElm = React.createElement(inboxView, {data: data.inbox});
  React.render(inboxElm, document.getElementById('inbox-component'));

  console.log(data.musics);

  let musicsElm = React.createElement(musicsView, {data: data.musics});
  React.render(musicsElm, document.getElementById('musics-component'));

  window.onYouTubeIframeAPIReady = function() {
    console.log('on youtube iframe api ready');
    var player = new YT.Player('video', {
      videoId: '0S43IwBF0uM',
      events: {
        'onReady': function(evt) {
          console.log('on ready');
          $('#video-frame').fitVids().show();
          //evt.target.playVideo();
        },
        'onStateChange': function() {
          console.log('on state change');
        }
      }
    });
  };
});
