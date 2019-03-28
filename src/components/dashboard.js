import React from 'react';
import './dashboard.css';

import SearchArtists from './searchartist';
import FollowedArtists from './followedartists';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <SearchArtists />
                <FollowedArtists />
            </div>
        );
    }
}
