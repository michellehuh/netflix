/* eslint react/forbid-prop-types: 0 */
import React from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

class SignUpForm extends React.Component {
  state = {
    errors: {}
  };

  //   onSubmit = () => {
  //     const { signUpData } = this.state;
  //     const errors = this.validate(signUpData);
  //     this.setState({ errors });
  //     if (Object.keys(errors).length === 0) {
  //       this.props.submit(signUpData);
  //     }
  //   };

  validate = signUpData => {
    const errors = {};
    if (!Validator.isEmail(signUpData.email)) errors.email = "Invalid email";
    if (!signUpData.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { errors } = this.state;
    const { signUpData, onChangeSignUpText } = this.props;
    return (
      <div  className="SignupFormContainer">
        <Form inverted>
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="signUpEmail"
              name="email"
              placeholder="example@example.com"
              value={signUpData.email}
              onChange={onChangeSignUpText}
            />
            {errors.email && <InlineError text={errors.email} />}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="signUpPassword"
              name="password"
              placeholder="Password"
              value={signUpData.password}
              onChange={onChangeSignUpText}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Form.Button
            color="red"
            fluid
            onClick={this.props.handleOnClickNextButton}
          >
            NEXT
          </Form.Button>
        </Form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  signUpData: PropTypes.object.isRequired,
  onChangeSignUpText: PropTypes.func.isRequired,
  handleOnClickNextButton: PropTypes.func.isRequired
};

SignUpForm.defaultProps = {
  signUpData: {}
};

export default SignUpForm;
