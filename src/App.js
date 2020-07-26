import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.jsx';
import Homepage from './pages/homepage/homepage.jsx';
import Contentpage from './pages/content/contentpage.jsx';
import SignInAndSignUpPage from './pages/signinandsignup/signinandsignup.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { setCurrentUser } from './redux/user/user.actions.js';
import { selectCurrentUser } from './redux/user/user.selectors.js';
 


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        } else {
          setCurrentUser(userAuth);
        }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return(
      <div className="App" >
        <Header />
        <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route exact path='/content' component={ Contentpage } />
        <Route 
            exact 
            path='/signin'
            render={() => this.props.currentUser ?
              <Redirect to='/' />
              : 
              <SignInAndSignUpPage />
            } 
        />

        {/* <DisplayContentPage />
        <MyProfilePage />
        <SignInAndSignUpPage />
        <ProfilePage />
        <Footer /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);