import React, {Component} from 'react';
import MenuItem from './menuItem';
import 'jquery'
import 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../css/main.css';

class menu extends Component {
    static generateItem(item) {
        return <MenuItem text={item.text} url={item.url} submenu={item.submenu} />
    }

    render() {
        let items = this.props.items.map(menu.generateItem);

        return (
            <ul  className="navbar-nav">
                {items}
            </ul>
        );
    }
}

export default menu;
