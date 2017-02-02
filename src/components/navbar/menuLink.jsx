import React, {Component} from 'react';
import {render} from 'react-dom';
import Dropdown from './dropdown.jsx';
import {NavItem} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/main.css';

class MenuLink extends Component {
    generateLink() {
        console.log('this.props.generateLink: ' + JSON.stringify(this.props));
        //Right now we don't need our class but what if we wanted to change the text, add an arrow or something?
        //Single responsibility principles tell us that it our "Item" should not handle this.

        return <NavItem eventKey={this.props.eventKey} href={this.props.url}>{this.props.text}</NavItem>;
    }

    generateSubmenu() {
        console.log('this.props.generateSubmenu: ' + JSON.stringify(this.props));
        //We generate a simple Navbar (the parent).
        //Spoilers: it takes items as its argument.
        return <Dropdown eventKey={this.props.eventKey} text={this.props.text} url={this.props.url} submenu={this.props.submenu} />
    }

    generateContent() {
        let content = [];

        try {
            if (!!this.props.submenu) {
                //If there is a submenu in our data for this item
                //We add a generated Submenu to our content
                content.push(this.generateSubmenu());
            } else {
                content.push(this.generateLink());
            }
        } catch(error) {
            console.log('Error occurred in generateContent.');
            console.log('Error: ' + error);
            console.trace();
            content = null;
        }

        return content;
    }

    render() {
        let content = this.generateContent();
        console.log(content);

        return {content};
    }
}

export default MenuLink;
