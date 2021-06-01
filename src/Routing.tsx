import React, { useState } from 'react';
import './Css/index.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useQuery } from 'react-query';
import BuildScreen from 'build-screen';
import axios from 'axios';
import { Account, FourOFour, Homepage, Login, SignUp } from './Components';
import { AppContext } from './Context';
import { File, StorageService, User } from './Types';

const Routing = () => {
    const [user, setUser] = useState<User | null>(null);
    const [files, setFiles] = useState<Array<File> | null | 'fetch'>(null);
    const [mapProperties, setMapProperties] = useState({
        name: '',
        storageService: StorageService.Axilier,
    });

    const { isLoading, data } = useQuery(
        'user',
        () =>
            axios.get(`http://localhost:4000/user/me`, {
                withCredentials: true,
            }),
        {
            retry: (_count: number, error: TypeError) => {
                return (
                    !error.message.includes('401') &&
                    !error.message.includes('Network Error')
                );
            },
        }
    );

    return (
        <>
            <AppContext.Provider
                value={{
                    user,
                    setUser,
                    files,
                    setFiles,
                    mapProperties,
                    setMapProperties,
                }}
            >
                <BrowserRouter basename={'/'}>
                    {/* {isLoading ? <div>yes</div> : <div>no</div>} */}
                    {!isLoading ? (
                        <Switch>
                            <Route exact path={'/'}>
                                <Homepage user={data || null} />
                            </Route>
                            <Route exact path={'/build'}>
                                {user ? (
                                    <BuildScreen />
                                ) : (
                                    <Redirect to={'/login'} />
                                )}
                            </Route>
                            <Route exact path={'/account'}>
                                {user ? (
                                    <Account />
                                ) : (
                                    <Redirect to={'/login'} />
                                )}
                            </Route>
                            <Route exact path={'/login'}>
                                {user ? (
                                    <Redirect to={'/account'} />
                                ) : (
                                    <Login />
                                )}
                            </Route>
                            <Route exact path={'/signup'}>
                                {user ? (
                                    <Redirect to={'/account'} />
                                ) : (
                                    <SignUp />
                                )}
                            </Route>
                            <Route component={FourOFour} />
                        </Switch>
                    ) : (
                        <div />
                    )}
                </BrowserRouter>
            </AppContext.Provider>
        </>
    );
};

export default Routing;
