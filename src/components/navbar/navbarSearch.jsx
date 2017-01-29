import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../css/main.css';

class navbarSearch extends Component {
    render() {
        return (
            <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />

                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Search
                </button>
            </form>
        );
    }
}

export default navbarSearch;