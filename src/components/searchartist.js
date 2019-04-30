import React from 'react';
import { connect } from 'react-redux';

import { fetchSearchArtists } from '../actions';


export class SearchArtist extends React.Component {

    renderResults() {
        if (this.props.loading) {
            return <p>Fetching Artists - hold on a sec...</p>
        }
        if (this.props.error) {
            return <strong>{this.props.error}</strong>
        }

        //CALEB ------- Add in ADD_ARTIST data and onClick for <li> -------

        const artists = this.props.artists.map((artist, index) =>
            <li key={index}>
                {artist}
            </li>
        );

        return (
            <strong>Click on the artist to follow them...<strong>
            <ul>
                {artists}
            </ul>
        );
    }

    artistSearch(event) {
        event.preventDefault();

        if (this.input.value.trim() === '') {
            return <strong>You forgot the artist...</strong>;
        }
        this.props.dispatch(fetchSearchArtists(this.input.value));
    }


    render() {
        //include input parameter with the dispatch object
        return(
            <div className="page" id="dashboard">
                <header>
                    <h1>Your Dashboard</h1>
                    <ol>
                        <li>Search for an artist</li>
                        <li>Follow your favorites to stay connected</li>
                        <li>Find your Followed Artists' upcoming concerts below</li>
                    </ol>
                </header>
            <form className="form" id="searchForm" onSubmit={event => this.artistSearch(event)}>
                    <fieldset>
                        <label for="artistSearch" >Enter an artist here... </label>
                        <input type="text" id="artistSearch" name="artistSearch" ref={input => this.input = input} />
                    </fieldset>
            <button type="submit" name="submit" className="submitButton" id="searchButton">Search Artist</button>
                </form>
                <div id="searchResults">
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artists: this.artists,
    loading: this.loading,
    error: this.error
});

export default connect(mapStateToProps)(SearchArtist);


