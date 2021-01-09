import React, { useRef, useState } from 'react';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import { useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';

import ImageCard from './image-card';
import ImageCardModal from './image-card-modal';
import InfiniteScroll from './infinite-scroll';

import selectors from '../../selectors';

const ImageGrid = () => {
  const gridRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState({
    open: false,
    image: {},
  });

  const isSearching = useSelector(selectors.selectIsSearching);
  const images = useSelector(selectors.selectImages, isEqual);
  const searchResponse = useSelector(selectors.selectSearchResponse);

  const closeModal = () => {
    setIsModalOpen((modal) => ({
      ...modal,
      open: false,
      image: {},
    }));
  };

  const viewImageModal = (imageCardDetail) => {
    setIsModalOpen((modal) => ({
      ...modal,
      open: true,
      image: imageCardDetail,
    }));
  };

  return (
    <article className="image-grid" ref={gridRef}>
      {
        isEmpty(images) && searchResponse && (
          <p className="image-grid__no-image">
            No image found for this search
          </p>
        )
      }
      {
        images.map((image, index) => (
          <React.Fragment key={image.id ? `${image.id}-${index}` : index}>
            <ImageCard
              image={image}
              viewImageModal={viewImageModal}
              isSearching={isSearching}
            />
            {
              index === (images.length - 1) && isSearching && (
                <LazyLoad>
                  <InfiniteScroll key={Math.random() * 10} />
                </LazyLoad>
              )
            }
          </React.Fragment>
        ))
      }
      {
        isModalOpen.open && (
          <ImageCardModal
            closeModal={closeModal}
            image={isModalOpen.image}
          />
        )
      }
    </article>
  );
};

export default ImageGrid;
