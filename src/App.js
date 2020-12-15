import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from './firebase.config';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Home/Home';


export const LocationContext = createContext();
function App() {
 const [location, setLocation] = useState('Sreemongol')
  return (
    <LocationContext.Provider value={[location, setLocation]}>
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
        {/* <Route path="/locationDetail">
          <LocationDetail />
        </Route> */}
      </Switch>
  </Router>
  </LocationContext.Provider>
  );
}

export default App;
