'use strict';

class Youtube {
  que(videoId) {
    window.youtube.cueVideoById(videoId);
  }
  play(videoId) {
    window.youtube.playVideoById(videoId);
  }
  pause() {
    window.youtube.pauseVideo();
  }
  stop() {
    window.youtube.stopVideo();
  }
}

module.exports = Youtube;
