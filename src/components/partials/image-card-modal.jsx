/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-lines-per-function */
import { useRef } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import ModalWrapper from './modal-wrapper';

const ImageCardModal = ({
  closeModal, image,
}) => {
  const refPlaceholder = useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="image-modal">
        <div className="image-modal__placeholder" ref={refPlaceholder} />
        <Fade duration={500}>
          <img
            className="image-modal__loaded-image"
            onLoad={removePlaceholder}
            onError={removePlaceholder}
            src={image.urls.regular}
            alt={image.alt}
          />
        </Fade>
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
