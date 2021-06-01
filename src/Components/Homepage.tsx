// @flow
import React from 'react';
import { Button } from 'core';
import '../Css/Homescreen.css';
import { useHistory } from 'react-router-dom';
import Circle from '../Assets/CircleForm.svg';
import City from '../Assets/PhoneMapCircle.svg';
import Logo from '../Assets/Logo';
import { User } from '../Types';

const Homepage = ({ user }: { user: User | null }) => {
    const history = useHistory();

    // A modern solution
    // <br />
    // to a persistent problem

    return (
        <>
            <div className={'top-bar'}>
                <Logo />
                <div className={'top-bar-item'}>
                    <Button
                        label={'Product'}
                        variant={'text'}
                        type={'tertiary'}
                    />
                    <Button
                        label={'Resources'}
                        variant={'text'}
                        type={'tertiary'}
                    />
                    <Button
                        label={'Contact'}
                        variant={'text'}
                        type={'tertiary'}
                    />
                </div>
                <div className={'top-bar-item'}>
                    {!user ? (
                        <>
                            <Button
                                label={'Sign Up'}
                                variant={'contained'}
                                className={'btn-slide-left'}
                                size={'130px'}
                                onClick={() => history.push('/signup')}
                            />
                            <Button
                                label={'Login'}
                                variant={'text'}
                                onClick={() => history.push('/login')}
                            />
                        </>
                    ) : (
                        <Button
                            label={'My Account'}
                            variant={'contained'}
                            size={'170px'}
                            className={'btn-slide-left'}
                            onClick={() => history.push('/account')}
                        />
                    )}
                </div>
            </div>
            <div className={'main-body'}>
                <div className={'main-body-item'}>
                    <img src={Circle} alt={''} style={{ width: '60%' }} />
                </div>
                <div className={'main-body-item'}>
                    <img
                        src={City}
                        alt={'phone city'}
                        style={{ width: '60%', paddingTop: '200px' }}
                    />
                </div>
                <div className={'floating-text'}>
                    <p className={'floating-text-title'}>
                        A WORK IN PROGRESS DONT ENTER ANY INFO
                    </p>
                    <p className={'floating-text-small'}>
                        Create, Connect, Distribute maps among your
                        <br />
                        employees and or customers using your
                        <br />
                        preexisting cloud storage
                        <br />
                        with basic QR codes
                    </p>
                    <Button label={'Sign Up'} variant={'outlined'} />
                </div>
            </div>
        </>
    );
};

export default Homepage;
