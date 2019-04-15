import React from 'react';
import {API_BASE_URL} from './config.js';
//import {addArtist} from '../actions';

import SearchArtists from './searchartist';
import FollowedArtists from './followedartists';

export default class Dashboard extends React.Component {
//
//
//-------move this to actions-------
//    componentDidMount() {
//        this.loadArtist();
//    }
//
//
//    loadArtist() {
//        this.setState({
//            error: null
//        });
//        return fetch(`${API_BASE_URL}/api/*`)
//            .then(res => {
//                if (!res.ok) {
//                    return Promise.reject(res.statusText);
//                }
//                return res.json();
//                })
//            .then(() =>
//                    this.setState({
//                    error: null
//            })
//                 )
//            .catch(err =>
//                   this.setState({
//                        error: 'Could not load board'
//                    })
//            );
//    }



    render() {
        return (
            <div>
                <SearchArtists />
                <FollowedArtists />
            </div>
        );
    }
}
