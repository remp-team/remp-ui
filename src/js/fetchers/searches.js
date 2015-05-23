'use strict';
import request from 'superagent';
import config from 'config';

let api = config.get('api');
const REMP_API = `http://${api.host}:${api.port}`;

export default {
  name: 'searches',

  read(req, resource, params, conf, callback) {

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

