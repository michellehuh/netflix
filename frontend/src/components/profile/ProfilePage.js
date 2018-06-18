import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Dimmer, Loader, Card, Divider, Button, Icon, Segment, Accordion } from 'semantic-ui-react';
import { getProfiles, setProfile } from "../../actions/profile";
import './Profile.css';
import ProfileForm from "./ProfileForm";
import ProfileCard from "./ProfileCard";
import { IMGLIST } from "../../types";

class ProfilePage extends React.Component {

    constructor() {
        super();
        this.handleProfileSelect = this.handleProfileSelect.bind(this);
        this.loadProfiles = this.loadProfiles.bind(this);
        this.handleProfileChange = this.handleProfileChange.bind(this);
        this.createProfile = this.createProfile.bind(this);
    }

    state = {
        activeIndex: 1,
        isProfileEditMode: false,
        profiles: [],
        isLoading: false
    };

    componentWillMount = () => {
        const {isLoggedIn, user, getProfiles, history} = this.props;
        if (!isLoggedIn) {
            history.push("/");
            return;
        }
        getProfiles(user);
    };

    loadProfiles = () => this.props.getProfiles(this.props.user)
        .then(()=>this.setState({isLoading: false}));

    handleAccordionClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;
        this.setState({ activeIndex: newIndex });
        if (newIndex) this.setState({isProfileEditMode: false});
    };

    handleProfileChange = () => {
        this.setState({isLoading: true});
        this.loadProfiles();
    };

    handleManageProfiles = () => {
        this.props.setProfile(null);
        this.setState({isLoading: true});
        this.setState({isProfileEditMode: !this.state.isProfileEditMode});
        this.loadProfiles();
    };

    handleProfileSelect = data => {
        this.props.setProfile(data);
        this.props.history.push("/dashboard");
    };

    createProfiles = profiles => {
        return (<Card.Group itemsPerRow={6}>
            {profiles.map(this.createProfile)}
        </Card.Group>);
    };

    createProfile = profile => {
        const { isProfileEditMode } = this.state;
        const imgSrc = "https://react.semantic-ui.com/assets/images/avatar/large/"
            + (IMGLIST[profile.id%IMGLIST.length])
            + ".jpg";
        return (
            <ProfileCard image = {imgSrc}
                         profile = {profile}
                         isProfileEditMode = {isProfileEditMode}
                         onDelete = {this.handleProfileChange}
                         onClick = {this.handleProfileSelect}
            />)
    };

    render() {
        const { activeIndex, isProfileEditMode, isLoading } = this.state;
        const { profiles, user } = this.props;
        return (
            <div className="ProfilePage">
                {isLoading && (<Dimmer active> <Loader /> </Dimmer>)}
                <Divider horizontal inverted>Profiles</Divider>
                {(profiles && profiles.length)?
                    this.createProfiles(profiles)
                    : (
                    <div>
                        <Segment color={'red'}
                                 textAlign='center'
                                 inverted tertiary >
                            <Icon name='warning' /> You have no profile!
                        </Segment>
                    </div>)}
                {profiles && profiles.length &&
                    (<div className='ManageProfiles'>
                        <Button basic color='red'
                                onClick={this.handleManageProfiles}>
                        {(isProfileEditMode? 'Done' : 'Manage Profiles')}
                        </Button>
                    </div>)}
                <Accordion inverted>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleAccordionClick}>
                        <Icon name='dropdown' /> Create Profile
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <Divider horizontal section inverted> Create Profile </Divider>
                        <ProfileForm adminId={user} onCreate={this.handleProfileChange}/>
                    </Accordion.Content>
                </Accordion>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    profiles: state.auth.profiles,
    profile: state.profile.profile
});

ProfilePage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    getProfiles: PropTypes.func.isRequired,
    setProfile: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    { getProfiles, setProfile }
)(ProfilePage);