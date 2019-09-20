import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FaDatabase from 'react-icons/lib/fa/database';
import FaCode from 'react-icons/lib/fa/code';
import Location from './Location';
import Followers from './Followers';
import Skeleton from './Skeleton';

import style from './usercard.scss';

class UserCard extends PureComponent {
  get location() {
    if (this.props.user.location) {
      return (
        <div className="row">
          <div className="col w-100">
            <Location location={this.props.user.location} />
          </div>
        </div>
      );
    }
    return null;
  }

  getField(fieldValue, fieldLabel) {
    return fieldValue
      ? (
        <div className={style.field}>
          <strong>
            {fieldLabel}
:
            {' '}
          </strong>
          {fieldValue}
        </div>
      )
      : null;
  }

  render() {
    const {
      user: {
        login,
        name,
        email,
        blog,
        company,
        avatar_url,
        public_repos,
        public_gists,
        followers_list,
        followers,
      },
      isFetching,
    } = this.props;
    const photo = { backgroundImage: `url(${avatar_url})` };
    if (isFetching) {
      return <Skeleton />;
    }
    if (!login) {
      return null;
    }

    return (
      <div className={style.usercard}>
        <div className="row">
          <div className="col w-100 w-sm-50 mb3">
            <div className={style.photo} style={photo} />
          </div>
          <div className="col w-100 w-sm-50">
            {this.getField(name, 'Name')}
            {this.getField(login, 'Login')}
            {email
              ? (
                <div className={style.field}>
                  <strong>Email: </strong>
                  {' '}
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              ) : null}
            {
              blog
                ? (
                  <div className={style.field}>
                    <strong>Website: </strong>
                    <a href={blog}>{blog}</a>
                  </div>
                )
                : null
            }
            {this.getField(company, 'Company')}
            <strong>Stats:</strong>
            <div className={`col ${style.stats}`}>
              <div className={style['stat-item']} title="Repositories">
                <FaDatabase />
                {' '}
                {public_repos}
              </div>
              <div className={style['stat-item']} title="Gists">
                <FaCode />
                {' '}
                {public_gists}
              </div>
            </div>
          </div>
        </div>
        <Followers items={followers_list} total={followers} userName={login} />
        {this.location}

      </div>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.shape({
    followers_list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    })).isRequired,
    followers: PropTypes.number.isRequired,
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    blog: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    public_repos: PropTypes.number,
    public_gists: PropTypes.number,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default UserCard;
