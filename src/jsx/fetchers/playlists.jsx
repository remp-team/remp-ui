'use strict';
import request from 'superagent';

// mock
const REMP_API = 'http://localhost:8190';

export default {
  name: 'playlists',

  read(req, resource, params, config, callback) {

    let id = params.id || '';

    request
    .get(`${REMP_API}/${this.name}/${id}`)
    .end(function (err, res) {
      if (err) {
        return callback(err, null);
      }
      callback(null, res.body);
    });
  }
};

