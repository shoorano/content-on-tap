import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './homepage.styles.scss';

const Homepage = () => (
    <div className="homepage">
        <div 
            className="site-description"
            style={{
                backgroundImage: `url(${'https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/abunkmupzr3v6gnaxmtk.jpg'})`,
                backgroundSize: 'cover'
            }}
        >
        <Link className="create-button" to="/signin">
            <button>CREATE</button>
        </Link>
        <Link className="support-button" to="/signin">
            <button>SUPPORT</button>
        </Link>
                
        </div>
    </div>
);

export default Homepage;