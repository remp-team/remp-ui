'use strict';
import request from 'superagent';

// mock
const REMP_API = 'http://localhost:8190';

export default {
  name: 'friends',

  read(req, resource, params, config, callback) {

    request
    .get(`${REMP_API}/${this.name}`)
    .end(function (err, res) {
      if (err) {
        return callback(err, null);
      }
      callback(null, res.body);
    });
  }
};

