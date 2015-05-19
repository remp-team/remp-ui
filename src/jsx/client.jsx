'use strict';

import React from 'react';

import 'jquery';
import 'fitvids';

import Me        from './components/me.jsx';
import Friends   from './components/friends.jsx';
import Playlists from './components/playlists.jsx';
import Searches  from './components/searches.jsx';
import Inbox     from './components/inbox.jsx';
import Musics    from './components/musics.jsx';

var player;

$(function() {

  var data = $('#initial-data').data('json');
  console.log(data);

  let meElm = React.createElement(Me, {data: data.me});
  React.render(meElm, document.getElementById('me-component'));

  let friendsElm = React.createElement(Friends, {data: data.friends});
  React.render(friendsElm, document.getElementById('friends-component'));

  let playlistsElm = React.createElement(Playlists, {data: data.playlists});
  React.render(playlistsElm, document.getElementById('playlists-component'));

  let searchesElm = React.createElement(Searches, {data: data.searches});
  React.render(searchesElm, document.getElementById('searches-component'));

  let inboxElm = React.createElement(Inbox, {data: data.inbox});
  React.render(inboxElm, document.getElementById('inbox-component'));

  let musicsElm = React.createElement(Musics, {data: data.musics});
  React.render(musicsElm, document.getElementById('musics-component'));

  window.onYouTubeIframeAPIReady = function() {
    console.log('on youtube iframe api ready');
    window.player = new YT.Player('video', {
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
