'use strict';

import React from 'react';

let ReactPropTypes = React.PropTypes;

let Menu = React.createClass({
  _handleClick: function(evt) {
    evt.preventDefault();
    console.log('menu click');
    return;
  },
  render: function() {
    var friend = this.props.friend;
    return (
      <nav className="menu">
        <a href="#" onClick={this._handleClick}><i className="btl bt-bars bt-2x"></i></a>
      </nav>
    );
  }
});

module.exports = Menu;

