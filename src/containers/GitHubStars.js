import { connect } from 'react-redux';
import GitHubStars from '../components/GitHubStars';

const mapStateToProps = ({users: { usersList, usersDesc, error }}) => ({
        usersList,
        usersDesc,
        error
    });

export default connect(mapStateToProps)(GitHubStars)