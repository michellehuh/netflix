/* eslint react/forbid-prop-types: 0 */
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";

const cardInfo = [
  { key: "cn", label: "Card Name", name: "cardName", placeholder: "Card name" },
  {
    key: "cnmbr",
    label: "Card Number",
    name: "cardNo",
    placeholder: "1234567890123456"
  },
  {
    key: "expyr",
    label: "Expiration Year",
    name: "expYear",
    placeholder: "2021"
  },
  {
    key: "expmth",
    label: "Expiration Month",
    name: "expMonth",
    placeholder: "7"
  }
];

const addressInfo = [
  { key: "cty", label: "City", name: "city", placeholder: "Vancouver" },
  { key: "prvnce", label: "Province", name: "province", placeholder: "BC" },
  { key: "cntry", label: "Country", name: "country", placeholder: "Canada" }
];

class PaymentInfoForm extends Component {
  populateGroupFormInputs = objArr => {
    const retArr = [];
    const { paymentInfo, onChangePaymentInfoText } = this.props;
    objArr.forEach(field => {
      retArr.push(
        <Form.Input
          fluid
          key={field.key}
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          value={paymentInfo[field.name]}
          onChange={onChangePaymentInfoText}
        />
      );
    });
    return retArr;
  };

  render() {
    const { paymentInfo, onChangePaymentInfoText } = this.props;
    return (
      <div className="PaymentFormContainer">
        <Form inverted>
          <Form.Group widths="equal">
            {this.populateGroupFormInputs(cardInfo)}
          </Form.Group>
          <Form.Input
            fluid
            label="Billing Address"
            name="billingAddress"
            placeholder="Billing address"
            value={paymentInfo.billingAddress}
            onChange={onChangePaymentInfoText}
          />
          <Form.Group widths="equal" inverted>
            {this.populateGroupFormInputs(addressInfo)}
          </Form.Group>
        </Form>
        <Button
          color="red"
          fluid
          onClick={this.props.handlePaymentInfoSubmitted}
        >
          ADD PAYMENT INFORMATION
        </Button>
      </div>
    );
  }
}

PaymentInfoForm.propTypes = {
  paymentInfo: PropTypes.object.isRequired,
  onChangePaymentInfoText: PropTypes.func.isRequired,
  handlePaymentInfoSubmitted: PropTypes.func.isRequired
};

PaymentInfoForm.defaultProps = {
  paymentInfo: {}
};

export default PaymentInfoForm;
