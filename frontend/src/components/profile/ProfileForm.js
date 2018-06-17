import React from 'react';
import PropTypes from 'prop-types'
import { Message, Form, Button } from 'semantic-ui-react'

class ProfileForm extends React.Component {

    state = {
        name: "",
        age: null
    }

    constructor(prop) {
        super();
        this.state = prop.profile || {
            name: "",
            age: null
        };
    }

    onSubmit = data => {
        console.log(data);
    }

    onChangeText = e =>
        this.setState({[e.target.name]: e.target.value });

    render() {

        const { name, age } = this.state;
        const { inverted } = this.props;

        return (
            <div className={'ProfileForm'}>
                <Form onSubmit={this.onSubmit} inverted={inverted}>
                    <Form.Field >
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Jane"
                            value={ name || ""}
                            onChange={this.onChangeText}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="age"
                            value={age || null}
                            onChange={this.onChangeText}
                        />
                    </Form.Field>
                    <Button color="red" fluid>
                        Save
                    </Button>
                </Form>
            </div>
        )
    }
};

ProfileForm.propTypes = {
    profile: PropTypes.object,
    inverted: PropTypes.bool
};

ProfileForm.defaultProps = {
    inverted: true
};

export default ProfileForm;