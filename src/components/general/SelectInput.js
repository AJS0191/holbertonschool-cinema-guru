import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ label, options, className, value, setValue }) => {
    const handleSelect = (event) => {
    setValue(event.target.value);
    };

    return (
    <div>
        <label>{label}</label>
        <select className={className} value={value} onChange={handleSelect}>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
        </select>
    </div>
    );
};

SelectInput.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
    PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired,
    })
    ).isRequired,
    className: PropTypes.string,
    value: PropTypes.any,
    setValue: PropTypes.func.isRequired,
};

export default SelectInput;
