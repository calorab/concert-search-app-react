import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/authorize';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="header-bar">
                <header className="App-header">
                      <h1><Link to="/">ConcertMonster</Link></h1>
                </header>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);