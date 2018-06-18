import React from "react";
import { Table } from "semantic-ui-react";
import PropTypes from "prop-types";

const MovieTable = props => (
  <div>
    <h1 style={{ color: "white", fontSize: "1.7em", marginTop: 15 }}>
      New Releases from your age
    </h1>
    <Table striped inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Release Year</Table.HeaderCell>
          <Table.HeaderCell>Duration</Table.HeaderCell>
          <Table.HeaderCell>Age Restriction</Table.HeaderCell>
          <Table.HeaderCell>Add to my movie</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{props.populateTableBody()}</Table.Body>
    </Table>
  </div>
);

MovieTable.propTypes = {
  populateTableBody: PropTypes.func.isRequired
};

export default MovieTable;
