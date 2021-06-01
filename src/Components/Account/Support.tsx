// @flow
import React from 'react';
import { Button, Issue } from 'core';
import styles from '../../Css/Support.module.css';
import { Table, TableColumn } from '../Table';

const Support = ({ newTicket }: { newTicket: () => void }) => {
    const data = [
        {
            name: 'Test1',
            type: 'Account Change',
            status: 'Triage',
            lastModified: '01/02/2021 00:00:00',
            createdDate: '01/02/2021 00:00:00',
        },
    ];

    return (
        <>
            <div className={styles.topSection}>
                <h2>Support</h2>
                <Button
                    label={'New Ticket'}
                    variant={'contained'}
                    onClick={newTicket}
                />
            </div>
            <h3 style={{ marginTop: '10px' }}>Open tickets</h3>
            <Table data={data} uniqueName={'SupportTickets'}>
                <TableColumn
                    align={'start'}
                    attribute={'name'}
                    title={'Name'}
                    icon={() => (
                        <Issue
                            iconColor={'#464646'}
                            style={{ height: '15px', width: '15px' }}
                        />
                    )}
                />
                <TableColumn attribute={'type'} title={'Type'} size={15} />
                <TableColumn attribute={'status'} title={'Status'} size={15} />
                <TableColumn
                    attribute={'lastModified'}
                    title={'Last Modified'}
                    size={15}
                />
                <TableColumn
                    attribute={'createdDate'}
                    title={'Created Date'}
                    size={15}
                />
            </Table>
        </>
    );
};

export default Support;
