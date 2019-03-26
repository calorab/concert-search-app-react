import React from 'react';
//import { connect } from 'react-redux';

//import { artistSearchForm } from '../actions';

import './searchartist.css';

export class SearchArtist extends react.Component {
    render() {
        return(
            <div class="page" id="dashboard">
                <header>
                    <h1>Your Dashboard</h1>
                    <p>Search for an artist + Find upcoming concerts + Like your favorites to stay connected</p>
                </header>
                <form id="searchForm">
                    <fieldset>
                        <label for="artistSearch" >Enter an artist here... </label>
                        <input type="text" id="artistSearch" name="artistSearch">
                    </fieldset>
            <button type="submit" name="submit" className="submitButton" id="searchButton">Search Artist</button>
                </form>

                <div>
            //CALEB - need to add in this component
                    <ShowArtists />
                </div>
            </div>
        );
    }
}
