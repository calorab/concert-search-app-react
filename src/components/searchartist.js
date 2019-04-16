import React from 'react';
//import { connect } from 'react-redux';

//import { artistSearchForm } from '../actions';


export default class SearchArtist extends React.Component {
    render() {
        //include input parameter with the dispatch object
        return(
            <div className="page" id="dashboard">
                <header>
                    <h1>Your Dashboard</h1>
                    <p>Search for an artist + Find upcoming concerts + Like your favorites to stay connected</p>
                </header>
                <form className="form" id="searchForm">
                    <fieldset>
                        <label for="artistSearch" >Enter an artist here... </label>
                        <input type="text" id="artistSearch" name="artistSearch" />
                    </fieldset>
            <button type="submit" name="submit" className="submitButton" id="searchButton">Search Artist</button>
                </form>
                <div id="searchResults">
                </div>
            </div>
        );
    }
}
