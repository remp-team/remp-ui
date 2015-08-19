'use strict';

import request from 'superagent';

const REMP_API = `http://localhost:3000`;

export default {
  name: 'friends',
  read(req, resource, params, conf, callback) {
    request
    .get(`${REMP_API}/users`)
    .end(function (err, res) {
      if (err) {
        console.log(err);
        return callback(err, null);
      }
      callback(null, res.body);
    });
  }
};

