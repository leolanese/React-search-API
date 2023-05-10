import React, {memo} from 'react';

const Search = ({onSearchChange}) => {
    return (
        <div className="pa2 bap-4 border border-gray-200 flex items-center justify-center">
            <input 
                className="w-90 w-4/5 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-5 focus:ring-blue-500" 
                type='search' 
                placeholder='Search ...' 
                onChange={onSearchChange} 
            />
        </div>
    );
}

export default memo(Search);