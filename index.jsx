/** @jsx React.DOM */
'use strict'
var React = require('react')

var Index = React.createClass({

    render: function() {
        return (
            <div>Hello</div>
        );
    }

});

React.render(<Index />, document.getElementById("content"))
// React.renderComponent(<Hello />, document.getElementById('content'))
