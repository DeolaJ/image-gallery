const selectPages = (state) => state.gallery.pages;

const selectCurrentPage = (state) => state.gallery.currentPage;

export default {
  selectPages,
  selectCurrentPage,
};
