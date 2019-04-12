import React from 'react';

//import {addArtist} from '../actions';

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
