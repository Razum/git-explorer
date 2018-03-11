import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchUserRepos } from '../../actions/users';
import getSortedReposSelector from '../../services/selectors';
import UserCard from '../../components/UserCard';
import Repositories from '../../components/Repositories';

const PER_PAGE = 5;

class User extends Component {
  constructor() {
    super();
    this.page = 1;
  }
  componentDidMount() {
    this.fetchData(this.userName);
  }
  componentWillReceiveProps(nextProps) {
    const nextUserName = nextProps.match.params.userName.toLowerCase();
    if (nextUserName !== this.userName) {
      this.page = 1;
      if (!this.props.users[nextUserName]) {
        this.fetchData(nextUserName);
      }
    }
  }
  get userName() {
    return this.props.match.params.userName.toLowerCase();
  }
  fetchData(userName) {
    this.props.fetchUser(userName)
      .then(() => this.fetchRepos());
  }
  fetchRepos = () => {
    this.props.fetchUserRepos(this.userName, {
      sort: 'updated', direction: 'desc', per_page: PER_PAGE, page: this.page,
    });
    this.page += 1;
  }
  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <div className="container py5">
        <div className="row row--center">
          <div className="col w-100 w-sm-80 w-md-50">
            <UserCard
              isFetching={this.props.isUserFetching}
              {...this.props.user}
            />
          </div>
        </div>
        <div className="row">
          <div className="col w-100 pt5">
            <Repositories
              isFetching={this.props.isReposFetching}
              items={this.props.repos}
              loadMore={this.fetchRepos}
              hasMore={!(this.props.repos.length % PER_PAGE)}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser, fetchUserRepos }, dispatch);
}

function mapStateToProps(state, props) {
  const userName = props.match.params.userName.toLowerCase();
  return {
    user: state.users.items[userName],
    users: state.users.items,
    isUserFetching: state.users.isFetching,
    repos: getSortedReposSelector(state.repos.items[userName]),
    isReposFetching: state.repos.isFetching,
  };
}

User.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  user: PropTypes.shape({}),
  users: PropTypes.shape({}).isRequired,
  isUserFetching: PropTypes.bool.isRequired,
  isReposFetching: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      userName: PropTypes.string,
    }),
  }).isRequired,
};

User.defaultProps = {
  user: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
