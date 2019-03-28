import React from 'react';
import './followedartists.css';

export default class FollowedArtist extends React.Component {
    render() {
        return(
            <div class="page" id="dashboard">
                <h1>Your Artists...</h1>
                <section id="artistsListSection">
                    <li>
                        <h3>Alison Wonderland</h3>
                        <button className="submitButton">See Concerts...</button>
                    </li>
                    <li>
                        <h3>Dermot Kennedy</h3>
                        <button className="submitButton">See Concerts...</button>
                    </li>
                    <li>
                        <h3>The Weeknd</h3>
                        <button className="submitButton">See Concerts...</button>
                    </li>
                </section>
            </div>
        );
    }
}
