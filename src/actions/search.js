import { toast } from 'react-toastify';
import {
  SEARCH_API_START,
  SEARCH_API_SUCCESS,
  SEARCH_API_FAILURE,
  RESET_SEARCH,
} from './types';

const searchAPIStart = (payload) => ({
  type: SEARCH_API_START,
  payload,
});

const searchAPISuccess = (payload) => ({
  type: SEARCH_API_SUCCESS,
  payload,
});

const searchAPIFailure = (payload) => ({
  type: SEARCH_API_FAILURE,
  payload,
});

const resetSearch = (payload) => ({
  type: RESET_SEARCH,
  payload,
});

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

export const doSearchAPI = (param, page) => (dispatch) => {
  dispatch(searchAPIStart({
    isSearching: true,
    searchResponse: false,
    searchParam: param,
  }));

  // Search API
  // eslint-disable-next-line no-undef
  return fetch(
    `${BASE_URL}/search/photos?page=${page || 1}&query=${param}&per_page=30`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    },
  )
    .then((response) => response.json())
    .then(async (response) => {
      dispatch(searchAPISuccess({
        imagesList: response.results,
        searchResponse: true,
        pages: response.total_pages,
        currentPage: page || 1,
      }));
    })
    .catch((error) => {
      dispatch(searchAPIFailure({
        errorMessage: error.message,
        searchResponse: true,
      }));
      toast.error(`Error: ${error.message}`);
    });
};

export const doResetSearch = () => (dispatch) => {
  dispatch(resetSearch({
    isSearching: false,
    searchResponse: false,
    imagesList: [],
    searchParam: '',
    pages: 1,
    currentPage: 1,
  }));
};

export default {
  doSearchAPI,
  doResetSearch,
};
