import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaCode, FaDatabase } from 'react-icons/fa';
import Followers from './Followers';

import style from './usercard.scss';

class UserCard extends PureComponent {
  getField(fieldValue, fieldLabel) {
    if (fieldValue) {
      return (
        <div className={style.field}>
          <strong>
            {fieldLabel}
:
            {' '}
          </strong>
          {fieldValue}
        </div>
      );
    }
    return null;
  }

  render() {
    const {
      user: {
        login,
        name,
        email,
        blog,
        company,
        location,
        avatar_url,
        public_repos,
        public_gists,
        followers_list,
        followers,
      }
    } = this.props;
    const photo = { backgroundImage: `url(${avatar_url})` };

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
            {this.getField(location, 'Location')}
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
  }).isRequired
};

export default UserCard;
