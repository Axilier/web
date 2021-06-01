// @flow
import React, { useContext } from 'react';
import { AllFiles, Button } from 'core';
import { Table, TableColumn } from '../Table';
import { AppContext } from '../../Context';

interface Props {
    error: string;
    openCreateMap: () => void;
}

const AllFilesPage = ({ error, openCreateMap }: Props) => {
    const { files } = useContext(AppContext);

    function showIcons(title: string): JSX.Element | null {
        if (title === 'Name') {
            return <AllFiles iconColor={'#464646'} />;
        }
        return null;
    }

    const errorMessage = (data: Array<any> | string | null): string => {
        if (data === 'fetch') return 'Fetching data please wait';
        if (data === null) return 'No maps created yet, Start here!';
        return '';
    };

    return (
        <>
            <h2>All Files</h2>
            <Table
                data={files}
                messageConditional={errorMessage}
                uniqueName={'AllFiles'}
            >
                <TableColumn
                    align={'start'}
                    title={'Name'}
                    attribute={'name'}
                    icon={showIcons}
                />
                <TableColumn size={15} title={'Owner'} attribute={'owner'} />
                <TableColumn
                    size={15}
                    title={'Last Modified'}
                    attribute={'modifiedTime'}
                />
                <TableColumn
                    size={15}
                    title={'Created Date'}
                    attribute={'createdTime'}
                />
            </Table>
            {!files || files.length === 0 || error !== '' ? (
                <Button
                    btnClassName={'web-account-create-dropdown-click'}
                    label={'Get Started'}
                    variant={'contained'}
                    style={{ margin: 'auto' }}
                    onClick={openCreateMap}
                />
            ) : null}
            {error !== '' ? error : null}
        </>
    );
};

export default AllFilesPage;
