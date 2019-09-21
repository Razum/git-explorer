import React from 'react';
import PropTypes from 'prop-types';
import { FaBug, FaEye, FaStar } from 'react-icons/fa';
import { GoGitBranch } from 'react-icons/go';
import style from './repository.scss';

const Repository = ({
  repository: {
    name, html_url, stargazers_count, watchers_count, forks_count, description, open_issues_count,
  },
}) => (
  <div className={style.repository}>
    <a href={html_url} target="_blank" rel="noopener noreferrer" className="title">{name}</a>
    {description && <div className={style.description}>{description}</div>}
    <div className={style.stats}>
      <div className={style.stat} title="Forks">
        <GoGitBranch />
        {' '}
        {forks_count}
      </div>
      <div className={style.stat} title="Stars">
        <FaStar />
        {stargazers_count}
      </div>
      <div className={style.stat} title="Watchers">
        <FaEye />
        {watchers_count}
      </div>
      <div className={style.stat} title="Issues">
        <FaBug />
        {open_issues_count}
      </div>
    </div>
  </div>
);

Repository.propTypes = {
  repository: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    watchers_count: PropTypes.number.isRequired,
    forks_count: PropTypes.number.isRequired,
    open_issues_count: PropTypes.number.isRequired,
  }).isRequired,
};

export default Repository;
