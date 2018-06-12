import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

class LoginForm extends React.Component {
  state = {
    loginData: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChangeText = e =>
    this.setState({
      loginData: { ...this.state.loginData, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const { loginData } = this.state;
    const errors = this.validate(loginData);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(loginData);
    }
  };

  validate = loginData => {
    const errors = {};
    if (!Validator.isEmail(loginData.email)) errors.email = "Invalid email";
    if (!loginData.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { loginData, errors } = this.state;
    return (
      <div>
        {this.props.authError && (
          <Message error header={this.props.authError} />
        )}
        <Form onSubmit={this.onSubmit}>
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={loginData.email}
              onChange={this.onChangeText}
            />
            {errors.email && <InlineError text={errors.email} />}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={this.onChangeText}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Button color="olive" fluid>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError
});

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
  authError: PropTypes.string
};

LoginForm.defaultProps = {
  authError: ""
};

export default connect(
  mapStateToProps,
  null
)(LoginForm);
