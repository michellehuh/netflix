import React, { Component } from "react";
import { Table, Card, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import TopMoviesList from "./TopMovieList";
import MovieTable from "./MovieTable";
import "../css/MovieInfo.css";
import * as api from "../../api";

const mockData = {
  // adminId: "11113333",
  // id: 1
  adminId: "78694201",
  id: 3
};

class MovieInfo extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      topMovies: [],
      myMovies: [],
      addedMovies: {}
    };

    this.populateTableBody = this.populateTableBody.bind(this);
    this.populateTopMovieCards = this.populateTopMovieCards.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  componentWillMount() {
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

  handleAddMovie = movieId => {
    const dataToPass = mockData;
    dataToPass.movieId = movieId;
    console.log(dataToPass);
    api.addMovie(dataToPass).then(res => {
      console.log(res);
      this.setState(prevState => {
        const newAddedMovies = prevState.addedMovies;
        newAddedMovies[res.data.movieId] = 1;
        console.log(newAddedMovies);
        return { addedMovies: newAddedMovies };
      });
    });
  };

  // TODO: user should be able to add a movie to myHistory
  populateTableBody = () => {
    const retArr = [];
    const objArr = this.state.movieData;
    objArr.forEach(data => {
      retArr.push(
        <Table.Row key={data.id}>
          <Table.Cell>{data.title}</Table.Cell>
          <Table.Cell width={2}>{data.releaseYear}</Table.Cell>
          <Table.Cell width={2}>{data.duration}</Table.Cell>
          <Table.Cell width={2}>{data.ageRestriction}</Table.Cell>
          <Table.Cell width={2} textAlign="center">
            {this.state.addedMovies[data.id] === undefined ? (
              <Button
                circular
                color="red"
                icon="plus"
                onClick={() => this.handleAddMovie(data.id)}
              />
            ) : (
              <Button circular color="green" icon="check" />
            )}
          </Table.Cell>
        </Table.Row>
      );
    });
    return retArr;
  };

  populateTopMovieCards = () => {
    const retArr = [];
    const objArr = this.state.topMovies;
    objArr.forEach(data => {
      retArr.push(
        <Card key={data.id}>
          <Image src={data.thumbnail} />
          <Card.Content>
            <Card.Header>{data.title}</Card.Header>
            <Card.Meta>Released in {data.releaseYear}</Card.Meta>
            <Card.Meta>Duration: {data.duration} Minutes</Card.Meta>
          </Card.Content>
        </Card>
      );
    });
    return retArr;
  };

  render() {
    console.log(this.state);
    return (
      <div className="movieInfoContainer">
        <TopMoviesList populateTopMovieCards={this.populateTopMovieCards} />
        <MovieTable populateTableBody={this.populateTableBody} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError
});

export default connect(
  mapStateToProps,
  null
)(MovieInfo);
