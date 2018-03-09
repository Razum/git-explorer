import omitBy from 'lodash/omitBy';
import isString from 'lodash/isString';

import { GOOGLE_API_KEY } from '../constants/globals';

/**
 * exclude props that contains github api urls
 * @param {Object} obj response object
 * @return {Object}
 */
export function excludeApiFields(obj) {
  return omitBy(obj, val => isString(val) && val.includes('api.github.com'));
}

/**
 * get Goofle Static Map url
 * @param {String} location user location
 * @return {String}
 */
export function getStaticMap(location) {
  const encoded = encodeURI(location);
  return `https://maps.googleapis.com/maps/api/staticmap?center=${encoded}&autoscale=1&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C${encoded}&key=${GOOGLE_API_KEY}`;
}
