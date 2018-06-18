import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import * as api from "../../api";

class MyHistory extends Component {
  constructor() {
    super();
    this.state = { myMovies: [], deletedMovies: {} };

    this.populateTableBody = this.populateTableBody.bind(this);
  }

  componentWillMount() {
    const dataToPass = {};
    dataToPass.adminId = this.props.profile.adminId;
    dataToPass.id = this.props.profile.id;
    api.getMyHistoryMovies(dataToPass).then(res => {
      this.setState({
        myMovies: res.data
      });
    });
  }

  handleDeleteMovie = movieId => {
    const dataToPass = {};
    dataToPass.adminId = this.props.profile.adminId;
    dataToPass.id = this.props.profile.id;
    dataToPass.movieId = movieId;
    console.log(dataToPass);
    api.deleteMovie(dataToPass).then(res => {
      console.log(res);
      this.setState(prevState => {
        const newDeletedMovies = prevState.deletedMovies;
        newDeletedMovies[res.data.movieId] = 1;
        console.log(newDeletedMovies);
        return { deleteedMovies: newDeletedMovies };
      });
    });
  };

  populateTableBody = () => {
    const retArr = [];
    const objArr = this.state.myMovies;
    objArr.forEach(data => {
      retArr.push(
        <Table.Row key={data.id}>
          <Table.Cell>{data.title}</Table.Cell>
          <Table.Cell width={2}>{data.releaseYear}</Table.Cell>
          <Table.Cell width={2}>{data.timeIn}</Table.Cell>
          <Table.Cell width={2}>{data.duration}</Table.Cell>
          <Table.Cell width={2}>{data.ageRestriction}</Table.Cell>
          <Table.Cell width={2} textAlign="center">
            {this.state.deletedMovies[data.id] === undefined ? (
              <Button
                circular
                color="red"
                icon="minus"
                onClick={() => this.handleDeleteMovie(data.id)}
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

  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>My Movies</h1>
        <Table striped inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Release Year</Table.HeaderCell>
              <Table.HeaderCell>Time In</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
              <Table.HeaderCell>Age Restriction</Table.HeaderCell>
              <Table.HeaderCell>Delete Movie</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.populateTableBody()}</Table.Body>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  null
)(MyHistory);
