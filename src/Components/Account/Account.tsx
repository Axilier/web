// @flow
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../Css/Account.css';
import {
    AllFiles,
    Button,
    Cross,
    Issue,
    Search,
    Tab,
    TabMenu,
    TextBox,
} from 'core';
import { format } from 'date-fns';
import { QueryObserverResult, useQuery } from 'react-query';
import { AppContext } from '../../Context';
import WhiteLogo from '../../Assets/whiteLogo.svg';
import AllFilesPage from './AllFilesPage';
import Connections from './Connections';
import {
    ConnectionOption,
    FileApi,
    FixedEvent,
    GoogleUser,
    LocalUser,
    StorageService,
} from '../../Types';
import { Dropdown, Option } from '../Dropdown';
import ConnectionsIcon from '../../Assets/Connections.svg';
import AccountToggle from '../../Assets/account-toggle.svg';
import Support from './Support';
import NewTicket from './NewTicket';
import {
    getGoogleAccount,
    getGoogleFileList,
    getGoogleProfilePic,
    getLocalAccount,
    getUser,
} from '../../Requests';

const Account = () => {
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [createMapMenuStatus, setCreateMapMenuStatus] = useState(false);
    const [hoverCreateMenu, setHoverCreateMenu] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);
    const [usersProfilePic, setUsersProfilePic] = useState('');
    const [error, setError] = useState('');
    const [newMapName, setNewMapName] = useState('');
    const [selectedStorageService, setSelectedStorageService] = useState(
        StorageService.Axilier
    );
    const { setFiles, setMapProperties } = useContext(AppContext);
    const [newMapError, setNewMapError] = useState('');
    const [connections, setConnections] = useState<Array<ConnectionOption>>([]);
    const history = useHistory();

    // const accountConnectionsMap: Array<Connection> = [
    //     {
    //         request: "/google",
    //         name: "Google",
    //         icon: <Google />,
    //         onRemove: () => null
    //     },
    //     {
    //         request: "/local",
    //         name: "Axilier",
    //         icon: <img src={AxilierLogo} alt={"Axilier"} />,
    //         onRemove: () => null
    //     }
    // ];

    function handleClickAway(event: MouseEvent) {
        const target: FixedEvent | null = event?.target;
        const className = target?.className || '';
        const nodeName = target?.nodeName || '';
        if (typeof className !== 'string') return;
        if (
            !(
                className.includes('web-account-dropdown-tile') ||
                className.includes('web-account-dropdown-open-button')
            )
        ) {
            setAccountDropdownOpen(false);
        }
        if (
            !className.includes('web-account-create-dropdown-click') &&
            !hoverCreateMenu &&
            !(nodeName === 'OPTION')
        ) {
            setCreateMapMenuStatus(false);
        }
    }

    const { data: user } = useQuery('user', getUser);

    useEffect(() => {
        function getGoogleFiles(): void {
            if (!user) return;
            const { isError, error: errorFileList, data } = useQuery(
                'list_google_files',
                getGoogleFileList
            );
            if (isError) {
                setError(errorFileList);
                return;
            }
            setFiles(
                data.content.data.files
                    .filter((file: FileApi) => !file.trashed)
                    .map((file: FileApi) => {
                        return {
                            name: file.name.split('.')[0],
                            modifiedTime: format(
                                new Date(file.modifiedTime),
                                'dd/MM/y HH:mm:ss'
                            ),
                            createdTime: format(
                                new Date(file.createdTime),
                                'dd/MM/y HH:mm:ss'
                            ),
                            owner: file.owners[0].displayName || 'unknown',
                        };
                    })
            );
        }

        async function getConnections() {
            const {
                data: localUser,
            }: QueryObserverResult<LocalUser> = useQuery(
                'getLocalAccount',
                getLocalAccount
            );
            const {
                data: googleUser,
            }: QueryObserverResult<GoogleUser> = useQuery(
                'getGoogleAccount',
                getGoogleAccount
            );
            console.log([googleUser, localUser]);
            setConnections([]);
        }

        async function getProfilePic() {
            if (!user) return;
            const { data, error: errorProfilePic } = useQuery(
                'getGoogleProfilePic',
                getGoogleProfilePic
            );
            if (!errorProfilePic) {
                setUsersProfilePic(data.content.data.photos[0].url);
            }
        }

        getConnections();
        getProfilePic();
        getGoogleFiles();
    }, []);

    useEffect(() => {
        window.addEventListener('click', handleClickAway);
        return function cleanup() {
            window.removeEventListener('click', handleClickAway);
        };
    });

    function logout() {
        useQuery('logout', logout);
    }

    const showPage = (): JSX.Element => {
        switch (selectedTab) {
            case 0:
                return (
                    <AllFilesPage
                        error={error}
                        openCreateMap={() => setCreateMapMenuStatus(true)}
                    />
                );
            case 1:
                return <Connections connectedAccounts={connections} />;
            case 2:
                return <Support newTicket={() => setSelectedTab(3)} />;
            case 3:
                return <NewTicket cancel={() => setSelectedTab(2)} />;
            default:
                return <div />;
        }
    };

    function createMap() {
        if (newMapName === '') {
            setNewMapError('A map name is needed');
            return;
        }
        setNewMapError('');
        setMapProperties({
            name: newMapName,
            storageService: selectedStorageService,
        });
        history.push('/build');
    }

    return (
        <div className={'web-account-main'}>
            <div className={'web-account-sidebar'}>
                <img
                    src={WhiteLogo}
                    alt={'logo'}
                    className={'web-account-logo'}
                />
                <TabMenu
                    onChange={(value) => {
                        setSelectedTab(value);
                    }}
                    direction={'vertical'}
                    tabNotSelectedColor={'#1E4EE5'}
                    tabSelectedColor={'#0452DE'}
                    tabIndicatorColor={'white'}
                >
                    <Tab>
                        <AllFiles />
                        All Files
                    </Tab>
                    <Tab>
                        <img
                            style={{ height: '20px' }}
                            src={ConnectionsIcon}
                            alt={'connections'}
                        />
                        Connections
                    </Tab>
                    <Tab>
                        <Issue />
                        Support
                    </Tab>
                </TabMenu>
            </div>
            <div className={'web-account-main-body'}>
                <div className={'web-account-topbar'}>
                    <TextBox
                        variant={'bare'}
                        size={'large'}
                        prefixComponent={<Search iconColor={'#C4C6CA'} />}
                        placeholder={'Search by: filename, tag, folder....'}
                        inputStyle={{
                            color: '#8D9097',
                            minWidth: '0',
                        }}
                    />
                    <div className={'web-account-profile-badge'}>
                        <Button
                            label={'create'}
                            variant={'contained'}
                            size={'120px'}
                            btnClassName={'web-account-create-dropdown-click'}
                            onClick={() => setCreateMapMenuStatus(true)}
                        />
                        <div
                            aria-label={'profile dropdown'}
                            role={'button'}
                            onClick={() => {
                                setAccountDropdownOpen(true);
                            }}
                            className={
                                'web-account-profile-logo web-account-dropdown-open-button'
                            }
                        >
                            {usersProfilePic ? (
                                <img
                                    className={
                                        'web-account-dropdown-open-button'
                                    }
                                    src={usersProfilePic}
                                    alt={'users profile'}
                                />
                            ) : user ? (
                                user.email[0]
                            ) : (
                                ''
                            )}
                        </div>

                        <div
                            onClick={() => {
                                setAccountDropdownOpen(true);
                            }}
                            aria-label={'profile dropdown'}
                            role={'button'}
                        >
                            <img
                                src={AccountToggle}
                                alt={'profile dropdown'}
                                className={
                                    'web-account-drop web-account-dropdown-open-button'
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className={'web-account-content-area'}>
                    {showPage()}
                    <div
                        className={`web-account-dropdown-profile ${
                            accountDropdownOpen
                                ? 'web-account-dropdown-open'
                                : 'web-account-dropdown-closed'
                        } web-account-dropdown`}
                    >
                        <div className={'web-account-dropdown-profile-top'}>
                            <div
                                className={'web-account-dropdown-profile-badge'}
                            >
                                {usersProfilePic ? (
                                    <img
                                        src={usersProfilePic}
                                        alt={'users profile'}
                                    />
                                ) : user ? (
                                    user.email[0]
                                ) : (
                                    ''
                                )}
                            </div>
                            <div
                                className={'web-account-dropdown-profile-info'}
                            >
                                <p>{user ? user.email : ''}</p>
                                <p>#{user ? user.user_id : ''}</p>
                            </div>
                        </div>
                        <div>
                            <div className={'web-account-dropdown-tile'}>
                                My Account
                            </div>
                            <div
                                role={'button'}
                                className={'web-account-dropdown-tile'}
                                onClick={() => logout()}
                            >
                                Log Out
                            </div>
                        </div>
                    </div>
                    <div
                        className={`web-account-dropdown web-account-create-dropdown web-account-create-dropdown-click ${
                            createMapMenuStatus
                                ? 'web-account-dropdown-open'
                                : 'web-account-dropdown-closed'
                        }`}
                        onMouseLeave={() => {
                            setHoverCreateMenu(false);
                        }}
                        onMouseEnter={() => setHoverCreateMenu(true)}
                    >
                        <h3>New Map</h3>
                        <TextBox
                            style={{ marginTop: '5px' }}
                            label={'Map Name'}
                            required
                            size={'100%'}
                            variant={'outlined'}
                            height={'40px'}
                            onChange={setNewMapName}
                            value={newMapName}
                            placeholder={'New Map Name'}
                        />
                        <Dropdown
                            style={{ marginTop: '5px' }}
                            label={'Storage Service'}
                            required
                            height={'40px'}
                            onChange={(value) =>
                                setSelectedStorageService(
                                    value as StorageService
                                )
                            }
                        >
                            <Option>Axilier</Option>
                            <Option>Google</Option>
                            <Option>One Drive</Option>
                        </Dropdown>
                        <div
                            style={{
                                visibility:
                                    newMapError === '' ? 'hidden' : 'visible',
                            }}
                            className={'web-account-new-map-error'}
                        >
                            <Cross
                                iconColor={'#F01919'}
                                style={{ marginRight: '3px' }}
                            />
                            {newMapError}
                        </div>
                        <Button
                            label={'Create'}
                            variant={'contained'}
                            onClick={() => createMap()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Account;
