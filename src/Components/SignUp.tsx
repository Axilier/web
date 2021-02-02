// @flow
import * as React from "react";
import { useState } from "react";
import "../Css/Account.css";
import "../Css/SignUp.css";
import { Button, Github, Google, Key, Mail, TextBox, Warning } from "core";
import { useHistory } from "react-router-dom";
import TopBar from "./TopBar";
import StrengthBar from "./StrengthBar";

const SignUp = () => {
    // eslint-disable-next-line no-unused-vars
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reTypedPassword, setReTypedPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);

    const history = useHistory();

    function checkPassword(input: {
        passwordInput: string;
        retypedInput: string;
    }) {
        const { passwordInput, retypedInput } = input;
        let strength = 0;
        if (passwordInput === retypedInput) {
            strength += 1;
        }
        if (/[A-Z]/.test(passwordInput)) {
            strength += 1;
        }
        if (/[0-9]/.test(passwordInput)) {
            strength += 1;
        }
        if (/[^\w\s]/.test(passwordInput)) {
            strength += 1;
        }
        if (passwordInput !== retypedInput) {
            strength = 0;
        }
        if (passwordInput === "" || retypedInput === "") {
            strength = 0;
        }
        if (passwordInput.length <= 8) {
            strength = 0;
        }
        setPasswordStrength(strength);
    }

    /* eslint-disable */
    return (
        <div className={"web-account-main"}>
            <TopBar />
            <div className={"web-account-main-body"}>
                <h2>Welcome to Axilier</h2>
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
                    onChange={(value) => {
                        setPassword(value);
                        checkPassword({
                            passwordInput: value,
                            retypedInput: reTypedPassword,
                        });
                    }}
                />
                <TextBox
                    prefixComponent={<Key />}
                    placeholder={"Re-Enter your password"}
                    variant={"outlined"}
                    size={"large"}
                    required
                    label={"Re-Enter Password"}
                    type={"password"}
                    onChange={(value) => {
                        setReTypedPassword(value);
                        checkPassword({
                            passwordInput: password,
                            retypedInput: value,
                        });
                    }}
                />

                {password === "" && reTypedPassword === "" ? (
                    <div className={"web-signup-strength-text"}>
                        Enter your password above to calculate strength
                    </div>
                ) : passwordStrength < 4 ? (
                    <div className={"web-signup-strength-text"}>
                        Your password is too weak please retry{" "}
                        <Warning
                            iconColor={"#BEBEBE"}
                            style={{ height: "13px" }}
                            className={"web-signup-strength-warning"}
                        />
                    </div>
                ) : (
                    <div className={"web-signup-strength-text"}>
                        Your password is strong enough you can continue
                    </div>
                )}

                <StrengthBar currentStrength={passwordStrength} />
                <Button
                    style={{ margin: "10px 0" }}
                    label={"sign up"}
                    variant={"contained"}
                />
                <div className={"web-account-body-divider"}>
                    <div className={"web-account-body-divider-bar"} />
                    <div className={"web-account-body-divider-text"}>OR</div>
                    <div className={"web-account-body-divider-bar"} />
                </div>
                <Button
                    size={"large"}
                    label={"Sign Up with google"}
                    buttonIcon={<Google />}
                    className={"web-account-other-options"}
                />
                <Button
                    size={"large"}
                    label={"Sign Up with Github"}
                    className={"web-account-other-options"}
                    buttonIcon={<Github />}
                    buttonColor={"#1B1817"}
                />
                <div className={"web-account-change-page"}>
                    Already have an account?
                    <Button
                        label={"Login"}
                        variant={"text"}
                        style={{
                            textDecoration: "underline",
                            margin: "0 4px",
                            lineHeight: 1.1,
                        }}
                        onClick={() => history.push("/login")}
                    />
                    here
                </div>
            </div>
        </div>
    );
    /* eslint-enable */
};
export default SignUp;
