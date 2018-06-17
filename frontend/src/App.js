import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/profile/ProfilePage";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import logo from "./assets/image/logo.png"

const App = () => (
  <div className="ui container">
      <header className="App-header">
          <img src={logo}
               className="App-logo"
               alt="logo" id="logo"/>
      </header>
    <Route path="/" exact component={LoginPage} />
    <Route path="/profile" exact component={ProfilePage} />
    <Route path="/dashboard" exact component={DashboardPage} />
  </div>
);

export default App;
