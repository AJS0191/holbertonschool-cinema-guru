import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ title, setTitle }) => {
    const handleInput = (e) => {
        setTitle(e.target.value);
    };

    return (
        <input
        type="text"
        placeholder="Search"
        value={title}
        onChange={handleInput}
        />
    );
};

SearchBar.propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
};

export default SearchBar;
