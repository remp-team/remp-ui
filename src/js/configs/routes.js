var showFriends   = require('../actions/showFriends');
var showPlaylists = require('../actions/showPlaylists');
var queVideo      = require('../actions/queVideo');


module.exports = {
  home: {
    path: '/',
    method: 'get',
    action: function (context, payload, done) {
      context.executeAction(showFriends, {}, done);
    }
  },
  user: {
    path: '/:userId',
    method: 'get',
    action: function (context, payload, done) {
      let userId = payload.get('params').get('userId');
      context.executeAction(showFriends, { userId: userId }, function() {
        context.executeAction(showPlaylists, { userId: userId }, function() {
          done();
        });
      });
    }
  },
  playlist: {
    path: '/:userId/:playlistId',
    method: 'get',
    action: function (context, payload, done) {
      let userId     = payload.get('params').get('userId');
      let playlistId = payload.get('params').get('playlistId');
      context.executeAction(showFriends, { userId: userId }, function() {
        context.executeAction(showPlaylists, { userId: userId, playlistId: playlistId }, function() {
          done();
        });
      });
    }
  },
  music: {
    path: '/:userId/:playlistId/:providerId/:videoId',
    method: 'get',
    action: function (context, payload, done) {
      let userId     = payload.get('params').get('userId');
      let playlistId = payload.get('params').get('playlistId');
      let providerId = payload.get('params').get('providerId');
      let videoId    = payload.get('params').get('videoId');
      context.executeAction(showFriends, { userId: userId }, function() {
        context.executeAction(showPlaylists, { userId: userId, playlistId: playlistId }, function() {
          context.executeAction(queVideo, { providerId: providerId, videoId: videoId}, function() {
            done();
          });
        });
      });
    }
  }
};
