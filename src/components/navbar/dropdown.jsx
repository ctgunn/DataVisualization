import React, {Component} from 'react';
import {render} from 'react-dom';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/main.css';

class Dropdown extends Component {
    generateItem(item) {
        let eventKey = parseInt(item.eventKey);
        let menuItem = [];

        try {
            if (item.eventKey === 'divider') {
                menuItem.push(<MenuItem divider/>);
            } else {
                menuItem.push(<MenuItem eventKey={{eventKey}} href={item.url}>{item.text}</MenuItem>);
            }
        } catch(error) {
            console.log('Error occurred in generateContent.');
            console.log('Error: ' + error);
            console.trace();
            menuItem = null;
        }

        return menuItem;
    }

    render() {
        let items = this.props.submenu.map(this.generateItem);

        return (
            <NavDropdown eventKey={this.props.eventKey} href={this.props.url} title={this.props.text}>
                {items}
            </NavDropdown>
        );
    }
}

export default Dropdown;
