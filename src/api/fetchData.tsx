import axios from 'axios';
import wrapPromise from '../utils/wrapPromise';

/**
 * Wrap Axios Request with the wrapPromise function
 * @param {string} url Url to fetch
 * @returns {Promise} A wrapped promise
 */
const fetchData = (url: any) => {
  const promise = axios
    .get(url)
    .then(({ data }) => data)
    .catch((err) => {
      console.log(err);
    });

  return wrapPromise(promise);
};

export default fetchData;
