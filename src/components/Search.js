import React from 'react';

const Search = ({onSearchChange}) => {
    return (
        <div className="pa2 ba ">
            <input type='search 'placeholder='Search ...' onChange={onSearchChange} />
        </div>
    );
}

export default Search;