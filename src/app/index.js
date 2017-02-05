'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// create components

class TodoComponent extends Component {
    render() {
        return (
            <h1>Hello</h1>
        );
    }
}

let TodoComponent1 = React.createClass({
    render() {
        return (
            <h1>Hello</h1>
        );
    }
});

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('app'));
