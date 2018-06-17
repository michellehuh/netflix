import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Divider } from "semantic-ui-react";
import LoginForm from "./forms/LoginForm";
import CustomHeader from "./messages/CustomHeader";
import { login } from "../../actions/auth";
import "../css/LoginPage.css";
import SignUpStepper from "./forms/SignUpStepper";

class LoginPage extends React.Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }
  submit = data => {
    this.props.login(data).then(() => {
      if (this.props.isLoggedIn) {
        this.props.history.push("/profile");
      }
    });
  };
  render() {
    return (
      <div className="LoginPageContainer">
        <div className="LoginFormContainer">
          <CustomHeader
            iconName="film"
            headerText="Netflix"
            subHeaderText="CPSC 304 Group Project"
          />
          <LoginForm submit={this.submit} />
        </div>
        <Divider horizontal section>
          Need an account?
        </Divider>
        <SignUpStepper history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
  authError: state.auth.authError
});

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
