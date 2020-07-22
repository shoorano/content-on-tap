import React from 'react';

import './forms.styles.scss';

const Forms = ({ handleChange, label, ...extraProps }) => (
    <div className="group">
        <input className="form-input" onChange={ handleChange } { ...extraProps } />
        {
            label ?
            (<label className={ `${ 
                extraProps.value.length ? 'shrink' : ''
                } form-input-label` }
                >
                    { label }
            </label>)
            : null
        }
    </div>
) 

export default Forms;