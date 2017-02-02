import React, {Component} from 'react';
import {render} from 'react-dom';
import {Nav} from 'react-bootstrap';
import MenuLink from './menuLink.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/main.css';

class Menu extends Component {
    generateItem(item) {
        return <MenuLink text={item.text} url={item.url} submenu={item.submenu} />
    }

    render() {
        let items = this.props.items.map(this.generateItem);

        return (
            <Nav>
                {items}
            </Nav>
        );
    }
}

export default Menu;
