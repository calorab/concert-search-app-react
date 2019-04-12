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
