import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class MyHistory extends Component {
  state = {};

  // // TODO: Fetch Movies from "watchees" relation
  // componentWillMount() {
  //   fetch()
  // }

  render() {
    return (
      <div>
        <h1>My Movies</h1>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Release Year</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
              <Table.HeaderCell>Genre</Table.HeaderCell>
              <Table.HeaderCell>Age Restriction</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
      </div>
    );
  }
}

export default MyHistory;
