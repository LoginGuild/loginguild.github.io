import React from 'react';
import './Components.css';

export default function TopMenuItem({ displayName }) {
    return (
        <div className='menuItem'>
            {displayName}
        </div>
    );
}