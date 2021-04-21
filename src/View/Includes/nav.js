import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {

    render() {
        return (
                <nav aria-label="breadcrumb" class="main-breadcrumb">
                    <ol className="breadcrumb">
                        <Link to="/" class="breadcrumb-item">Home</Link>
                        <Link to="/user-list" class="breadcrumb-item">User List</Link>
                    </ol>
                </nav>
        );
    }
}

export default Nav;
