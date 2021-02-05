import * as React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Css/index.css";
import BuildScreen from "build-screen";
import axios from "axios";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Account, FourOFour, Homepage, Login, SignUp } from "./Components";
import { AppContext } from "./Context";
import * as serviceWorker from "./serviceWorker";

function Main() {
    const [user, setUser] = useState();
    const [isLoaded, setLoaded] = useState(false);

    const apiUrl =
        process.env.NODE_ENV === "development"
            ? "http://localhost:4000"
            : "https://api.axilier.com";

    useEffect(() => {
        axios
            .get(`${apiUrl}/getUser`, { withCredentials: true })
            .then((res) => {
                setUser(res.data);
                setLoaded(true);
                console.log("run");
            })
            .catch(() => {
                console.log("run1");
                setLoaded(true);
            });
    }, []);

    return (
        <AppContext.Provider value={{ user, apiUrl, setUser }}>
            <BrowserRouter basename={"/"}>
                {isLoaded ? (
                    <Switch>
                        <Route exact path={"/"}>
                            <Homepage />
                        </Route>
                        <Route exact path={"/build"}>
                            {user ? (
                                <BuildScreen />
                            ) : (
                                <Redirect to={"/login"} />
                            )}
                        </Route>
                        <Route exact path={"/account"}>
                            {user ? <Account /> : <Redirect to={"/login"} />}
                        </Route>
                        <Route exact path={"/login"}>
                            {user ? <Redirect to={"/account"} /> : <Login />}
                        </Route>
                        <Route exact path={"/signup"}>
                            {user ? <Redirect to={"/account"} /> : <SignUp />}
                        </Route>
                        <Route component={FourOFour} />
                    </Switch>
                ) : (
                    <div />
                )}
            </BrowserRouter>
        </AppContext.Provider>
    );
}

ReactDOM.render(<Main />, document.getElementById("root"));
serviceWorker.unregister();

// <Route exact path={"/"}>
//                     <Homepage />
//                 </Route>
//                 <Route exact path={"/build"}>
//                     {user ? <BuildScreen /> : <Redirect to={"/login"} />}
//                 </Route>
//                 <Route exact path={"/account"}>
//                     {user ? <Account /> : <Redirect to={"/login"} />}
//                 </Route>
//                 <Route exact path={"/login"}>
//                     {user ? <Redirect to={"/account"} /> : <Login />}
//                 </Route>
//                 <Route exact path={"/signup"}>
//                     {user ? <Redirect to={"/account"} /> : <SignUp />}
//                 </Route>
//                 <Route path={"*"}>
//                     <FourOFour />
//                 </Route>
