import React from 'react';
import {render} from 'react-dom';
import Navigation from './components/navbar/navigation.jsx';

class App extends React.Component {
    render () {
        return <Navigation />;
    }
}

render(<App/>, document.getElementById('brewski'));