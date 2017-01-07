import React, {Component} from 'react';
import '../../css/main.css';

class navbarLink extends Component {
    render() {
        return (
            <a href={this.props.url}>{this.props.text}</a>
        );
    }
}

export default navbarLink;
