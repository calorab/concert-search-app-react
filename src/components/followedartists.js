import React from 'react';
import './followedartists.css';

export default class FollowedArtist extends React.Component {
    render() {
        return(
            <div className="page" id="dashboard">
                <h1 className="artistHeader">Your Artists...</h1>
                <section id="artistsListSection">
                    //followed artists go here
                </section>
            </div>
        );
    }
}



