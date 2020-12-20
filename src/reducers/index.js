import {
  FETCH_API_START,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
  SEARCH_API_START,
  SEARCH_API_SUCCESS,
  SEARCH_API_FAILURE,
} from '../actions/types';

export const defaultState = {
  defaultImages: [{}],
  imageResults: [{}],
  isSearching: false,
  isFetching: true,
};

export default function galleryReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_API_START:
    case FETCH_API_SUCCESS:
    case FETCH_API_FAILURE:
    case SEARCH_API_START:
    case SEARCH_API_SUCCESS:
    case SEARCH_API_FAILURE: {
      return {
        ...state,
        ...payload,
      };
    }

    default: {
      return state;
    }
  }
}
