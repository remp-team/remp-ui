import React from 'react';

import Me        from '../components/me.js';
import Friends   from '../components/friends.js';
import Inbox     from '../components/inbox.js';
import Musics    from '../components/musics.js';
import Playlists from '../components/playlists.js';
import Searches  from '../components/searches.js';

var App = React.createClass({

  render: function() {
    return (
      <section>
        <header>
          <h1 className="logo"><img src="/img/logo.png" alt="REMP logo" /></h1>
          <nav className="menu">
            <a href="#"><i className="btl bt-bars bt-2x"></i></a>
          </nav>
        </header>
        <section className="app">
          <section className="item list">
            <h2>Friends</h2>
            <div id="me-component">
              <Me data={this.props.me} />
            </div>
            <div id="friends-component">
              <Friends data={this.props.friends} />
            </div>
            <ul>
              <li><a href="#"><i className="btl bt-fw bt-envelope"></i>Send Invitation</a></li>
              <li><a href="#"><i className="btl bt-fw bt-plus"></i>Add Friend</a></li>
            </ul>
          </section>
          <section className="item list">
            <h2>Playlists</h2>
            <div id="playlists-component">
              <Playlists data={this.props.playlists} />
            </div>
            <div id="searches-component">
              <Searches data={this.props.searches} />
            </div>
            <div id="inbox-component">
              <Inbox data={this.props.inbox} />
            </div>
            <ul>
              <li><a href="#"><i className="btl bt-fw bt-search-plus"></i>Search</a></li>
              <li><a href="#"><i className="btl bt-fw bt-plus"></i>Add Playlist</a></li>
            </ul>
          </section>
          <section className="item list">
            <h2>Musics</h2>
            <div id="musics-component">
              <Musics data={this.props.musics} />
            </div>
            <ul>
              <li><a href="#"><i className="btl bt-fw bt-pencil"></i>Edit</a></li>
              <li><a href="#"><i className="btl bt-fw bt-redo"></i>Reload</a></li>
            </ul>
          </section>
          <section className="item video">
            <div id="video-frame">
              <div id="video"></div>
            </div>
            <ul>
              <li><a href="#"><i className="btl bt-fast-reverse"></i></a></li>
              <li><a href="#"><i className="btl bt-play"></i></a></li>
              <li><a href="#"><i className="btl bt-fast-forward"></i></a></li>
              <li><a href="#"><i className="btl bt-repeat"></i></a></li>
              <li><a href="#"><i className="btl bt-volume-up"></i></a></li>
              <li><a href="#"><i className="btl bt-reply"></i></a></li>
              <li><a href="#"><i className="btl bt-share"></i></a></li>
            </ul>
          </section>
        </section>
      </section>
    );
  }

});

module.exports = App;
