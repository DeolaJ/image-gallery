/* eslint-disable no-undef */
import { toast } from 'react-toastify';
import {
  FETCH_API_START,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
} from './types';

const fetchAPIStart = (payload) => ({
  type: FETCH_API_START,
  payload,
});

const fetchAPISuccess = (payload) => ({
  type: FETCH_API_SUCCESS,
  payload,
});

const fetchAPIFailure = (payload) => ({
  type: FETCH_API_FAILURE,
  payload,
});

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

export const doFetchAPI = () => async (dispatch) => {
  dispatch(fetchAPIStart());

  // FETCH API for Default African Images
  return fetch(
    `${BASE_URL}/search/photos?page=1&query=african&per_page=8`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    },
  )
    .then((response) => response.json())
    .then((response) => {
      dispatch(fetchAPISuccess({
        defaultImages: response.results,
        isFetching: false,
      }));
    })
    .catch((error) => {
      dispatch(fetchAPIFailure({
        errorMessage: error.message,
        isFetching: false,
      }));
      toast.error(`Error: ${error.message}`);
    });
};

export default {
  doFetchAPI,
};
