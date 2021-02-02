// @flow
import * as React from "react";
import { useState } from "react";
import { Button, Github, Google, Key, Mail, TextBox, Tickbox } from "core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Logo from "../Assets/Logo";
import "../Css/Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const history = useHistory();

    function login() {
        axios
            .post(
                "http://localhost:4000/login",
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
        <div className={"login-main"}>
            <div className={"login-topbar"}>
                <Logo />
                <Button label={"Contact"} variant={"text"} type={"tertiary"} />
                <div className={"login-divider"} />
            </div>
            <div className={"login-main-body"}>
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
                <div className={"login-lower-controls"}>
                    <div className={"login-remember-me"}>
                        <Tickbox
                            ticked={false}
                            style={{ marginRight: "3px" }}
                        />
                        Remember me
                    </div>
                    <Button
                        className={"login-forgot-password"}
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
                <div className={"login-body-divider"}>
                    <div className={"login-body-divider-bar"} />
                    <div className={"login-body-divider-text"}>OR</div>
                    <div className={"login-body-divider-bar"} />
                </div>
                <Button
                    size={"large"}
                    label={"Sign In with google"}
                    buttonIcon={<Google />}
                    className={"login-other-options"}
                />
                <Button
                    size={"large"}
                    label={"Sign In with Github"}
                    className={"login-other-options"}
                    buttonIcon={<Github />}
                    buttonColor={"#1B1817"}
                />
                <div className={"login-sign-up"}>
                    No account yet?
                    <Button
                        label={"Sign Up"}
                        variant={"text"}
                        style={{
                            textDecoration: "underline",
                            margin: "0 4px",
                            lineHeight: 1.1,
                        }}
                    />
                    here
                </div>
            </div>
        </div>
    );
};

export default Login;
