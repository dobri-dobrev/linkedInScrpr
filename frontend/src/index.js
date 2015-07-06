'use strict';

//http://www.toptal.com/front-end/simple-data-flow-in-react-applications-using-flux-and-backbone

var React = require('react');
var $ = require('jquery');
var Dispatcher = require('flux').Dispatcher;
var Backbone = require('backbone');

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span>{this.props.txt} </span>
      </div>
      );
  }
});

React.render(
  <Comment author="Dobri" txt="Golemec"/>,
  $("#container")[0]
);