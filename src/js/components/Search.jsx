'use strict';

import React from 'react';

let ReactPropTypes = React.PropTypes;

let Search = React.createClass({
  propTypes: {
    search: ReactPropTypes.object,
    currentID: ReactPropTypes.string
  },
  render: function() {
    var search = this.props.search;
    return (
      <li><i className="btl bt-fw bt-search"></i>{search.name}</li>
    );
  }
});

module.exports = Search;

