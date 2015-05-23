'use strict';
import request from 'superagent';
import config from 'config';

let api = config.get('api');
const REMP_API = `http://${api.host}:${api.port}`;

export default {
  name: 'playlists',

  read(req, resource, params, conf, callback) {

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

