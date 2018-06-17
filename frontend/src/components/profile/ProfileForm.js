import React from 'react';
import { Message, Form, Button } from 'semantic-ui-react'

class ProfileForm extends React.Component {

    state = {
        profile: {}
    }

    constructor() {
        super();
    }

    onSubmit = data => {
        console.log(data);
    }

    render() {

        const { profile } = this.state;
        return (
            <div className={'ProfileForm'}>
                <Form onSubmit={this.onSubmit} inverted>
                    <Form.Field >
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Jane"
                            value={profile.name}
                            onChange={this.onChangeText}
                        />
                    </Form.Field>
                    <Form.Field inverted>
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="age"
                            value={profile.age}
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

export default ProfileForm;