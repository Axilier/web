// @flow
import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/Account.css";
import axios from "axios";
import {
    AllFiles,
    Button,
    Favourites,
    Recent,
    Search,
    Tab,
    TabMenu,
    TextBox,
} from "core";
import { AppContext } from "../Context";
import WhiteLogo from "../Assets/whiteLogo.svg";

const Account = () => {
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const { apiUrl, setUser } = useContext(AppContext);
    const history = useHistory();

    function handleClickAway(event: MouseEvent) {
        if (
            // @ts-ignore
            event?.target?.className.includes("web-account-dropdown-tile") ||
            // @ts-ignore
            event?.target?.className.includes(
                "web-account-dropdown-open-button"
            )
        )
            return;
        setAccountDropdownOpen(false);
    }

    useEffect(() => {
        window.addEventListener("click", handleClickAway);
        return function cleanup() {
            window.removeEventListener("click", handleClickAway);
        };
    });

    function logout() {
        axios.get(`${apiUrl}/logout`, { withCredentials: true }).then((res) => {
            if (res.status === 200) {
                setUser(null);
                history.push("/");
            }
        });
    }

    return (
        <div className={"web-account-main"}>
            <div className={"web-account-sidebar"}>
                <img
                    src={WhiteLogo}
                    alt={"logo"}
                    className={"web-account-logo"}
                />
                <TabMenu
                    onChange={(value) => value.toString()}
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
                    <div />
                </div>
                <div className={"web-account-content-area"}>
                    <Button
                        className={"web-account-dropdown-open-button"}
                        label={"open"}
                        onClick={() => {
                            setAccountDropdownOpen(true);
                        }}
                    />
                    <div
                        className={`web-account-dropdown ${
                            accountDropdownOpen
                                ? "web-account-dropdown-open"
                                : ""
                        }`}
                    >
                        <div className={"web-account-dropdown-profile"}>
                            <div
                                className={"web-account-dropdown-profile-badge"}
                            />
                            <div
                                className={"web-account-dropdown-profile-info"}
                            >
                                <p>afrenchrussian@gmail.com</p>
                                <p>#00001</p>
                            </div>
                        </div>
                        <div>
                            <div className={"web-account-dropdown-tile"}>
                                My Account
                            </div>
                            <div
                                role={"button"}
                                className={"web-account-dropdown-tile"}
                                onClick={() => logout()}
                            >
                                Log Out
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
