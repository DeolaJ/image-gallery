import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type, text, iconLink, onClick, disabled, className,
}) => {
  switch (type) {
    case 'text': return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={className}
      >
        {text}
      </button>
    );

    case 'icon': return (
      <button
        type="button"
        aria-label={text}
        onClick={onClick}
        disabled={disabled}
        className={`${className} icon`}
      >
        <img src={iconLink} alt="button icon" />
      </button>
    );

    default: return null;
  }
};

Button.defaultProps = {
  text: '',
  iconLink: '',
  onClick: () => null,
  disabled: false,
  className: '',
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  iconLink: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
