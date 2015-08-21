'use strict';

import React from 'react';

let ReactPropTypes = React.PropTypes;

let Music = React.createClass({
  propTypes: {
    music: ReactPropTypes.object,
    currentID: ReactPropTypes.string
  },
  render: function() {
    let music = this.props.music;
    return (
      <li><i className="btl bt-fw bt-music"></i>{music.name}</li>
    );
  }
});

module.exports = Music;

