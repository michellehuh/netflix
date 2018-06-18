import React from "react";
import PropTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";
import ProfileForm from "./ProfileForm";

const ProfileCard = props => {
  const { isProfileEditMode, onDelete, profile, image } = props;
  return (
    <Card className={"profile-card"}>
      <Image src={image} />
      {isProfileEditMode ? (
        <Card.Content>
          <ProfileForm profile={profile} inverted={false} onDelete={onDelete} />
        </Card.Content>
      ) : (
        <Card.Content>
          <Card.Header>{profile.name}</Card.Header>
          <Card.Description>{profile.age}</Card.Description>
        </Card.Content>
      )}
    </Card>
  );
};

ProfileCard.propTypes = {
  profile: PropTypes.objectOf(PropTypes.object).isRequired,
  image: PropTypes.string.isRequired,
  isProfileEditMode: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ProfileCard;
