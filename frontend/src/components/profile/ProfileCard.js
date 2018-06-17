import React from 'react';
import {Card, Image, Icon, Button} from 'semantic-ui-react';

class ProfileCard extends React.Component {

    render() {
        return (
            <Card>
                <Image src={ 'https://react.semantic-ui.com/assets/images/avatar/large/' + imglist[profile.id%imglist.length] + '.jpg'}>
                    <Card.Content>
                        <Card.Header> {profile.name} </Card.Header>
                        <Button icon className={"edit-button"}>
                            <Icon name='pencil alternate' />
                        </Button>
                    </Card.Content>
            </Card>
        )
    }
};

