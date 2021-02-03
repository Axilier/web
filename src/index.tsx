import * as React from "react";
import ReactDOM from "react-dom";
import "./Css/index.css";
import BuildScreen from "build-screen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Account, FourOFour, Homepage, Login, SignUp } from "./Components";

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
            <Route exact path={"/signup"}>
                <SignUp />
            </Route>
            <Route path={"*"}>
                <FourOFour />
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
