const selectIsSearching = (state) => state.gallery.isSearching;

const selectSearchResponse = (state) => state.gallery.searchResponse;

const selectSearchParam = (state) => state.gallery.searchParam;

export default {
  selectIsSearching,
  selectSearchResponse,
  selectSearchParam,
};
