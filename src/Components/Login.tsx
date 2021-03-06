// @flow
import * as React from "react";
import { useContext, useState } from "react";
import {
    Button,
    Cross,
    Github,
    Google,
    Key,
    Mail,
    TextBox,
    Tickbox,
} from "core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../Css/Login.css";
import "../Css/Entry.css";
import TopBar from "./TopBar";
import { AppContext } from "../Context";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const history = useHistory();
    const { apiUrl, setUser } = useContext(AppContext);

    function checkEmail() {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // DOC not perfect but will do basic validation, do email validation on server
    }

    function login() {
        if (email === "" || password === "" || !checkEmail()) return;
        axios
            .post(
                `${apiUrl}/login`,
                {
                    email,
                    password,
                },
                { withCredentials: true }
            )
            .then((res) => {
                if (res.status === 200) {
                    setError("");
                    axios
                        .get(`${apiUrl}/getUser`, { withCredentials: true })
                        .then((response) => {
                            setUser(response.data);
                            history.push("/account");
                        });
                }
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    setError("Incorrect Email or Password");
                }
            });
    }

    return (
        <div className={"web-entry-main"}>
            <TopBar />
            <div className={"web-entry-main-body"}>
                <h2>Welcome Back</h2>
                <TextBox
                    prefixComponent={<Mail />}
                    placeholder={"Enter your email address"}
                    variant={"outlined"}
                    size={"large"}
                    required
                    label={"Email"}
                    onChange={(value) => setEmail(value)}
                />
                <TextBox
                    prefixComponent={<Key />}
                    placeholder={"Enter your password"}
                    variant={"outlined"}
                    size={"large"}
                    required
                    label={"Password"}
                    type={"password"}
                    onChange={(value) => setPassword(value)}
                />
                {error !== "" ? (
                    <div
                        style={{
                            color: "#F01919",
                            marginBottom: "10px",
                        }}
                        className={"web-entry-error"}
                    >
                        <Cross
                            iconColor={"#F01919"}
                            style={{ marginRight: "3px" }}
                        />
                        {error}
                    </div>
                ) : null}
                <div className={"web-login-lower-controls"}>
                    <div className={"web-login-remember-me"}>
                        <Tickbox
                            ticked={false}
                            style={{ marginRight: "3px" }}
                        />
                        Remember me
                    </div>
                    <Button
                        className={"web-login-forgot-password"}
                        label={"Forgot your password?"}
                        variant={"text"}
                        type={"tertiary"}
                        onClick={() => history.push("/account")}
                    />
                </div>
                <Button
                    style={{ margin: "10px 0" }}
                    label={"login"}
                    variant={"contained"}
                    onClick={() => login()}
                />
                <div className={"web-entry-body-divider"}>
                    <div className={"web-entry-body-divider-bar"} />
                    <div className={"web-entry-body-divider-text"}>OR</div>
                    <div className={"web-entry-body-divider-bar"} />
                </div>
                <Button
                    size={"large"}
                    label={"Sign In with google"}
                    buttonIcon={<Google />}
                    className={"web-entry-other-options"}
                />
                <Button
                    size={"large"}
                    label={"Sign In with Github"}
                    className={"web-entry-other-options"}
                    buttonIcon={<Github />}
                    buttonColor={"#1B1817"}
                />
                <div className={"web-entry-change-page"}>
                    No account yet?
                    <Button
                        label={"Sign Up"}
                        variant={"text"}
                        style={{
                            textDecoration: "underline",
                            margin: "0 4px",
                            lineHeight: 1.1,
                        }}
                        onClick={() => history.push("/signup")}
                    />
                    here
                </div>
            </div>
        </div>
    );
};

export default Login;
