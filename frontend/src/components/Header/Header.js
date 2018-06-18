import React from 'react';
import PropTypes from "prop-types";
import { Label, Button } from 'semantic-ui-react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import logo from "../../assets/image/logo.png"
import { IMGLIST } from "../../types";


const Header = withRouter(({ history, isLoggedIn, profile }) => (
    <header className="App-header">
        <img src={logo}
             className="App-logo"
             alt="logo"
             onClick={() => {
                 if (isLoggedIn)
                     history.push('/profile');
                 else history.push('/');
             }}/>
        {(profile && profile.name)? (
            <Label className='ProfileLabel'
                    as='a'
                   image
                   onClick={() => {
                        if (isLoggedIn)
                            history.push('/profile');
                        else history.push('/');
                    }}>
            <img src={ 'https://react.semantic-ui.com/assets/images/avatar/small/' + IMGLIST[profile.id%IMGLIST.length] + '.jpg'} />
            {profile.name}
        </Label>) :
            (isLoggedIn && !profile && (<Button className={'stats-button'} basic color={'red'}
                                                onClick={() => {
                                                    history.push('/moviesInCommon');
                                                }}>
                Stats</Button>))
        }

    </header>
));


const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    profile: state.profile.profile
});

Header.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
};

export default connect(mapStateToProps)(Header);