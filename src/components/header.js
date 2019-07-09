import React from 'react';

import {Link} from 'react-router-dom';

export default class Header extends React.Component {

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

