import React, {Component} from 'react';
import {render} from 'react-dom';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/main.css';

class Dropdown extends Component {
    generateItem(item) {
        let menuItem = <MenuItem eventKey={item.eventKey} url={item.url}>{item.text}</MenuItem>;

        if(item.eventKey === 'divider') {
            menuItem = <MenuItem divider />
        }

        return menuItem;
    }

    render() {
        console.log('submenu: ' + JSON.stringify(this.props.info.submenu));
        let items = this.props.info.submenu.map(this.generateItem);
        console.log('items: ' + JSON.stringify(items));

        return (
            <NavDropdown eventKey={this.props.info.eventKey} url={this.props.info.url} title={this.props.info.text}>
                {items}
            </NavDropdown>
        );
    }
}

export default Dropdown;
