import React, {Component} from 'react';
import {render} from 'react-dom';
import {Navbar, FormGroup, FormControl} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/main.css';

class NavigationSearch extends Component {
    render() {
        return (
            <Navbar.Form pullRight>
                <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                </FormGroup>
                {' '}
                <Button type="submit">Search</Button>
            </Navbar.Form>
        );
    }
}

export default NavigationSearch;