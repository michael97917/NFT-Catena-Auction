// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
//import components
import Header from './components/header/header';
import Team from './components/team/team';
import JoinCommunity from './components/join-community/join-community';
import Footer from './components/footer/footer';
import RoadMap from './components/roadmap/roadmap';
import TopItems from './components/top-items/top-items';
import Mint from './components/mint/mint';
import About from './components/about/about';

import Login from './page/login/login';

function App() {
  return (
    <React.Suspense >
      <Router>
        <Switch>
          <Route exact path = "/login">
            <Login/>
          </Route>
          
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
