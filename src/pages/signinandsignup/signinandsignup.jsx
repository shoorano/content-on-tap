import React from 'react';
import SignIn from '../../components/sign-in/sign-in.jsx';
import SignUp from '../../components/sign-up/sign-up.jsx';

import './signinandsignup.styles.scss';

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;