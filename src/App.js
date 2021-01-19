import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FinalBooking from './components/FinalBooking/FinalBooking';

firebase.initializeApp(firebaseConfig);

export const LocationContext = createContext();

function App() {
 const [singleLocation, setSingleLocation] = useState("Cox'sBazar")
 
 const [loggedInUser, setLoggedInUser] = useState([]) 
 
  return (
    <LocationContext.Provider value={[singleLocation, setSingleLocation, loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
      <Switch>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route path='/finalBooking'>
          <FinalBooking></FinalBooking>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
  </Router>
  </LocationContext.Provider>
  );
}

export default App;
