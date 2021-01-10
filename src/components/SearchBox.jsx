import React from 'react';
import '../assets/styles/components/SearchBox.scss';

const SearchBox = () => {
    return (
        <div className="search-box">
            <label htmlFor="search">Buscar Tus Videos...</label>
            <input type="text" name="search" id="search-box__input"/>
        </div>
    );
}

export default SearchBox;