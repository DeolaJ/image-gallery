import cloneDeep from 'lodash/cloneDeep';
import {
  FETCH_API_START,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
  SEARCH_API_START,
  SEARCH_API_SUCCESS,
  SEARCH_API_FAILURE,
  RESET_SEARCH,
} from '../actions/types';

export const defaultState = {
  defaultImages: [],
  imagesList: [],
  isSearching: false,
  isFetching: true,
  searchResponse: false,
  pages: 1,
  currentPage: 1,
  searchParam: '',
};

export default function galleryReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_API_START:
    case FETCH_API_SUCCESS:
    case FETCH_API_FAILURE:
    case SEARCH_API_START:
    case SEARCH_API_FAILURE:
    case RESET_SEARCH: {
      return {
        ...state,
        ...payload,
      };
    }

    case SEARCH_API_SUCCESS: {
      const {
        imagesList, currentPage, pages, searchResponse,
      } = payload;
      const oldImageList = cloneDeep(state.imagesList);
      const newImagesList = [...oldImageList, ...imagesList];

      return {
        ...state,
        imagesList: newImagesList,
        currentPage,
        pages,
        searchResponse,
      };
    }

    default: {
      return state;
    }
  }
}
