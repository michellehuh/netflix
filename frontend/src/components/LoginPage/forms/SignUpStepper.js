/* eslint no-alert: 0, no-underscore-dangle: 0 */
import React from "react";
import { Step, Segment, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import * as api from "../../../api";
import SignUpForm from "./SignUpForm";
import PlanChooser from "./PlanChooser";
import PaymentInfoForm from "./PaymentInfoForm";

class SignUpStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curStep: 1,
      planValue: 0,
      planId: 0,
      adminId: "",
      signUpData: {
        email: "",
        password: ""
      },
      paymentInfo: {
        cardName: "",
        cardNo: "",
        expYear: "",
        expMonth: "",
        billingAddress: "",
        city: "",
        province: "",
        country: ""
      }
    };

    this.handleCreateAccount = this.handleCreateAccount.bind(this);
    this.handlePlanValueChange = this.handlePlanValueChange.bind(this);
    this.handlePaymentInfoSubmitted = this.handlePaymentInfoSubmitted.bind(
      this
    );
    this.onChangeSignUpText = this.onChangeSignUpText.bind(this);
    this.onChangePaymentInfoText = this.onChangePaymentInfoText.bind(this);
  }

  onChangeSignUpText = e =>
    this.setState({
      signUpData: { ...this.state.signUpData, [e.target.name]: e.target.value }
    });

  onChangePaymentInfoText = e => {
    this.setState({
      paymentInfo: {
        ...this.state.paymentInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  handleCreateAccount = () => {
    api
      .createAccount(this.state.signUpData)
      .then(res => {
        this.setState(prevState => ({
          curStep: prevState.curStep + 1,
          adminId: res.data
        }));
      })
      .catch(e => {
        alert(e.message);
      });
  };

  handlePlanChosen = () => {
    const { adminId, planId } = this.state;
    api
      .planChosen({ id: adminId, planId })
      .then(() => {
        this.setState(prevState => ({ curStep: prevState.curStep + 1 }));
      })
      .catch(e => {
        alert(e.message);
      });
  };

  handlePaymentInfoSubmitted = () => {
    const { adminId, paymentInfo } = this.state;
    const paymentInfoData = this._configurePaymentInfoData(
      paymentInfo,
      adminId
    );
    api
      .paymentInfoSubmitted(paymentInfoData)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(e => {
        alert(e.message);
      });
  };

  handlePlanValueChange = (id, val) => {
    this.setState({
      planId: id,
      planValue: val
    });
  };

  _configurePaymentInfoData = (paymentInfo, adminId) => {
    const newPaymentInfo = paymentInfo;
    const { billingAddress, city, province, country } = newPaymentInfo;
    newPaymentInfo.adminId = adminId;
    newPaymentInfo.expYear = parseInt(paymentInfo.expYear, 10);
    newPaymentInfo.expMonth = parseInt(paymentInfo.expMonth, 10);
    newPaymentInfo.billingAddress = `${billingAddress}, ${city}, ${province}, ${country}`;
    delete newPaymentInfo.city;
    delete newPaymentInfo.province;
    delete newPaymentInfo.country;
    return newPaymentInfo;
  };

  render() {
    const { curStep, signUpData } = this.state;
    return (
      <div>
        <Step.Group attached="top" inverted>
          <Step active={curStep === 1} inverted>
            <Icon name="user" />
            <Step.Content>
              <Step.Title>Account</Step.Title>
              <Step.Description>Create your own account</Step.Description>
            </Step.Content>
          </Step>

          <Step active={curStep === 2}>
            <Icon name="play" />
            <Step.Content>
              <Step.Title>Plan</Step.Title>
              <Step.Description>Choose your plan</Step.Description>
            </Step.Content>
          </Step>

          <Step active={curStep === 3}>
            <Icon name="credit card alternative" />
            <Step.Content>
              <Step.Title>Payment Info</Step.Title>
              <Step.Description>Enter billing information</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>

        <Segment padded="very" attached inverted>
          {curStep === 1 && (
            <SignUpForm
              signUpData={signUpData}
              onChangeSignUpText={this.onChangeSignUpText}
              handleCreateAccount={this.handleCreateAccount}
              inverted />
          )}
          {curStep === 2 && (
            <PlanChooser
              planValue={this.state.planValue}
              handlePlanValueChange={this.handlePlanValueChange}
              handlePlanChosen={this.handlePlanChosen}
              inverted />
          )}
          {curStep === 3 && (
            <PaymentInfoForm
              paymentInfo={this.state.paymentInfo}
              onChangePaymentInfoText={this.onChangePaymentInfoText}
              handlePaymentInfoSubmitted={this.handlePaymentInfoSubmitted}
              inverted />
          )}
        </Segment>
      </div>
    );
  }
}

SignUpStepper.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default SignUpStepper;
