'use strict';

import React from 'react';

let ReactPropTypes = React.PropTypes;

let Playlist = React.createClass({
  propTypes: {
    playlist: ReactPropTypes.object,
    currentID: ReactPropTypes.string
  },
  render: function() {
    let playlist = this.props.playlist;
    return (
      <li><i className="btl bt-fw bt-folder"></i>{playlist.name}</li>
    );
  }
});

module.exports = Playlist;

