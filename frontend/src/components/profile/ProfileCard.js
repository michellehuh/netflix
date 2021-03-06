import React from 'react';
import PropTypes from "prop-types";
import {Card, Image} from 'semantic-ui-react';
import ProfileForm from './ProfileForm'

class ProfileCard extends React.Component {

    constructor() {
        super();
        this.handleProfileSelect = this.handleProfileSelect.bind(this);
    }

    handleProfileSelect = () => this.props.onClick(this.props.profile);

    render() {
        const {isProfileEditMode, onDelete, profile, image} = this.props;
        return (
            <Card className={'profile-card'}
                  onClick={!isProfileEditMode? this.handleProfileSelect:null} >
                <Image src={ image } />
                {isProfileEditMode? (
                    <Card.Content>
                        <ProfileForm profile={profile}
                                     inverted={false}
                                     onDelete={onDelete}
                                     adminId = {profile.adminId}/>
                    </Card.Content>
                    ) : (
                    <Card.Content>
                        <Card.Header>{profile.name}</Card.Header>
                        <Card.Description>{profile.age}</Card.Description>
                    </Card.Content>)}
            </Card>
        )
    }
}

ProfileCard.propTypes = {
    profile: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    isProfileEditMode: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ProfileCard;