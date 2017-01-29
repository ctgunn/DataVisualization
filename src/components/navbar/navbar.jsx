import React, {Component} from 'react';
import menu from './menu.jsx';
import navbarSearch from './navbarSearch.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../css/main.css';
import items from '../../json/menu.json';

class navbar extends Component {
    render() {
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
                    <menu items={items}/>

                    <navbarSearch />
                </div>
            </nav>
        );
    }
}

export default navbar;
