// @flow
import React, { ChangeEvent, useState } from 'react';
import { Button, TextBox } from 'core';
import styles from '../../Css/Support.module.css';
import { Dropdown, Option } from '../Dropdown';

const NewTicket = ({ cancel }: { cancel: () => void }) => {
    const [contactMethod, setContactMethod] = useState('AxilierMessage');

    function handleContactChange(event: ChangeEvent<HTMLInputElement>) {
        setContactMethod(event.target.value);
    }

    return (
        <>
            <h2>Create Ticket</h2>
            <div className={styles.createTicket}>
                <TextBox
                    variant={'outlined'}
                    label={'Ticket name'}
                    required
                    size={'large'}
                    placeholder={'Enter a ticket name'}
                />
                <Dropdown
                    label={'Ticket Type'}
                    required
                    style={{ width: '324px' }}
                >
                    <Option>Account Change</Option>
                    <Option>Map Issue</Option>
                    <Option>Bug</Option>
                </Dropdown>
                <h4>Description</h4>
                <textarea
                    className={styles.textArea}
                    placeholder={'Describe your issue'}
                />
                <h4>Preferred contact method</h4>
                <form className={styles.contactRadio}>
                    <label className={styles.container}>
                        Axilier Message
                        <input
                            type="radio"
                            name="radio"
                            value={'AxilierMessage'}
                            checked={contactMethod === 'AxilierMessage'}
                            onChange={handleContactChange}
                        />
                        <span className={styles.checkmark} />
                    </label>
                    <label className={styles.container}>
                        Email
                        <input
                            type="radio"
                            name="radio"
                            checked={contactMethod === 'Email'}
                            onChange={handleContactChange}
                            value={'Email'}
                        />
                        <span className={styles.checkmark} />
                    </label>
                </form>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button label={'Create'} variant={'contained'} />
                    <Button
                        onClick={cancel}
                        label={'Cancel'}
                        variant={'text'}
                        buttonColor={'black'}
                        style={{
                            textDecoration: 'underline',
                            margin: '0 4px',
                            lineHeight: 1.1,
                            alignSelf: 'flex-end',
                            marginLeft: '200px',
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default NewTicket;
