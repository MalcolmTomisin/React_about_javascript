import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./home";
  import Stuff from "./stuff";
  import Extra from "./extra";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>About Javascript</h1>
          <ul className="header">
          <li><NavLink exact to="/">Vanilla</NavLink></li>
            <li><NavLink to="/stuff">Javascript Engines</NavLink></li>
            <li><NavLink to="/extra">Frameworks</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/extra" component={Extra}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;