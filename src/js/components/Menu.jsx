'use strict';

import React from 'react';

let Menu = React.createClass({
  handleClick: function(evt) {
    evt.preventDefault();
    console.log('menu click');
    return;
  },
  render: function() {
    return (
      <nav className="menu">
        <a href="#" onClick={this.handleClick}><i className="btl bt-bars bt-2x"></i></a>
      </nav>
    );
  }
});

module.exports = Menu;

