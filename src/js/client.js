'use strict';

import React from 'react';
import debug from 'debug';
import app   from './app';

let bootstrapDebug = debug('Example');
let dehydratedState = window.App;

window.React = React;
debug.enable('*');

bootstrapDebug('rehydrating app');
app.rehydrate(dehydratedState, function (err, context) {
  if (err) {
    throw err;
  }
  window.context = context;
  let mountNode = document.getElementById('app');

  bootstrapDebug('React Rendering');
  React.render(context.createElement(), mountNode, function () {
    bootstrapDebug('React Rendered');
  });
});

let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function() {
  window.youtube = new YT.Player('video-youtube', {
    height: '390',
    width: '640',
    videoId: 'V_YlZ1JdcVk',
    events: {
      'onReady': function(event) {
        //
      },
      'onStateChange': function(event) {
        //
      }
    }
  });
};

tag = document.createElement('script');
tag.src = 'https://f.vimeocdn.com/js/froogaloop2.min.js';

firstScriptTag = document.getElementsByTagName('script')[1];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let iframe = document.createElement('iframe');
iframe.src = 'https://player.vimeo.com/video/76979871?api=1&player_id=video-vimeo';
iframe.height = '390';
iframe.width = '640x';

document.querySelector('#video-vimeo').appendChild(iframe);
document.querySelector('#video-vimeo').style.display = 'none';

