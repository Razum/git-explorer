import React from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';
import style from './repositories.scss';

const Repositories = ({
  items, isFetching, loadMore, hasMore,
}) => {
  if (!items.length) {
    return null;
  }
  return (
    <div>
      <h4>Repositories:</h4>
      <div className={style.repositories}>
        {items.map(item => <Repository {...item} key={item.id} />)}
        {isFetching && <div className="center">Loading...</div>}
        {hasMore && !isFetching && <button className={style['load-more']} onClick={loadMore}>Load More</button>}
      </div>
    </div>
  );
};

Repositories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  isFetching: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Repositories;
