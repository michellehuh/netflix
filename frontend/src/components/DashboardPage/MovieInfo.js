import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import TopMoviesLists from "./TopMovieLists";
import MovieTable from "./MovieTable";
import * as api from "../../api";

class MovieInfo extends Component {
  constructor() {
    super();
    this.state = { movieData: [], topMovies: [] };

    this.populateTableBody = this.populateTableBody.bind(this);
  }

  componentWillMount() {
    const mockData = {
      adminId: "11113333",
      id: 1
    };

    api.getProfileAppropriateMovies(mockData).then(res => {
      this.setState({
        movieData: res.data
      });
    });

    api.getProfileFavoriteMovies(mockData).then(res => {
      this.setState({
        topMovies: res.data
      });
    });
  }

  // TODO: user should be able to add a movie to myHistory
  populateTableBody = () => {
    const retArr = [];
    const objArr = this.state.movieData;
    objArr.forEach(data => {
      retArr.push(
        <Table.Row key={data.id}>
          <Table.Cell>{data.title}</Table.Cell>
          <Table.Cell>{data.releaseYear}</Table.Cell>
          <Table.Cell>{data.duration}</Table.Cell>
          <Table.Cell>{data.ageRestriction}</Table.Cell>
        </Table.Row>
      );
    });
    return retArr;
  };

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <TopMoviesLists />
        <MovieTable populateTableBody={this.populateTableBody} />
      </div>
    );
  }
}

export default MovieInfo;
