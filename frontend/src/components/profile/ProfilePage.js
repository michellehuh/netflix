import React from "react";
import PropTypes from "prop-types";
import './Profile.css';
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profile";
import { Image, Card, Divider, Button, Icon, Message, Segment } from 'semantic-ui-react';


class ProfilePage extends React.Component {

    state = {
        profiles: []
    }



    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }

    componentWillMount = () => {
        console.log(this.props.user);
        this.props.getProfiles(this.props.user).then(function() {
            this.setState({profiles: this.props.profiles});
            // console.log("profiles", this.props.profiles);
        }.bind(this));
    }
    //
    submit = data => {
        // this.props.selectProfile(data).then(() => {
        //     console.log(data);
        //     if (this.props.isLoggedIn) {
        //         this.props.history.push("/profile");
        //     }
        // });

        console.log(data);
    }

    createProfiles = profiles => {
        const imglist = ['stevie', 'elliot', 'joe', 'veronika', 'jenny', 'christian', 'ade', 'zoe', 'nan' ];
        return (
            <Card.Group itemsPerRow={6}>
                { profiles.map(function (profile) {
                    return (
                        <Card className={'profile-card'}>
                            <Image src={ 'https://react.semantic-ui.com/assets/images/avatar/large/' + imglist[profile.id%imglist.length] + '.jpg'} />
                                <Card.Content>
                                    <Card.Header> {profile.name} </Card.Header>
                                </Card.Content>
                        </Card>
                        )}.bind(this))}
            </Card.Group>)
    }

    render() {
        const { profiles } = this.state;
        return (
            <div className="ProfilePage">
                <Divider horizontal inverted>Profiles</Divider>

                    { (profiles && profiles.length)? this.createProfiles(profiles) : (
                        <div>
                        <Segment warning color={'yellow'} inverted  textAlign='center'>
                            <Icon name='warning' />
                            You have no profile!
                        </Segment>
                        </div>
                    )}

                <Divider horizontal inverted>Create Profile</Divider>
            </div>
        );
    }
};

// export default ProfilePage;

const mapStateToProps = state => ({
    user: state.auth.user,
    profiles: state.auth.profiles,
    profile: state.profile.profile
});

ProfilePage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    getProfiles: PropTypes.func.isRequired, // auth.js
    // updateProfiles: ProtoType.func.
};

export default connect(
    mapStateToProps,
    { getProfiles }
)(ProfilePage);