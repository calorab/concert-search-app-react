
import React from 'react';

import fetchSearchArtists from './searchartist';
//import FollowedArtists from './followedartists';
import {connect} from 'react-redux';

//CALEB ------- update to dispatch GET followed artists or whatever
export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchSearchArtists());
    }
//CALEB ------- Correct this to add followered artists and search artists to the return
//(CALEB ------- line 24 is displaying the data from above line 13)
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
