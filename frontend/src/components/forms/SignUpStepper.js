import React from "react";
import { Step, Segment, Icon } from "semantic-ui-react";
import SignUpForm from "./SignUpForm";
import PlanChooser from "./PlanChooser";
import PaymentInfoForm from "./PaymentInfoForm";

class SignUpStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curStep: 1,
      planValue: 0,
      signUpData: {
        email: "",
        password: ""
      },
      paymentInfo: {
        cardName: "",
        cardNumber: "",
        expYear: "",
        expMonth: "",
        billingAddress: "",
        city: "",
        province: "",
        country: ""
      }
    };

    this.handlePlanValueChange = this.handlePlanValueChange.bind(this);
    this.handleOnClickNextButton = this.handleOnClickNextButton.bind(this);
    this.handleOnClickPrevButton = this.handleOnClickPrevButton.bind(this);
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

  handlePlanValueChange = val => {
    this.setState({
      planValue: val
    });
  };

  handleOnClickNextButton = () => {
    this.setState(prevState => ({ curStep: prevState.curStep + 1 }));
  };

  handleOnClickPrevButton = () => {
    this.setState(prevState => ({ curStep: prevState.curStep - 1 }));
  };

  render() {
    console.log(this.state);
    const { curStep, signUpData } = this.state;
    return (
      <div>
        <Step.Group attached="top">
          <Step active={curStep === 1}>
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

        <Segment padded="very" attached>
          {curStep === 1 && (
            <SignUpForm
              signUpData={signUpData}
              onChangeSignUpText={this.onChangeSignUpText}
              handleOnClickNextButton={this.handleOnClickNextButton}
            />
          )}
          {curStep === 2 && (
            <PlanChooser
              planValue={this.state.planValue}
              handlePlanValueChange={this.handlePlanValueChange}
              handleOnClickNextButton={this.handleOnClickNextButton}
              handleOnClickPrevButton={this.handleOnClickPrevButton}
            />
          )}
          {curStep === 3 && (
            <PaymentInfoForm
              paymentInfo={this.state.paymentInfo}
              onChangePaymentInfoText={this.onChangePaymentInfoText}
              handleOnClickPrevButton={this.handleOnClickPrevButton}
            />
          )}
        </Segment>
      </div>
    );
  }
}

export default SignUpStepper;
