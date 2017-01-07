import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
// eslint-disable-next-line
import logo from './images/logo.svg';
import menu from './json/menu.json';
import './css/app.css';

class app extends Component {
    render() {
        console.log(menu.items);

        return (
            <Navbar items={menu.items} />

            // <div className="App">
            //     <div className="App-header">
            //         <img src={logo} className="App-logo" alt="logo" />
            //
            //         <h2>
            //             Welcome to React
            //         </h2>
            //     </div>
            //
            //     <p className="App-intro">
            //         To get started, edit <code>src/App.js</code> and save to reload.
            //     </p>
            // </div>
        );
    }
}

export default app;
