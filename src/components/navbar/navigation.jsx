import React, {Component} from 'react';
import {render} from 'react-dom';
import {Navbar} from 'react-bootstrap';
import Menu from './menu.jsx';
import NavigationSearch from './navigationSearch.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import '../../css/main.css';

class Navigation extends Component {
    render() {
        const menuItems = {
            "items": [
                {
                    "text": "Home",
                    "eventKey": 1,
                    "url": "#"
                },
                {
                    "text": "Breweries",
                    "eventKey": 2,
                    "url": "#"
                },
                {
                    "text": "Beers",
                    "eventKey": 3,
                    "url": "#",
                    "submenu": [
                        {
                            "text": "By Brewery",
                            "eventKey": 3.1,
                            "url": "#"
                        },
                        {
                            "text": "By State",
                            "eventKey": 3.2,
                            "url": "#"
                        },
                        {
                            "text": "By Alcohol Content",
                            "eventKey": 3.3,
                            "url": "#"
                        }
                    ]
                },
                {
                    "text": "Styles",
                    "eventKey": 4,
                    "url": "#"
                }
            ]
        };

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Brewski</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Menu items={menuItems}/>

                    <NavigationSearch />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
