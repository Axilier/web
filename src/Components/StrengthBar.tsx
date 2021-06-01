// @flow
import React, { useEffect, useState } from 'react';
import '../Css/StengthBar.css';

type Props = {
    currentStrength: number;
};

const StrengthBar = ({ currentStrength }: Props) => {
    const [strength, setStrength] = useState(currentStrength);

    useEffect(() => setStrength(strength), [currentStrength]);

    const calColor = () => {
        switch (currentStrength) {
            case 0:
                return '#E6E6E6';
            case 1:
                return '#E01414';
            case 2:
                return '#E07C14';
            case 3:
                return '#E0A914';
            case 4:
                return '#37B411';
            default:
                return '#E6E6E6';
        }
    };

    const bars = (): Array<JSX.Element> => {
        const barElements: Array<JSX.Element> = [];
        for (let i = 0; i < 4; i += 1) {
            barElements.push(
                <div
                    className={'web-strength-bar-sub'}
                    style={{
                        backgroundColor:
                            i < currentStrength ? calColor() : '#E6E6E6',
                    }}
                />
            );
        }
        return barElements;
    };

    return (
        <div className={'web-strength-bar-main'}>
            <div className={'web-strength-bar-margins'} />
            {bars()}
            <div className={'web-strength-bar-margins'} />
        </div>
    );
};

export default StrengthBar;
