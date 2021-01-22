import React from 'react';
import '../assets/styles/components/SearchBox.scss';

const SearchBox = () => {
    return (
        <div className="search-box">
            <label htmlFor="search" className="search-box__label">Search your videos:</label>
            <input 
                type="text" 
                name="search" 
                id="search-box__input"
                placeholder="Video name..."
            />
        </div>
    );
}

export default SearchBox;