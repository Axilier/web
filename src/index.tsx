import * as React from "react";
import ReactDOM from "react-dom";
import "./Css/index.css";
import BuildScreen from "build-screen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Homepage } from "./Components";

ReactDOM.render(
    <BrowserRouter basename={"/"}>
        <Switch>
            <Route exact path={"/"}>
                <Homepage />
            </Route>
            <Route exact path={"/build"}>
                <BuildScreen />
            </Route>
            <Route>
                <div>error</div>
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
