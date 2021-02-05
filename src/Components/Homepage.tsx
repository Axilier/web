// @flow
import * as React from "react";
import { useContext } from "react";
import { Button } from "core";
import "../Css/Homescreen.css";
import { useHistory } from "react-router-dom";
import Circle from "../Assets/CircleForm.svg";
import City from "../Assets/PhoneMapCircle.svg";
import Logo from "../Assets/Logo";
import { AppContext } from "../Context";

const Homepage = () => {
    const history = useHistory();
    const { user } = useContext(AppContext);

    return (
        <>
            <div className={"top-bar"}>
                <Logo />
                <div className={"top-bar-item"}>
                    <Button
                        label={"Product"}
                        variant={"text"}
                        type={"tertiary"}
                    />
                    <Button
                        label={"Resources"}
                        variant={"text"}
                        type={"tertiary"}
                    />
                    <Button
                        label={"Contact"}
                        variant={"text"}
                        type={"tertiary"}
                    />
                </div>
                <div className={"top-bar-item"}>
                    {user === {} ? (
                        <>
                            <Button
                                label={"Sign Up"}
                                variant={"outlined"}
                                className={"btn-slide-left"}
                            />
                            <Button
                                label={"Login"}
                                variant={"text"}
                                onClick={() => history.push("/login")}
                            />
                        </>
                    ) : (
                        <Button
                            label={"My Account"}
                            variant={"contained"}
                            size={"170px"}
                            className={"btn-slide-left"}
                            onClick={() => history.push("/account")}
                        />
                    )}
                </div>
            </div>
            <div className={"main-body"}>
                <div className={"main-body-item"}>
                    <img src={Circle} alt={""} style={{ width: "60%" }} />
                </div>
                <div className={"main-body-item"}>
                    <img
                        src={City}
                        alt={"phone city"}
                        style={{ width: "60%", paddingTop: "200px" }}
                    />
                </div>
                <div className={"floating-text"}>
                    <p className={"floating-text-title"}>
                        A modern solution
                        <br />
                        to a persistent problem
                    </p>
                    <p className={"floating-text-small"}>
                        Create, Connect, Distribute maps among your
                        <br />
                        employees and or customers using your
                        <br />
                        preexisting cloud storage
                        <br />
                        with basic QR codes
                    </p>
                    <Button label={"Sign Up"} variant={"outlined"} />
                </div>
            </div>
        </>
    );
};

export default Homepage;
