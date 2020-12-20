/* eslint-disable max-lines-per-function */
/* eslint-disable prefer-template */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from './modal';
import Button from './button';
import Close from '../../assets/images/close.svg';

const ModalWrapper = ({
  closeModal, children,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 500);
  }, []);

  return (
    <Modal>
      <div
        className={open ? 'modal__wrapper open' : 'modal__wrapper'}
      >
        <div className="modal__body">
          <Button
            type="icon"
            text="Close Modal"
            className="modal__button"
            iconLink={Close}
            onClick={closeModal}
          />
          {children}
        </div>
      </div>
    </Modal>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalWrapper;
