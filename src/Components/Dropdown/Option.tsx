// @flow
import React from 'react';
import '../../Css/Dropdown.css';
import { Option as OptionType } from '../../Types';

const Option = ({ children, onClick }: OptionType) => {
    return (
        <div
            role={'button'}
            className={'option'}
            onClick={() => {
                if (!onClick) return;
                onClick();
            }}
        >
            {children}
        </div>
    );
};

export default Option;
