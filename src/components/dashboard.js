
import React from 'react';
import Redirect from 'react-router-dom';
import fetchSearchArtists from './searchartist';
//import FollowedArtists from './followedartists';
import {connect} from 'react-redux';

//CALEB ------- update to dispatch GET followed artists or whatever
export class Dashboard extends React.Component {
    // If we are logged in redirect straight to the user's dashboard
    if (!loggedIn) {
        return <Redirect to="/login" />;
    }
    console.log(store.getState());

    //CALEB - wrong function - need to write GET for saved artists
    componentDidMount() {
        this.props.dispatch(fetchSearchArtists());
    }
    //CALEB ------- Correct this to add followered artists and search artists to the return
    //(CALEB ------- line 23 needs to display the data from above line 13)
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
            </div>
        );
    }
}

// CALEB --- This needs to be removed or updated - no auth, no name, no protected data
const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default connect(mapStateToProps)(Dashboard);


// export default class Dashboard extends React.Component {

//     render() {
//         return (
//             <div>
//                 <SearchArtists />
//                 <FollowedArtists />
//             </div>
//         );
//     }
// }
