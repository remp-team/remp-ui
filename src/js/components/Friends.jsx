'use strict';

import React           from 'react';
import Friend          from '../components/Friend.jsx';
import FriendsStore    from '../stores/FriendsStore';
import connectToStores from 'fluxible/addons/connectToStores';

let NavLink = require('fluxible-router').NavLink;

let Friends = React.createClass({
  render: function() {
    let friends = this.props.friends.map(function(friend) {
      return (
        <NavLink href={'/' + friend.id} key={friend.id}>
          <Friend
            key={friend.id}
            friend={friend}
          />
        </NavLink>
      );
    }, this);
    return (
      <ul id="friends">
        {friends}
      </ul>
    );
  },
  _onChange: function() {
    this.setState(this.getStateFromStores());
  }
});

module.exports = connectToStores(Friends, [FriendsStore], {
  FriendsStore: function(store) {
    return {
      friends: store.getAll(),
      currentID: store.getCurrentID()
    };
  }
});
