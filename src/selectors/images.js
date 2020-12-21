import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';

import searchSelectors from './search';

const selectImagesList = (state) => (
  (isEmpty(state.gallery.imagesList) && !state.gallery.searchResponse)
    ? Array(6).fill({})
    : state.gallery.imagesList
);

const selectDefaultImages = (state) => (
  isEmpty(state.gallery.defaultImages) ? Array(6).fill({}) : state.gallery.defaultImages
);

const selectImages = createSelector(
  [selectImagesList, searchSelectors.selectIsSearching, selectDefaultImages],
  (imagesList, isSearching, defaultImages) => {
    const images = isSearching ? imagesList : defaultImages;
    return images;
  },
);

export default selectImages;
