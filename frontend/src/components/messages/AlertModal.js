import React from "react";
import { Header, Modal } from "semantic-ui-react";
import PropTypes from "prop-types";

const AlertModal = props => (
  <Modal basic size="small">
    <Header icon={props.iconName} content={props.headerText} />
    <Modal.Content>
      <p>{props.bodyText}</p>
    </Modal.Content>
  </Modal>
);

AlertModal.propTypes = {
  iconName: PropTypes.string,
  headerText: PropTypes.string,
  bodyText: PropTypes.string
};

AlertModal.defaultProps = {
  iconName: "",
  headerText: "",
  bodyText: ""
};

export default AlertModal;
