import React, {Component} from 'react';
import {render} from 'react-dom';
import Menu from './menu.jsx';
import MenuItemLink from './menuItemLink.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/main.css';

class MenuItem extends Component {
    generateLink() {
        //Right now we don't need our class but what if we wanted to change the text, add an arrow or something?
        //Single responsibility principles tell us that it our "Item" should not handle this.
        return <MenuItemLink url={this.props.url} text={this.props.text} />;
    }

    generateSubmenu() {
        //We generate a simple Navbar (the parent).
        //Spoilers: it takes items as its argument.
        return <Menu items={this.props.submenu} />
    }

    generateContent() {
        let content = [this.generateLink()];

        if(this.props.submenu) {
            //If there is a submenu in our data for this item
            //We add a generated Submenu to our content
            content.push(this.generateSubmenu());
        }

        return content;
    }

    render() {
        let content = this.generateContent();

        return (
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>

            <li className="nav-item">
                {content}
            </li>
        );
    }
}

export default MenuItem;
