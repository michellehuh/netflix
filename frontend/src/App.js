import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import DashboardPage from "./components/pages/DashboardPage";

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={LoginPage} />
    <Route path="/profile" exact component={ProfilePage} />
    <Route path="/dashboard" exact component={DashboardPage} />
  </div>
);

export default App;
