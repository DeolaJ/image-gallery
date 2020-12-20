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

export const doFetchAPI = (param) => (dispatch) => {
  dispatch(fetchAPIStart({
    isFetching: true,
  }));
  // FETCH API for Defaults
};

export default {
  doFetchAPI,
};
