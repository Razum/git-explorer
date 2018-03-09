import memoize from 'lodash/memoize';
import values from 'lodash/values';
import sortBy from 'lodash/sortBy';

/**
 * get repos arr sorted by update date
 * @param {Object} items
 * @return {Array}
 */
const getSortedRepos = items => sortBy(values(items), i => -(new Date(i.updated_at)).getTime());
export default memoize(getSortedRepos);
