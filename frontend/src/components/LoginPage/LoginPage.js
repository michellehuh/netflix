import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Divider, Accordion, Icon } from "semantic-ui-react";
import LoginForm from "./forms/LoginForm";
import CustomHeader from "./messages/CustomHeader";
import { login } from "../../actions/auth";
import "../css/LoginPage.css";
import SignUpStepper from "./forms/SignUpStepper";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 1
    };

    this.submit = this.submit.bind(this);
  }
  submit = data => {
    this.props.login(data).then(() => {
      if (this.props.isLoggedIn) {
        this.props.history.push("/profile");
      }
    });
  };

  handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleSignupComplete = () => {
    this.handleAccordionClick(0, 0);
  };

  render() {
    const { activeIndex } = this.state;
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
        <Accordion inverted className="SignupStepperContainer">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleAccordionClick}
          >
            <Icon name="dropdown" />
            Create Account
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Divider horizontal section inverted>
              Need an account?
            </Divider>
            <SignUpStepper
              history={this.props.history}
              onComplete={this.handleSignupComplete}
            />
          </Accordion.Content>
        </Accordion>
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
