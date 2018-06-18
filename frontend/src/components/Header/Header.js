import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import logo from "../../assets/image/logo.png"

const Header = withRouter(({ history, isLoggedIn }) => (
    <header className="App-header">
        <img src={logo}
             className="App-logo"
             alt="logo"
             onClick={() => {
                 if (isLoggedIn)
                     history.push('/profile');
                 else history.push('/');
             }}/>
    </header>
));


const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

Header.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
};

export default connect(mapStateToProps)(Header);