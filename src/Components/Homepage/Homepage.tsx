// @flow
import * as React from "react";
import Logo from "../../Assets/Logo";
import "../../Css/Homescreen.css";
import { Button } from "../index";
import Circle from "../../Assets/CircleForm.svg";
import City from "../../Assets/PhoneMapCircle.svg";

const Homepage = () => {
    return (
        <>
            <div className={"top-bar"}>
                <Logo />
                <div className={"top-bar-item"}>
                    <Button title={"Product"} variant={"Text"} />
                    <Button title={"Resources"} variant={"Text"} />
                    <Button title={"Contact"} variant={"Text"} />
                </div>
                <div className={"top-bar-item"}>
                    <Button
                        title={"Sign Up"}
                        variant={"Outlined"}
                        color={"#053FFF"}
                        textColor={"#053FFF"}
                        className={"btn-slide-left"}
                    />
                    <Button title={"Login"} variant={"Text"} />
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
                    <Button
                        title={"Sign Up"}
                        variant={"Outlined"}
                        color={"#053FFF"}
                        textColor={"#053FFF"}
                    />
                </div>
            </div>
        </>
    );
};

export default Homepage;
