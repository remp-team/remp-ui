'use strict';

import React from 'react';

let Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link rel="stylesheet" href="/public/vendor/css/black-tie.min.css" />
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Source+Code+Pro:200" />
          <link rel="stylesheet" href="/public/build/css/app.css" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
        </body>
        <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
        <script src="/public/build/js/client.js" defer></script>
      </html>
    );
  }
});

module.exports = Html;
