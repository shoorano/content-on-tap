import React, { Component } from 'react';

import FormInput from '../forms/forms.jsx';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={ this.state.email }
                        handleChange={ this.handleChange }
                        label="email"
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={ this.state.password }
                        handleChange={ this.handleChange }
                        label="password"
                        required 
                    />
                    <div className="buttons" >
                        <button type="submit" > Sign In </button>
                        <button  >
                            Sign In With Google
                        </button>
                    </div>
                </form>
            </div>
        )
    } 
}

export default SignIn;