import React from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Form, Button, Loader } from 'semantic-ui-react'
import { updateProfile, createProfile, deleteProfile } from "../../actions/profile";

class ProfileForm extends React.Component {

    constructor(props) {
        super();
        const { profile } = props;
        this.state = profile?Object.assign({}, profile) : { name: "", age: null };
        this.state.isLoading = false;

        this.handleCreate = this.handleCreate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentWillReceiveProps = nextProps => {
        const { profile } = nextProps;
        this.setState(Object.assign({}, profile));
    };

    onChangeText = e => this.setState({[e.target.name]: e.target.value });

    handleCreate = () => {
        let value = Object.assign({}, this.state);
        value.adminId = this.props.adminId;
        this.props.createProfile(value)
            .then(this.props.onCreate)
            .then(()=> { this.setState({name: "", age: null}) })
            .catch((e)=>alert(e.message));
    };

    handleDelete = () => {
        this.props.deleteProfile(this.state).then(this.props.onDelete);
    };

    handleUpdate = () => {
        this.setState({isLoading: true});
        this.props.updateProfile(this.state)
            .then(()=>this.setState({isLoading: false}))
            .catch((e)=>{
                alert(e.message);
                this.setState({isLoading: false});
            });
    };

    render() {
        const { name, age, id, isLoading, error } = this.state;
        const { inverted, profile } = this.props;

        return (
            <div className={'ProfileForm'}>
                {isLoading && <Loader active/>}
                <Form inverted={inverted} >
                    <Form.Field>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Jane"
                            value={ name || "" }
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
                            value={ age || ""}
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
}

ProfileForm.propTypes = {
    adminId: PropTypes.string.isRequired,
    profile: PropTypes.object,
    inverted: PropTypes.bool,
    onDelete: PropTypes.func,
    onCreate: PropTypes.func,
};

ProfileForm.defaultProps = {
    inverted: true
};

export default connect( null, { updateProfile, createProfile, deleteProfile })(ProfileForm);