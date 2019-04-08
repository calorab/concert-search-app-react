import {ADD_ARTIST, ADD_USER_ID} from './actions';

const initialState = {
    followedArtists: [],
};

export const concertSearchReducer = (state=initialState, action) => {
    if (action.type === ADD_ARTIST) {
        return
            <li>
            <h3>Alison Wonderland</h3>
            <button className="submitButton">See Concerts...</button>
            </li>
        });
    }
    return state;
}


//Object.assign({}, state, {
//    followedArtists: [...state.followedArtists, {
//        artistName: action.artistName,
//    }]
//    <li>
//        <h3>Dermot Kennedy</h3>
//<button className="submitButton">See Concerts...</button>
//</li>
//<li>
//    <h3>The Weeknd</h3>
//<button className="submitButton">See Concerts...</button>
//</li>
