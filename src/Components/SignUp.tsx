// @flow
import * as React from "react";
import { useState } from "react";
import "../Css/Account.css";
import "../Css/SignUp.css";
import {
    Button,
    Cross,
    Github,
    Google,
    Key,
    Mail,
    Question,
    TextBox,
} from "core";
import { useHistory } from "react-router-dom";
import TopBar from "./TopBar";
import StrengthBar from "./StrengthBar";
import axios from "axios";

const SignUp = () => {
    // eslint-disable-next-line no-unused-vars
    const [emailValid, setEmailValid] = useState(true);
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

    function checkEmail() {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // DOC not perfect but will do basic validation, do email validation on server
    }

    /* eslint-disable */

    function passwordCheck(check: boolean): string {
        return password === "" || reTypedPassword === ""
            ? "#BEBEBE"
            : check
            ? "#1EB932"
            : "#F01919";
    }

    function signUp() {
        if (!checkEmail()) {
            setEmailValid(false);
        } else {
            setEmailValid(true);
            axios
                .post(
                    "http://3.10.226.172/register",
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
                        console.log("something went wrong");
                    }
                );
        }
    }

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
                    onChange={(value) => {
                        setEmail(value);
                    }}
                />
                {!emailValid ? (
                    <div
                        style={{
                            color: "#F01919",
                        }}
                        className={"web-signup-email-error"}
                    >
                        <Cross
                            iconColor={"#F01919"}
                            style={{ marginRight: "3px" }}
                        />
                        Invalid Email Address
                    </div>
                ) : null}
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

                <div
                    className={"web-signup-strength-notices"}
                    style={{ color: "#BEBEBE" }}
                >
                    <div className={"web-signup-strength-notices-col"}>
                        <div
                            style={{
                                color: passwordCheck(
                                    password === reTypedPassword
                                ),
                            }}
                        >
                            <Question
                                iconColor={passwordCheck(
                                    password === reTypedPassword
                                )}
                            />
                            Passwords match?
                        </div>
                        <div
                            style={{
                                color: passwordCheck(password.length >= 8),
                            }}
                        >
                            <Question
                                iconColor={passwordCheck(password.length >= 8)}
                            />
                            At least 8 characters long?
                        </div>
                        <div
                            style={{
                                color: passwordCheck(/[A-Z]/.test(password)),
                            }}
                        >
                            <Question
                                iconColor={passwordCheck(
                                    /[A-Z]/.test(password)
                                )}
                            />{" "}
                            Contains a capital letter?
                        </div>
                    </div>
                    <div className={"web-signup-strength-notices-col"}>
                        <div
                            style={{
                                color: passwordCheck(/[0-9]/.test(password)),
                            }}
                        >
                            <Question
                                iconColor={passwordCheck(
                                    /[0-9]/.test(password)
                                )}
                            />{" "}
                            Contains a number?
                        </div>
                        <div
                            style={{
                                color: passwordCheck(/[^\w\s]/.test(password)),
                            }}
                        >
                            <Question
                                iconColor={passwordCheck(
                                    /[^\w\s]/.test(password)
                                )}
                            />{" "}
                            Contains a symbol?
                        </div>
                    </div>
                </div>

                {password === "" && reTypedPassword === "" ? (
                    <div className={"web-signup-strength-text"}>
                        Enter your password above to calculate strength
                    </div>
                ) : passwordStrength < 4 ? (
                    <div className={"web-signup-strength-text"}>
                        Your password is too weak please fix the red issues
                        above
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
                    onClick={() => signUp()}
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
