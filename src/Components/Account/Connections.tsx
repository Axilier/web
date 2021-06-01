// @flow
import React from 'react';
import { Button } from 'core';
import styles from '../../Css/Connections.module.css';
import { ConnectionOption } from '../../Types';

const Connections = ({
    connectedAccounts,
}: {
    connectedAccounts: Array<ConnectionOption>;
}) => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <h2>Connections</h2>
                <Button
                    label={'Add connection'}
                    variant={'contained'}
                    onClick={() => console.log('new')}
                    size={'180px'}
                />
            </div>
            <div className={styles.connections}>
                {connectedAccounts.map((option) => (
                    <div
                        className={styles.connectionCard}
                        key={`${option.name}--${option.accountId}`}
                    >
                        {/* <div className={styles.connectionCardInner}> */}
                        <div className={styles.connectionCardLeft}>
                            {option.icon}
                        </div>
                        <div className={styles.connectionCardTopRight}>
                            <h3>{option.name}</h3>
                            <h3>{option.email}</h3>
                            <h3>#{option.accountId}</h3>
                        </div>
                        <div className={styles.connectionCardBottomRight}>
                            <Button
                                label={'Remove'}
                                variant={'contained'}
                                size={'90px'}
                                style={{
                                    alignSelf: 'flex-end',
                                }}
                                btnStyle={{
                                    height: '28px',
                                    fontSize: '15px',
                                }}
                            />
                        </div>

                        {/* </div> */}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Connections;
