import * as React from "react";
import ReactDOM from "react-dom";
import "./Css/index.css";
import BuildScreen from "build-screen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Homepage, Login } from "./Components";
import Account from "./Components/Account";
import FourOFour from "./Components/FourOFour";

ReactDOM.render(
    <BrowserRouter basename={"/"}>
        <Switch>
            <Route exact path={"/"}>
                <Homepage />
            </Route>
            <Route exact path={"/build"}>
                <BuildScreen />
            </Route>
            <Route exact path={"/login"}>
                <Login />
            </Route>
            <Route exact path={"/account"}>
                <Account />
            </Route>
            <Route path={"*"}>
                <FourOFour />
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
