import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const ImageCard = ({
  image, viewImageModal,
}) => {
  const refPlaceholder = useRef();
  const refContentPlaceholder = useRef();
  const imageRef = useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
    refContentPlaceholder.current.remove();
    imageRef.current.src = image.urls.small;
  };

  const imagesrc = () => image.urls.small;

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
            <LazyLoad offset={200}>
              <img
                ref={imageRef}
                className="image-card__loaded-image"
                onLoad={removePlaceholder}
                onError={removePlaceholder}
                src={imagesrc()}
                alt={image.alt}
              />
            </LazyLoad>
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
