import React from "react";
import { Form, Radio, Button } from "semantic-ui-react";
import PropType from "prop-types";
import "../css/LoginPage.css";

const formFields = [
  { label: "Trial", planValue: 0 },
  { label: "Basic", planValue: 10 },
  { label: "Basic +", planValue: 20 },
  { label: "Premium", planValue: 30 },
  { label: "Premium HD", planValue: 40 }
];

class PlanChooser extends React.Component {
  populateRadios = objArr => {
    const retArr = [];
    objArr.forEach(field => {
      const { label, planValue } = field;
      retArr.push(
        <Form.Field key={label}>
          <Radio
            label={label}
            name="radioGroup"
            value={planValue}
            checked={this.props.planValue === planValue}
            onClick={() => this.props.handlePlanValueChange(planValue)}
          />
        </Form.Field>
      );
    });
    return retArr;
  };

  render() {
    return (
      <div className="PlanChooserContainer">
        <Form>{this.populateRadios(formFields)}</Form>
        <Button.Group color="olive" fluid style={{ marginTop: 15 }}>
          <Button onClick={this.props.handleOnClickPrevButton}>PREV</Button>
          <Button onClick={this.props.handleOnClickNextButton}>NEXT</Button>
        </Button.Group>
      </div>
    );
  }
}

PlanChooser.propTypes = {
  handlePlanValueChange: PropType.func.isRequired,
  planValue: PropType.number.isRequired,
  handleOnClickNextButton: PropType.func.isRequired,
  handleOnClickPrevButton: PropType.func.isRequired
};

PlanChooser.defaultProps = {
  planValue: 0
};

export default PlanChooser;
