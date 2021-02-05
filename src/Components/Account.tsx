// @flow
import * as React from "react";
import "../Css/Account.css";
import { AllFiles, Favourites, Recent, Tab, TabMenu } from "core";
import WhiteLogo from "../Assets/whiteLogo.svg";

const Account = () => {
    return (
        <div className={"web-account-main"}>
            <div className={"web-account-sidebar"}>
                <img
                    src={WhiteLogo}
                    alt={"logo"}
                    className={"web-account-logo"}
                />
                <TabMenu
                    onChange={(value) => console.log(value)}
                    direction={"vertical"}
                    tabNotSelectedColor={"#1E4EE5"}
                    tabSelectedColor={"#1B44C4"}
                    tabIndicatorColor={"white"}
                >
                    <Tab>
                        <AllFiles />
                        All Files
                    </Tab>
                    <Tab>
                        <Recent />
                        Recent
                    </Tab>
                    <Tab>
                        <Favourites />
                        Favourites
                    </Tab>
                </TabMenu>
            </div>
            <div className={"web-account-main-body"}>
                <div className={"web-account-topbar"}>
                    <input />
                </div>
            </div>
        </div>
    );
};

export default Account;
