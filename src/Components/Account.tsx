// @flow
import * as React from "react";
import "../Css/Account.css";
import {
    AllFiles,
    Favourites,
    Recent,
    Search,
    Tab,
    TabMenu,
    TextBox,
} from "core";
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
                    onChange={() => {}}
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
                    <TextBox
                        variant={"bare"}
                        size={"large"}
                        prefixComponent={<Search iconColor={"#C4C6CA"} />}
                        placeholder={"Search by: filename, tag, folder...."}
                        inputStyle={{
                            color: "#8D9097",
                        }}
                    />
                    <div className={"web-account-dropdown"} />
                </div>
            </div>
        </div>
    );
};

export default Account;
