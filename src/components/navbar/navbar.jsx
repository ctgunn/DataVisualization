import React, {Component} from 'react';
import Menu from './menu';
import NavbarSearch from './navbarSearch';
import '../../../node_modules/jquery/dist/jquery.min'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min'
import menu from '../../json/menu.json';
import '../../css/main.css';

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
                    <Menu items={menu.items}/>

                    <NavbarSearch />
                </div>
            </nav>
        );
    }
}

export default navbar;
