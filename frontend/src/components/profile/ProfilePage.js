import './Profile.css';
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profile";
import { Image, Card, Divider, Button, Icon, Message, Segment, Accordion, Form } from 'semantic-ui-react';
import ProfileForm from "./ProfileForm";
import ProfileCard from "./ProfileCard";


class ProfilePage extends React.Component {

    state = {
        profiles: [],
        activeIndex: 1,
        isProfileEditMode: false
    }

    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }

    componentWillMount = () => {
        console.log(this.props.user);
        this.props.getProfiles(this.props.user).then(function() {
            this.setState({profiles: this.props.profiles});
        }.bind(this));
    }

    submit = data => {
        console.log(data);
    }

    createProfiles = (profiles) => {
        const imglist = ['stevie', 'elliot', 'joe', 'veronika', 'jenny', 'christian', 'ade', 'zoe', 'nan' ];
        const {isProfileEditMode } = this.state;
        return (
            <Card.Group itemsPerRow={6}>
                { profiles.map(function (profile) {
                    return (
                        <ProfileCard image = { 'https://react.semantic-ui.com/assets/images/avatar/large/' + imglist[profile.id%imglist.length] + '.jpg'}
                                     profile = {profile}
                                     isProfileEditMode = {isProfileEditMode}
                        />
                    )}.bind(this))}
            </Card.Group>)
    }

    handleAccordionClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })


        if (newIndex) this.setState({isProfileEditMode: false});
    }

    handleManageProfiles = () => {
        this.setState({isProfileEditMode: !this.state.isProfileEditMode});
    }

    render() {
        const { profiles, activeIndex, isProfileEditMode } = this.state;
        return (
            <div className="ProfilePage">
                <Divider horizontal inverted>Profiles</Divider>
                { (profiles && profiles.length)? this.createProfiles(profiles) : (
                    <div>
                        <Segment warning color={'red'} inverted tertiary textAlign='center'>
                            <Icon name='warning' />
                            You have no profile!
                        </Segment>
                    </div>
                )}

                <Accordion inverted>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleAccordionClick}>
                        <Icon name='dropdown' />
                        Create Profile
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <Divider horizontal section inverted>
                            Create Profile
                        </Divider>
                        <ProfileForm/>
                    </Accordion.Content>
                </Accordion>
                {profiles && profiles.length &&
                (<div className='ManageProfiles'>
                    <Button basic color='red' onClick={this.handleManageProfiles}>
                    {(isProfileEditMode? 'Done' : 'Manage Profiles')}
                    </Button>
                </div>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    profiles: state.auth.profiles,
    profile: state.profile.profile
});

ProfilePage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    getProfiles: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    { getProfiles }
)(ProfilePage);