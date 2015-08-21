'use strict';

module.exports = function (context, payload, done) {

  context.service.read('friends', {}, {}, function (err, friends) {
    if (err) {
      console.log(err);
      done();
    }
    context.dispatch('SHOW_FRIENDS', friends);
    done();
  });
};

