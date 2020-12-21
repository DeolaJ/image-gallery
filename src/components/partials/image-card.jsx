import React, { createRef } from 'react';
import PropTypes from 'prop-types';
// import LazyLoad from 'react-lazyload';

const ImageCard = ({
  image, viewImageModal,
}) => {
  const refPlaceholder = createRef();
  const refContentPlaceholder = createRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
    refContentPlaceholder.current.remove();
  };

  const isMobile = () => document.body.clientWidth < 475;

  return (
    <div className="image-card">
      <div className="image-card__placeholder" ref={refPlaceholder} />
      <div className="image-card__placeholder-content" ref={refContentPlaceholder}>
        <div />
        <div />
      </div>
      {
        image.id && (
          <>
            {/* <LazyLoad once offset={200}> */}
            <img
              className="image-card__loaded-image"
              onLoad={() => removePlaceholder()}
              onError={() => removePlaceholder()}
              src={!isMobile() ? image.urls.small : image.urls.thumb}
              alt={image.alt}
            />
            {/* </LazyLoad> */}
            <div
              className="image-card__overlay"
              aria-label="image-overlay"
            />
            <div className="image-card__content">
              <h4>
                {image.user.name}
              </h4>
              <p>
                {image.user.location}
              </p>
            </div>
            <button
              type="button"
              className="image-card__button"
              aria-label="open image details"
              onClick={() => viewImageModal(image)}
            />
          </>
        )
      }
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
  viewImageModal: PropTypes.func.isRequired,
};

export default ImageCard;
