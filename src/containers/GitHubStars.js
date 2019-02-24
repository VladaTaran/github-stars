import { connect } from 'react-redux';
import GitHubStars from '../components/GitHubStars';

const mapStateToProps = state => {
    return {
        usersList: state.users.usersList,
        usersDesc: state.users.usersDesc,
        error: state.users.error
    }
};

export default connect(mapStateToProps)(GitHubStars)