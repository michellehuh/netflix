import React from "react";
import { Form, Radio, Button } from "semantic-ui-react";
import PropType from "prop-types";
import "../../css/LoginPage.css";

const formFields = [
  { id: 0, label: "Trial", planValue: 0 },
  { id: 1, label: "Basic", planValue: 10 },
  { id: 2, label: "Basic +", planValue: 20 },
  { id: 3, label: "Premium", planValue: 30 },
  { id: 4, label: "Premium HD", planValue: 40 }
];

class PlanChooser extends React.Component {
  populateRadios = objArr => {
    const retArr = [];
    objArr.forEach(field => {
      const { id, label, planValue } = field;
      retArr.push(
        <Form.Field key={label}>
          <Radio
            label={label}
            name="radioGroup"
            value={planValue}
            checked={this.props.planValue === planValue}
            onClick={() => this.props.handlePlanValueChange(id, planValue)}
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
          <Button onClick={this.props.handlePlanChosen}>ADD PLAN</Button>
        </Button.Group>
      </div>
    );
  }
}

PlanChooser.propTypes = {
  handlePlanValueChange: PropType.func.isRequired,
  planValue: PropType.number.isRequired,
  handlePlanChosen: PropType.func.isRequired
};

PlanChooser.defaultProps = {
  planValue: 0
};

export default PlanChooser;
