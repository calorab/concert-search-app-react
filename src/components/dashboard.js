import React from 'react';

export default function Dashboard(props) {
    return (
        <div>
            <SearchArtists />
            //CALEB - add component FollowedArtists and change name
            <FollowedArtists />
        </div>
    )
}
