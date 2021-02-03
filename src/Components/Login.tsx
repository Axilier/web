// @flow
import * as React from "react";
import { useState } from "react";
import { Button, Github, Google, Key, Mail, TextBox, Tickbox } from "core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../Css/Login.css";
import "../Css/Account.css";
import TopBar from "./TopBar";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const history = useHistory();

    function login() {
        axios
            .post(
                "https://api.axilier.com/login",
                {
                    email,
                    password,
                },
                { withCredentials: true }
            )
            .then(
                (res) => {
                    if (res.status === 200) {
                        history.push("/account");
                    }
                },
                () => {
                    setError("Something went wrong");
                }
            );
    }

    return (
        <div className={"web-account-main"}>
            <TopBar />
            <div className={"web-account-main-body"}>
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
                    />
                </div>
                <Button
                    style={{ margin: "10px 0" }}
                    label={"login"}
                    variant={"contained"}
                    onClick={() => login()}
                />
                {error}
                <div className={"web-account-body-divider"}>
                    <div className={"web-account-body-divider-bar"} />
                    <div className={"web-account-body-divider-text"}>OR</div>
                    <div className={"web-account-body-divider-bar"} />
                </div>
                <Button
                    size={"large"}
                    label={"Sign In with google"}
                    buttonIcon={<Google />}
                    className={"web-account-other-options"}
                />
                <Button
                    size={"large"}
                    label={"Sign In with Github"}
                    className={"web-account-other-options"}
                    buttonIcon={<Github />}
                    buttonColor={"#1B1817"}
                />
                <div className={"web-account-change-page"}>
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
