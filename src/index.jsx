import React from 'react';
import {render} from 'react-dom';
import Navbar from './components/navbar/navbar.jsx';

class App extends React.Component {
    render () {
        return <Navbar />;
    }
}

render(<App/>, document.getElementById('brewski'));