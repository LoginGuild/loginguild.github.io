import React from 'react';
import './Components.css';
import LoginIcon from './LoginIcon';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return(
        <div className='topMenu'>
            <LoginIcon />
            <div className='menuItem'></div>
            <TopMenuItem displayName={"about us."} />
            <TopMenuItem displayName={"roster."} />
            <TopMenuItem displayName={"links."} />
            <TopMenuItem displayName={"apply."} />
        </div>
    );
}