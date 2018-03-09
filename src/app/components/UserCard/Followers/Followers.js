import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './followers.scss';

const Followers = ({ items, total, userName }) => {
  if (!items.length) {
    return null;
  }
  const followers = items.slice(0, 4);
  const diff = total - followers.length;
  return (
    <div>
      <strong>Who follows {userName}?</strong>
      <div className="followers">
        {followers.map(f => <Link key={f.id} className="follower" to={`/users/${f.login}`} style={{ backgroundImage: `url(${f.avatar_url})` }} />)}
        { diff > 0 ? `+ ${diff} more` : '' }
      </div>
    </div>
  );
};

Followers.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  })).isRequired,
  total: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Followers;
