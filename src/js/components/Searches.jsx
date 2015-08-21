'use strict';

import React           from 'react';
import SearchesStore   from '../stores/SearchesStore';
import Search          from '../components/Search.jsx';
import connectToStores from 'fluxible/addons/connectToStores';

let NavLink = require('fluxible-router').NavLink;

let Searches = React.createClass({
  render: function() {
    let searches = [];
    let userId = this.props.userId;
    if (this.props.searches.length > 0) {
      searches = this.props.searches.map(function(search) {
        return (
          <NavLink href={'/' + userId + '/' + search.id} key={search.id}>
            <Search
              key={search.id}
              search={search}
            />
          </NavLink>
        );
      }, this);
    }
    return (
      <ul id="searches">
        {searches}
      </ul>
    );
  },
  _onChange: function() {
    this.setState(this.getStateFromStores());
  }
});

module.exports = connectToStores(Searches, [SearchesStore], {
  SearchesStore: function(store) {
    return {
      searches: store.getAll(),
      currentId: store.getCurrentId(),
      userId: store.getUserId()
    };
  }
});
