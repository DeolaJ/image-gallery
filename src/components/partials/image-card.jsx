import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';

const ImageCard = ({
  image, viewImageModal, isSearching,
}) => {
  const refPlaceholder = useRef();
  const refContentPlaceholder = useRef();
  const imageCardRef = useRef();

  const revealFallback = () => {
    const imageCardImage = imageCardRef.current.querySelector('.image-card__loaded-image');

    // eslint-disable-next-line eqeqeq
    if (imageCardImage.style.opacity == 0) {
      imageCardImage.style.opacity = 1;
    }
  };

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
    refContentPlaceholder.current.remove();

    // Fallback for React-reveal
    setTimeout(() => revealFallback(), 1000);
  };

  return (
    <div className="image-card" ref={imageCardRef}>
      <div className="image-card__placeholder" ref={refPlaceholder} />
      <div className="image-card__placeholder-content" ref={refContentPlaceholder}>
        <div />
        <div />
      </div>
      {
        image.id && (
          <>
            {
              isSearching ? (
                <LazyLoad once offset={200}>
                  <Fade duration={500}>
                    <img
                      className="image-card__loaded-image"
                      onLoad={removePlaceholder}
                      onError={removePlaceholder}
                      src={image.urls.small}
                      alt={image.alt}
                    />
                  </Fade>
                </LazyLoad>
              ) : (
                <Fade duration={500}>
                  <img
                    className="image-card__loaded-image"
                    onLoad={removePlaceholder}
                    onError={removePlaceholder}
                    src={image.urls.small}
                    alt={image.alt}
                  />
                </Fade>
              )
            }
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
  isSearching: PropTypes.bool.isRequired,
};

export default ImageCard;
