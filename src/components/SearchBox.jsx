import React from 'react';
import '../assets/styles/components/SearchBox.scss';

const SearchBox = () => {
    return (
        <div className="search-box">
            <label htmlFor="search" className="search-box__label">Buscar Tus Videos:</label>
            <input 
                type="text" 
                name="search" 
                id="search-box__input"
                placeholder="Nombre del Video..."
            />
        </div>
    );
}

export default SearchBox;