import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/main.css';

class menuItemLink extends Component {
    render() {
        return (
            <a href={this.props.url}  className="nav-link">{this.props.text}</a>
        );
    }
}

export default menuItemLink;
