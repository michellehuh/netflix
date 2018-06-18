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
        activeIndex: 1,
        isProfileEditMode: false,
        profiles: []
    }

    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }

    loadProfiles = () => this.props.getProfiles(this.props.user)

    componentWillMount = () => this.props.getProfiles(this.props.user)

    submit = data => {
        // TODO: select profile
        console.log(data);
    }

    createProfiles = (profiles) => {
        const imglist = ['stevie', 'elliot', 'joe', 'veronika', 'jenny', 'christian', 'ade', 'zoe', 'nan' ];
        const { isProfileEditMode } = this.state;
        return (
            <Card.Group itemsPerRow={6}>
                { profiles.map(function (profile) {
                    return (
                        <ProfileCard image = { 'https://react.semantic-ui.com/assets/images/avatar/large/' + imglist[profile.id%imglist.length] + '.jpg'}
                                     profile = {profile}
                                     isProfileEditMode = {isProfileEditMode}
                                     onDelete = {this.loadProfiles.bind(this) }
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
        this.loadProfiles();
    }

    render() {
        const { activeIndex, isProfileEditMode } = this.state;
        const { profiles } = this.props;
        return (
            <div className="ProfilePage">
                <Divider horizontal inverted>Profiles</Divider>
                { (profiles && profiles.length)? this.createProfiles(profiles) : (
                    <div>
                        <Segment color={'red'} inverted tertiary textAlign='center'>
                            <Icon name='warning' />
                            You have no profile!
                        </Segment>
                    </div>
                )}
                {profiles && profiles.length &&
                (<div className='ManageProfiles'>
                    <Button basic color='red' onClick={this.handleManageProfiles}>
                    {(isProfileEditMode? 'Done' : 'Manage Profiles')}
                    </Button>
                </div>)}
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