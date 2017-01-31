import React, {Component} from 'react';
import {render} from 'react-dom';
import {Navbar} from 'react-bootstrap';
import Menu from './menu.jsx';
import NavbarSearch from './navbarSearch.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-thene.css'
import '../../css/main.css';
import items from '../../json/menu.json';

class Navbar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Brewski</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Menu items={items.items}/>

                    <NavbarSearch />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navbar;
