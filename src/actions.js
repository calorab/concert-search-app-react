import {API_BASE_URL} from './components/config';


export const ADD_ARTIST = 'ADD_ARTIST';
export const addArtist = artist => ({
    type: ADD_ARTIST,
    artist
});

export const ADD_USER_ID = 'ADD_USER_ID';
export const addUserId = userId => ({
    type: ADD_USER_ID,
    userId
});

//-------update this for my app and for POST's
export const fetchSearchArtists = () => dispatch => {
    fetch(`${API_BASE_URL}/board`, {method: POST, body: JSON.stringify(), }).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(board => {
        dispatch(fetchBoardSuccess(board));
    });
};



