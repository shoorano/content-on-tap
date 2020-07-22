import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.jsx';
import Homepage from './pages/homepage/homepage.jsx';
import SignInAndSignUpPage from './pages/signinandsignup/signinandsignup.jsx';




const App = () => (
  <div className="App" >
    <Header />
    <Switch>
    <Route exact path='/' component={ Homepage } />
    <Route exact path='/signin' component={ SignInAndSignUpPage } />
    {/* <DisplayContentPage />
    <MyProfilePage />
    <SignInAndSignUpPage />
    <ProfilePage />
    <Footer /> */}
    </Switch>
  </div>
); 

export default App;
