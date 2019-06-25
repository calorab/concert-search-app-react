
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';


export const ADD_ARTIST = 'ADD_ARTIST';
export const addArtist = artist => ({
    type: ADD_ARTIST,
    artist
});
//-------CALEB - do this + reducer before you can test searchArtist DUH -------
export const ADD_USER_ID = 'ADD_USER_ID';
export const addUserId = userId => ({
    type: ADD_USER_ID,
    userId
});

export const SEARCH_ARTIST_REQUEST = 'SEARCH_ARTIST_REQUEST';
export const searchArtistRequest = () => ({
    type: SEARCH_ARTIST_REQUEST
});

export const SEARCH_ARTIST_SUCCESS = 'SEARCH_ARTIST_SUCCESS';
export const searchArtistSuccess = artists => ({
    type: SEARCH_ARTIST_SUCCESS,
    artists
});

export const SEARCH_ARTIST_ERROR = 'SEARCH_ARTIST_ERROR';
export const searchArtistError = error => ({
    type: SEARCH_ARTIST_ERROR,
    error
});

//-------update this for my app and for POST's
export const fetchSearchArtists = artistName => dispatch => {
    fetch(`${API_BASE_URL}/songkick/` + artistName).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(artists => {
        dispatch(searchArtistSuccess(artists));
    }).catch(error => {dispatch(searchArtistError(error))
    });
};

export const login = (username, password) => dispatch => {
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                // Could not authenticate, so return a SubmissionError for Redux
                // Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};

//CALEB ------- Need to add fetchDashboardData and ACTIONS INITIALIZERS to 'GET' followedArtists and link in dashboard componenDidMount

//function formatArtistInfo (data) {
//    let artist = data.resultsPage.results.artist[0];
//    return {
//        id: artist.id,
//        name: artist.displayName
//    };
//}
//// calling:
//let info = formatArtistInfo(JSON.parse(body));
