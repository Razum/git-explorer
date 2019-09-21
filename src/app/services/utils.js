import omitBy from 'lodash/omitBy';
import isString from 'lodash/isString';

/**
 * exclude props that contains github api urls
 * @param {Object} obj response object
 * @return {Object}
 */
export function excludeApiFields(obj) {
  return omitBy(obj, (val) => isString(val) && val.includes('api.github.com'));
}

export function noop() {}
