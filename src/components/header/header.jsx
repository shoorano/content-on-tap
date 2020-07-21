import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';

const currentUser = false;
const auth = {
    signOut: () => console.log('signOut')
}

const Header = () => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <img src="https://img.icons8.com/doodle/48/000000/water-tap-.png"/>
        </Link>
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