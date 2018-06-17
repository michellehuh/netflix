import React from 'react';
import PropTypes from "prop-types";
import {Card, Image, Icon, Button, Form} from 'semantic-ui-react';
import ProfileForm from './ProfileForm'

class ProfileCard extends React.Component {

    state = { profile: {} }

    constructor(props) {
        super();
        this.state = props;
    }

    render() {
        const { profile, image } = this.state;
        const {isProfileEditMode } = this.props;
        console.log(isProfileEditMode); // state updated
        return (
            <Card className={'profile-card'}>
                <Image src={ image } />

                {isProfileEditMode?
                    (<Card.Content>
                        <ProfileForm profile={profile} inverted={false}/>
                    </Card.Content>)
                    :
                    (<Card.Content>
                        <Card.Header> {profile.name} </Card.Header>
                    </Card.Content>)

                }
            </Card>
        )
    }
}

ProfileCard.propTypes = {
    profile: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    isProfileEditMode: PropTypes.bool.isRequired
};

export default ProfileCard;