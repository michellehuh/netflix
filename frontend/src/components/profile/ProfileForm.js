import React from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Message, Form, Button } from 'semantic-ui-react'
import { updateProfile, createProfile, deleteProfile } from "../../actions/profile";

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

        console.log(prop.profile);

        this.handleCreate = this.handleCreate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    onSubmit = data => {
        console.log(data);
    }

    onChangeText = e =>
        this.setState({[e.target.name]: e.target.value });

    handleCreate = () => {
        console.log('handleDelete called')
    }
    handleDelete = () => {
        console.log('handleDelete called')
        this.props.onDelete();
    }
    handleUpdate = () => {
        console.log('handleUpdate called', updateProfile)
        this.props.updateProfile(this.state);
    }

    render() {

        const { name, age, id } = this.state;
        const { inverted } = this.props;

        return (
            <div className={'ProfileForm'}>
                <Form inverted={inverted}>
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
                            value={age || ""}
                            onChange={this.onChangeText}
                        />
                    </Form.Field>

                    { (id || id === 0)?
                        (<Button.Group>
                                <Button color="green" icon='save' onClick={this.handleUpdate}/>
                                <Button color="red" icon='delete' onClick={this.handleDelete}/>
                            </Button.Group>
                        ) : (
                        <Button color="red" fluid onClick={this.handleCreate}>
                            Create
                        </Button>
                        )
                    }
                </Form>
            </div>
        )
    }
};

ProfileForm.propTypes = {
    profile: PropTypes.object,
    inverted: PropTypes.bool,
    onDelete: PropTypes.func
};

ProfileForm.defaultProps = {
    inverted: true
};

export default connect(null, {updateProfile})(ProfileForm);