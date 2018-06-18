import React from "react";
import { Route } from "react-router-dom";
import "./components/css/App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/profile/ProfilePage";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import Header from "./components/Header/Header";
import MostRecentMovieOfGenre from "./components/TestPage/MostRecentMovieOfGenre";
import MoviesInCommonPage from "./components/MoviesInCommon/MoviesInCommonPage";


const App = () => (
  <div className="ui container">
      <Header/>
      <Route path="/" exact component={LoginPage} />
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/dashboard" exact component={DashboardPage} />
      <Route path="/MostRecentMovieOfGenre" exact component={MostRecentMovieOfGenre} />
      <Route path="/moviesInCommon" exact component={MoviesInCommonPage} />
  </div>
);

export default App;
