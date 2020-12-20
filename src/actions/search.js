import {
  SEARCH_API_START,
  SEARCH_API_SUCCESS,
  SEARCH_API_FAILURE,
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

export const doSearchAPI = (param) => (dispatch) => {
  dispatch(searchAPIStart({
    isSearching: true,
  }));
  // Search API
};

export default {
  doSearchAPI,
};
