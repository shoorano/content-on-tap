import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils.js';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <div className="logo-container">
            <Link className="logo" to='/'>
                <img src="https://img.icons8.com/doodle/48/000000/water-tap-.png" alt="tap"/>
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header);