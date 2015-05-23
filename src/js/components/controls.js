import React from 'react';

let PreviousButton = React.createClass({
  handleClick: function() {
    console.log('previous click');
  },
  render: function() {
    console.log('render');
    return (
      <li><a href="#" onClick={this.handleClick}><i className="btl bt-fast-reverse"></i></a></li>
    );
  }
});

let PlayButton = React.createClass({
  handleClick: function() {
    console.log('play click');
  },
  render: function() {
    console.log('render');
    return (
      <li><a href="#" onClick={this.handleClick}><i className="btl bt-play"></i></a></li>
    );
  }
});

let NextButton = React.createClass({
  handleClick: function() {
    console.log('next click');
  },
  render: function() {
    console.log('render');
    return (
      <li><a href="#" onClick={this.handleClick}><i className="btl bt-fast-forward"></i></a></li>
    );
  }
});

let RepeatButton = React.createClass({
  handleClick: function() {
    console.log('repeat click');
  },
  render: function() {
    console.log('render');
    return (
      <li><a href="#" onClick={this.handleClick}><i className="btl bt-repeat"></i></a></li>
    );
  }
});

let VolumeButton = React.createClass({
  handleClick: function() {
    console.log('volume click');
  },
  render: function() {
    console.log('render');
    return (
      <li><a href="#" onClick={this.handleClick}><i className="btl bt-volume-up"></i></a></li>
    );
  }
});

let RedisplayButton = React.createClass({
  handleClick: function() {
    console.log('redisplay click');
  },
  render: function() {
    console.log('render');
    return (
      <li><a href="#" onClick={this.handleClick}><i className="btl bt-reply"></i></a></li>
    );
  }
});

let ShareButton = React.createClass({
  handleClick: function() {
    console.log('share click');
  },
  render: function() {
    console.log('render');
    return (
      <li><a href="#" onClick={this.handleClick}><i className="btl bt-share"></i></a></li>
    );
  }
});

let Controls = React.createClass({
  handleClick: function() {
    console.log('click');
  },
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
    return (
      <ul>
        <PreviousButton />
        <PlayButton />
        <NextButton />
        <RepeatButton />
        <VolumeButton />
        <RedisplayButton />
        <ShareButton />
      </ul>
    );
  }
});

module.exports = Controls;

