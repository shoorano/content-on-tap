import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.jsx';




const App = () => (
  <div className="App" >
    <Header />
    {/* <HomePage />
    <DisplayContentPage />
    <MyProfilePage />
    <SignInAndSignUpPage />
    <ProfilePage />
    <Footer /> */}
  </div>
); 

export default App;
