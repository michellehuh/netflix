import React from "react";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";
import "../css/TopMovieList.css";

const TopMovieList = props => (
  <div>
    <h1 className="topMovieListHeader">Popular from your age</h1>
    <div className="topMovieListContainer">
      <Card.Group>{props.populateTopMovieCards()}</Card.Group>
    </div>
  </div>
);

TopMovieList.propTypes = {
  populateTopMovieCards: PropTypes.func.isRequired
};

export default TopMovieList;
