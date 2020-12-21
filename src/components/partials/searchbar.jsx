import React, { useState, useRef, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../actions';
import selectors from '../../selectors';

import Button from './button';
import Search from '../../assets/images/search.svg';

const SearchBar = () => {
  const dispatch = useDispatch();

  const isSearching = useSelector(selectors.selectIsSearching);
  const searchResponse = useSelector(selectors.selectSearchResponse);

  const [searchParam, setSearchParam] = useState('');

  const resetSearch = () => {
    dispatch(actions.doResetSearch());
    setSearchParam('');
  };

  const updateSearchValue = useRef(debounce((value) => {
    if (value !== '') {
      dispatch(actions.doSearchAPI(value));
    }
  }, 1000));

  useEffect(() => updateSearchValue.current(searchParam), [searchParam]);

  return (
    <div className="searchbar">
      {
        isSearching ? (
          <p className="searchbar__feedback">
            {
              searchResponse ? (
                <>
                  Search Results for
                  <span>
                    {` "${searchParam}"`}
                  </span>
                  <Button
                    type="text"
                    text="Clear search"
                    className="searchbar__reset-button"
                    onClick={resetSearch}
                  />
                </>
              ) : (
                <>
                  Searching for
                  <span>
                    {` "${searchParam}"`}
                  </span>
                </>
              )
            }
          </p>
        ) : (
          <>
            <div className="searchbar__icon">
              <img src={Search} alt="search bar icon" />
            </div>
            <input
              type="text"
              onChange={(e) => setSearchParam(e.target.value)}
              onBlur={(e) => setSearchParam(e.target.value)}
              value={searchParam}
              placeholder="Search for photo"
              className="searchbar__input"
            />
          </>
        )
      }
    </div>
  );
};

export default SearchBar;
