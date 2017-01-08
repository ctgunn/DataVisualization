import React, {Component} from 'react';
import Menu from './menu';
import MenuItemLink from './menuItemLink';
import '../../../node_modules/jquery/dist/jquery.min'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min'
import '../../css/main.css';

class menuItem extends Component {
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
            <li className="nav-item">
                {content}
            </li>
        );
    }
}

export default menuItem;