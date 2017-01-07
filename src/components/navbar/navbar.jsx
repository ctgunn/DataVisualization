import React, {Component} from 'react';
import NavbarItem from './navbarItem';
import '../../css/main.css';

class navbar extends Component {
    static generateItem(item) {
        return <NavbarItem text={item.text} url={item.url} submenu={item.submenu} />
    }

    render() {
        console.log(this.props.items);
        let items = this.props.items.map(navbar.generateItem);

        return (
            <ul className="menu">
                {items}
            </ul>
        );
    }
}

export default navbar;
