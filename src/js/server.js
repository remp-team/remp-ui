require('babel/register');

var express      = require('express');
var favicon      = require('serve-favicon');
var serialize    = require('serialize-javascript');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf         = require('csurf');
var debug        = require('debug')('Example');
var React        = require('react');
var app          = require('./app');

var HtmlComponent = React.createFactory(require('./components/Html.jsx'));
var navigateAction = require('fluxible-router').navigateAction;

var server = express();
server.set('state namespace', 'App');
server.use(favicon(__dirname + '../../../public/img/favicon.ico'));
server.use('/public', express.static(__dirname + '../../../public'));
server.use(cookieParser());
server.use(bodyParser.json());
server.use(csrf({cookie: true}));

var fetchrPlugin = app.getPlugin('FetchrPlugin');
fetchrPlugin.registerService(require('./services/friends'));
fetchrPlugin.registerService(require('./services/playlists'));
fetchrPlugin.registerService(require('./services/searches'));

server.use(fetchrPlugin.getXhrPath(), fetchrPlugin.getMiddleware());

server.use(function (req, res, next) {
  var context = app.createContext({
    req: req,
    xhrContext: {
      _csrf: req.csrfToken()
    }
  });

  context.executeAction(navigateAction, { url: req.url, type: 'pageload' }, function (err) {

    if (err) {
      if (err.statusCode && err.statusCode === 404) {
        next();
      } else {
        next(err);
      }
      return;
    }

    debug('Exposing context state');
    var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

    debug('Rendering Application component into html');
    var html = React.renderToStaticMarkup(HtmlComponent({
      state: exposed,
      markup: React.renderToString(context.createElement())
    }));

    debug('Sending markup');
    res.send(html);
  });
});

var port = process.env.PORT || 8800;
server.listen(port);

console.log('Listening on port ' + port);

