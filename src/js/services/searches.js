'use strict';

import request from 'superagent';

const REMP_API = `http://localhost:3000`;

export default {
  name: 'searches',
  read(req, resource, params, conf, callback) {
    request
    .get(`${REMP_API}/users/${params.userId}/${this.name}`)
    .end(function (err, res) {
      if (err) {
        return callback(err, null);
      }
      callback(null, res.body);
    });
  }
};
