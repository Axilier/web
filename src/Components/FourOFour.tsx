// @flow
import * as React from "react";
import PageNotFound from "../Assets/PageNotFound.svg";

const FourOFour = () => {
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img src={PageNotFound} alt={"Page not found"} />
        </div>
    );
};

export default FourOFour;
