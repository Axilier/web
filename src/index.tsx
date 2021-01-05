import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import * as serviceWorker from './serviceWorker';
import {Homepage} from "./Screens";
import BuildScreen from "mapit-build-screen";
import {BrowserRouter, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter basename={"/"}>
        <Switch>
            <Route exact path={"/"}>
                <Homepage/>
            </Route>
            <Route exact path={"/build"}>
                <BuildScreen/>
            </Route>
            <Route><div>error</div></Route> // Error Page
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
serviceWorker.unregister();
