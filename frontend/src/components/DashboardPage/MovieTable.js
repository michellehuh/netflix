import React from "react";
import { Table } from "semantic-ui-react";
import PropTypes from "prop-types";

const MovieTable = props => (
  <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Release Year</Table.HeaderCell>
        <Table.HeaderCell>Duration</Table.HeaderCell>
        <Table.HeaderCell>Age Restriction</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>{props.populateTableBody()}</Table.Body>
  </Table>
);

MovieTable.propTypes = {
  populateTableBody: PropTypes.func.isRequired
};

export default MovieTable;
