// @flow
import React, { cloneElement, CSSProperties, useEffect, useState } from 'react';
import '../../Css/Dropdown.css';
import Arrow from '../../Assets/dropArrow.svg';
import { FixedEvent, Option } from '../../Types';

type Props = {
    label?: string;
    children: Array<React.ReactElement<Option>> | React.ReactElement<Option>;
    className?: string;
    required?: boolean;
    height?: string;
    style?: CSSProperties;
    onChange?: (value: number) => void;
};

const Dropdown = ({
    label,
    children,
    className,
    required,
    height,
    style,
    onChange,
}: Props) => {
    const [selectedOption, setSelectedOption] = useState(0);
    const [menuOpen, setMenuStatus] = useState(false);

    function handleClick(event: MouseEvent) {
        const target: FixedEvent | null = event?.target;
        const clickedClassName = target?.className || '';
        console.log(clickedClassName);
        if (
            typeof clickedClassName === 'string' &&
            !clickedClassName.includes('web-dropdown-main')
        ) {
            setMenuStatus(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClick);
        return function cleanup() {
            window.removeEventListener('click', handleClick);
        };
    });

    const calcChildren = () => {
        if (Array.isArray(children)) {
            return children.map((child, index) => {
                return cloneElement(child, {
                    key: `${label}-${index}`,
                    onClick: () => {
                        setMenuStatus(false);
                        setSelectedOption(index);
                        if (!onChange) return;
                        onChange(index);
                    },
                });
            });
        }
        return cloneElement(children, {
            onClick: () => {
                setMenuStatus(false);
                setSelectedOption(0);
                if (!onChange) return;
                onChange(0);
            },
        });
    };

    return (
        <div className={'web-dropdown'} style={style}>
            {label !== '' ? (
                <div className={'drop-text-box-label'}>
                    {label}
                    {required ? (
                        <div className={'drop-required-icon'}>{'*'}</div>
                    ) : null}
                </div>
            ) : null}
            <div
                role={'button'}
                className={`web-dropdown-main ${className}`}
                onClick={() => setMenuStatus(!menuOpen)}
                style={{
                    height: height || '45px',
                }}
            >
                {Array.isArray(children) ? children[selectedOption] : children}
                <img
                    className={'drop-arrow'}
                    src={Arrow}
                    alt={'input dropdown'}
                />
            </div>
            <div
                className={'web-dropdown-open-menu'}
                style={{
                    visibility: menuOpen ? 'visible' : 'hidden',
                }}
            >
                {calcChildren()}
            </div>
        </div>
    );
};

Dropdown.defaultProps = {
    className: '',
    required: false,
    label: '',
    height: '',
    style: {},
    onChange: () => null,
};

export default Dropdown;
