import React from 'react';

import './contentpage.styles.scss';


const Contentpage = () => (
    <div className="content">
        <div className="content-containers">
            <div className="content">
                <h1>{ `New Post - ${ new Date().toLocaleString() }` }</h1>
                <iframe 
                    title="myFrame"
                    width="420" 
                    height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>
            <div className="content">
                <h1>{ `New Post - ${ new Date().toLocaleString() }` }</h1>
                <iframe 
                    title="myFrame"
                    width="420" 
                    height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>
            <div className="content">
                <h1>{ `New Post - ${ new Date().toLocaleString() }` }</h1>
                <iframe 
                    title="myFrame"
                    width="420" 
                    height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>
        </div>
    </div>
)

export default Contentpage;