import React, {Component} from 'react';
import menu from './menu.jsx';
import menuItemLink from './menuItemLink.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/main.css';

class menuItem extends Component {
    generateLink() {
        //Right now we don't need our class but what if we wanted to change the text, add an arrow or something?
        //Single responsibility principles tell us that it our "Item" should not handle this.
        return <menuItemLink url={this.props.url} text={this.props.text} />;
    }

    generateSubmenu() {
        //We generate a simple Navbar (the parent).
        //Spoilers: it takes items as its argument.
        return <menu items={this.props.submenu} />
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
            <li className="nav-item">
                {content}
            </li>
        );
    }
}

export default menuItem;
