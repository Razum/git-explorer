import axios from 'axios';
import url from 'url';
import { API_URL } from '../constants/globals';

/**
 * Form an API endpoint URL
 * @param  {String} endpoint The path of the call
 * @return {String} Properly formed URL
 */
export function getEndpoint(endpoint = '') {
  return url.resolve(API_URL, endpoint);
}

/**
 * search users
 * @param {Object} params
 * @param {number} params.q The search terms
 * @param {number} params.per_page items per page
 * @param {number} params.page page number
 * @return {Promise}
 */
export function searchUsers(params) {
  return axios.get(getEndpoint('/search/users'), { params }).then((response) => response.data);
}

/**
 * fetch user info
 * @param {String} userName user name
 * @return {Promise}
 */
export function getUserInfo(userName) {
  return axios.get(getEndpoint(`/users/${userName}`)).then((response) => response.data);
}

/**
 * fetch user repos
 * @param {String} userName user name
 * @return {Promise}
 */
export function getUserRepos(userName, params = {}) {
  return axios.get(getEndpoint(`/users/${userName}/repos`), { params }).then((response) => response.data);
}

/**
 * fetch user followers
 * @param {String} userName user name
 * @return {Promise}
 */
export function getUserFollowers(userName) {
  return axios.get(getEndpoint(`/users/${userName}/followers`)).then((response) => response.data);
}

/**
 * fetch repo languages
 * @param {String} userName user name
 * @param {String} repoName repository name
 * @return {Promise}
 */
export function getRepoLanguages(userName, repoName) {
  return axios.get(getEndpoint(`/users/${userName}/${repoName}/languages`)).then((response) => response.data);
}
