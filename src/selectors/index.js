import searchSelectors from './search';
import pagesSelectors from './pages';
import selectImages from './images';

export default {
  ...searchSelectors,
  ...pagesSelectors,
  selectImages,
};
