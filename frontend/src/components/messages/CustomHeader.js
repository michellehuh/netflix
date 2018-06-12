import React from "react";
import { Header, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

const CustomHeader = props => (
  <Header as="h2">
    <Icon name={props.iconName} />
    <Header.Content>
      {props.headerText}
      <Header.Subheader>{props.subHeaderText}</Header.Subheader>
    </Header.Content>
  </Header>
);

CustomHeader.propTypes = {
  iconName: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  subHeaderText: PropTypes.string.isRequired
};

CustomHeader.defaultProps = {
  iconName: "",
  headerText: "",
  subHeaderText: ""
};

export default CustomHeader;
