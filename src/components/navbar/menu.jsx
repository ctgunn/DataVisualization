import React, {Component} from 'react';
import MenuItem from './menuItem';
import '../../../node_modules/jquery/dist/jquery.min'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min'
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
