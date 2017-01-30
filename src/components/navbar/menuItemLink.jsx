import React, {Component} from 'react';
import {render} from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/main.css';

class MenuItemLink extends Component {
    render() {
        return (
            <a href={this.props.url}  className="nav-link">{this.props.text}</a>
        );
    }
}

render(<MenuItemLink/>);
