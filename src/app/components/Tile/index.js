import React from 'react';
import PropTypes from 'prop-types';
import style from './tile.scss';

const Tile = ({
  Icon,
  text,
  title,
  iconClass,
}) => (
  <React.Fragment>
    <div className="center blue">
      <Icon className={`${style.icon} ${iconClass}`} />
    </div>
    <h4>{title}</h4>
    <p>
      {text}
    </p>
  </React.Fragment>
);

Tile.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
};

Tile.defaultProps = {
  iconClass: '',
};

export default Tile;
