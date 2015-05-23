import React from 'react';

let Music = React.createClass({
  handleClick: function() {
    console.log(`music click: ${this.props.videoId}`);
    window.player.cueVideoById(this.props.videoId);
    return;
  },
  handleDoubleClick: function() {
    console.log(`music double click: ${this.props.videoId}`);
    window.player.loadVideoById(this.props.videoId);
    return;
  },
  render: function() {
    return (
      <li><a href="#" onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}><i className="btl bt-fw bt-music"></i>{this.props.name}</a></li>
    );
  }
});

let Musics = React.createClass({
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
        <Music name={obj.name} videoId={obj.videoId} key={obj.id} />
      );
    });
    return (
      <ul id="musics">
        {list}
      </ul>
    );
  }
});

module.exports = Musics;

