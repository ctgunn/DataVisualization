import React, {Component} from 'react';
import {render} from 'react-dom';
import Dropdown from './dropdown.jsx';
import {NavItem} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/main.css';

class MenuLink extends Component {
    generateLink() {
        //Right now we don't need our class but what if we wanted to change the text, add an arrow or something?
        //Single responsibility principles tell us that it our "Item" should not handle this.
        return <NavItem eventKey={this.props.eventKey} href={this.props.url}>{this.props.text}</NavItem>;
    }

    generateSubmenu() {
        //We generate a simple Navbar (the parent).
        //Spoilers: it takes items as its argument.
        return <Dropdown info={this.props} />
    }

    generateContent() {
        if(this.props.submenu) {
            //If there is a submenu in our data for this item
            //We add a generated Submenu to our content
            return [this.generateSubmenu()];
        } else {
            return [this.generateLink()];
        }
    }

    render() {
        console.log('this.props: ' + JSON.stringify(this.props));
        let content = this.generateContent();
        console.log('content: ' + JSON.stringify(content));

        return (
            {content}
        );
    }
}

export default MenuLink;
