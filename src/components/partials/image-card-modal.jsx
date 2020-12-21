/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-lines-per-function */
import { createRef } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import ModalWrapper from './modal-wrapper';

const ImageCardModal = ({
  closeModal, image,
}) => {
  const refPlaceholder = createRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  const isMobile = () => document.body.clientWidth < 475;

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="image-modal">
        <div className="image-modal__placeholder" ref={refPlaceholder} />
        <LazyLoad once>
          <img
            className="image-modal__loaded-image"
            onLoad={() => removePlaceholder()}
            onError={() => removePlaceholder()}
            src={!isMobile() ? image.urls.regular : image.urls.small}
            alt={image.alt}
          />
        </LazyLoad>
        <div className="image-modal__content">
          <h4>
            {image.user.name}
          </h4>
          <p>
            {image.user.location}
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
};

ImageCardModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ImageCardModal;
