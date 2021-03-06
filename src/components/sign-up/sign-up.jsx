import React, { Component } from 'react';

import FormInput from '../../components/forms/forms.jsx';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title"> I do not have an account.</h2>
                <span>Sign up with your email and password.</span>
                <form className="sign-up-form" onSubmit={ this.handleSubmit }>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={ displayName }
                        onChange={ this.handleChange }
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        type="email"
                        name="email"
                        value={ email }
                        onChange={ this.handleChange }
                        label="Email"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={ password }
                        onChange={ this.handleChange }
                        label="Password"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={ confirmPassword }
                        onChange={ this.handleChange }
                        label="Confirm Password"
                        required
                    />
                    <button type='submit'> SIGN UP </button>
                </form>
            </div>
        )
    }
}

export default SignUp;