import React from 'react';
import PropTypes from 'prop-types';
import './location.scss';
import { getStaticMap } from '../../../services/utils';

const Location = ({ location }) => {
  const mapStyle = { backgroundImage: `url(${getStaticMap(location)})` };
  return (
    <div className="location">
      <strong>Location:</strong>
      <div className="map" style={mapStyle} />
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Location;
