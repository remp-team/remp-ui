'use strict';

import 'jquery';
import 'fitvids';

import React from 'react';

import App from './components/app.js';

var player;

$(function() {

  var data = $('#initial-data').data('json');
  console.log(data);

  let appElm = React.createElement(App, data);
  React.render(appElm, document.getElementById('app'));

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
