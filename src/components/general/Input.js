import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
const handleInput = (event) => {
    setValue(event.target.value);
};

return (
    <div>
        <label>{label}</label>
        <div className="input-container">
            {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
            <input
            type={type}
            className={className}
            value={value}
            onChange={handleInput}
            {...inputAttributes}
            />
        </div>
    </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.any,
    setValue: PropTypes.func.isRequired,
    icon: PropTypes.object,
    inputAttributes: PropTypes.object,
};

export default Input;
