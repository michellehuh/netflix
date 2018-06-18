import "./components/css/App.css";
import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/profile/ProfilePage";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import Header from "./components/Header/Header"


const App = () => (
  <div className="ui container">
     <Header/>
    <Route path="/" exact component={LoginPage} />
    <Route path="/profile" exact component={ProfilePage} />
    <Route path="/dashboard" exact component={DashboardPage} />
  </div>
);

export default App;
