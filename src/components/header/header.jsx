import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';

let currentUser = false;

//This will work once in redux data flow.
const auth = {
    signOut: () => {
        currentUser = !currentUser;
    }
}

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <Link className="logo" to='/'>
                <img src="https://img.icons8.com/doodle/48/000000/water-tap-.png"/>
            </Link>
        </div>
        <div className="options">
            <Link className="option" to="/content">
                CONTENT
            </Link>
            { currentUser ? 
                <div className="option" onClick={ () => auth.signOut() }> SIGN OUT </div>
                :
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
            }
        </div>
    </div>
)

export default Header;