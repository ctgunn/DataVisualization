import React, {Component} from 'react';
import {render} from 'react-dom';
import MenuItem from './menuItem.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../css/main.css';

class Menu extends Component {
    generateItem(item) {
        console.log('item: ' + JSON.stringify(item));

        return <MenuItem text={item.text} url={item.url} submenu={item.submenu} />
    }

    render() {
        let items = this.props.items.map(Menu.generateItem);

        return (
            <ul  className="navbar-nav">
                {items}
            </ul>
        );
    }
}

render(<Menu/>, document.getElementById('navbarMenu'));
