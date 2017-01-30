import React, {Component} from 'react';
import {render} from 'react-dom';
import Menu from './menu.jsx';
import NavbarSearch from './navbarSearch.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../css/main.css';
import items from '../../json/menu.json';

class Navbar extends Component {
    render() {
        console.log('items: ' + JSON.stringify(items.items));

        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand" href="#">
                    Navbar
                </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div id="navbarMenu">
                        <Menu items={items.items}/>
                    </div>

                    <div id="navbarSearch">
                        <NavbarSearch />
                    </div>
                </div>
            </nav>
        );
    }
}

render(<Navbar/>);
