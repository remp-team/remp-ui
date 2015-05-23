import React from 'react';
import Fetcher from 'fetchr';

let fetcher = new Fetcher({
  xhrPath: '/api'
});

let Playlist = React.createClass({
  handleClick: function() {
    fetcher.read('playlists', { id: this.props.id }, {}, function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data.musics);
    });
    console.log('playlist click');
    return;
  },
  render: function() {
    return (
      <li><a href="#" onClick={this.handleClick}><i className="btl bt-fw bt-folder"></i>{this.props.name}</a></li>
    );
  }
});

let Playlists = React.createClass({
  getInitialState: function() {
    console.log('getInitialState');
    return {data: []};
  },
  componentDidMount: function() {
    console.log('componentDidMount');
  },
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  render: function() {
    console.log('render');
    var list = this.props.data.map(function(obj){
      return (
        <Playlist name={obj.name} id={obj.id} key={obj.id} />
      );
    });
    return (
      <ul id="playlists">
        {list}
      </ul>
    );
  }
});

module.exports = Playlists;

