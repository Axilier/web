// @flow
import React from 'react';
import { Button } from 'core';
import Logo from '../Assets/Logo';
import '../Css/TopBar.css';

const TopBar = () => {
    return (
        <div className={'web-topbar'}>
            <Logo />
            <Button label={'Contact'} variant={'text'} type={'tertiary'} />
            <div className={'web-topbar-divider'} />
        </div>
    );
};

export default TopBar;
