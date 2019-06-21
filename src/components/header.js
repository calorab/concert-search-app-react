import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

export class Header extends React.Component {

    render() {
        return (
            <div className="header-bar">
                <header className="App-header">
                      <h1><Link to="/">ConcertMonster</Link></h1>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);