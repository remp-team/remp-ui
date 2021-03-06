'use strict';

module.exports = function (context, payload, done) {

  let videoId = payload.videoId;
  let providerId = payload.providerId;

  context.dispatch('QUE_VIDEO', {
    providerId: providerId,
    videoId: videoId
  });
  done();
};

