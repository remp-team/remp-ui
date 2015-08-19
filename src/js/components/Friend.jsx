'use strict';

import React from 'react';

let ReactPropTypes = React.PropTypes;

let Friend = React.createClass({
  propTypes: {
    friend: ReactPropTypes.object,
    currentID: ReactPropTypes.string
  },
  render: function() {
    var friend = this.props.friend;
    return (
      <li><i className="btl bt-fw bt-user"></i>{friend.name}</li>
    );
  }
});

module.exports = Friend;

