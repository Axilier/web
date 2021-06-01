// @flow
import React from 'react';
import '../../Css/Connections.css';

type Props = {
    icon: JSX.Element;
    name: string;
    email: string;
    accountId: string;
};

const ConnectionCard = ({ icon, name, email, accountId }: Props) => {
    return (
        <div className={'web-connection-card'}>
            <div className={'web-connection-card-inner'}>
                <div className={'web-connection-card-left'}>{icon}</div>
                <div className={'web-connection-card-right'}>
                    <h4>{name}</h4>
                    <h4>{email}</h4>
                    <h4>{accountId}</h4>
                </div>
            </div>
        </div>
    );
};

export default ConnectionCard;
