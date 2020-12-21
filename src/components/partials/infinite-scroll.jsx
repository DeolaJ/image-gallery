import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loading from '../../assets/images/loading.gif';

import actions from '../../actions';
import selectors from '../../selectors';

const InfiniteScroll = () => {
  const dispatch = useDispatch();

  const pages = useSelector(selectors.selectPages);
  const currentPage = useSelector(selectors.selectCurrentPage);
  const searchParam = useSelector(selectors.selectSearchParam);

  useEffect(() => {
    if (currentPage <= pages) {
      dispatch(actions.doSearchAPI(searchParam, currentPage + 1));
    }
  }, []);

  return (
    <div className="infinite-scroll">
      {
        (currentPage <= pages) && (
          <img src={loading} alt="loading gif" />
        )
      }
    </div>
  );
};

export default InfiniteScroll;
