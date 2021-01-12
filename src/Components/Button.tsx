import * as React from "react";
import { CSSProperties, useState } from "react";
import "../Css/Button.css";

interface ButtonProps {
    title: string;
    variant?: "Text" | "Outlined" | "Contained";
    color?: string;
    textColor?: string;
    textSize?: string;
    style?: CSSProperties;
    className?: string;
    onClick?: () => void;
}

const Button = ({
    title,
    variant,
    color,
    textColor,
    textSize,
    style,
    className,
    onClick,
}: ButtonProps) => {
    const [hovered, setHovered] = useState(false);
    const padding = () => {
        switch (variant) {
            case "Text":
                return "10px 0px";
            case "Contained":
                return "20px 40px";
            case "Outlined":
                return "5px 10px";
            default:
                return "10px 30px";
        }
    };
    const backgroundColor = () => {
        switch (variant) {
            case "Contained":
                return color;
            case "Outlined": {
                return hovered ? color : "";
            }
            default:
                return "";
        }
    };

    return (
        <div
            role={"button"}
            className={`ButtonBase ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                ...style,
                border: variant === "Outlined" ? `solid 2px ${color}` : "none",
                backgroundColor: backgroundColor(),
                color: hovered && variant === "Outlined" ? "white" : textColor,
                padding: padding(),
                fontSize: textSize,
            }}
            onClick={() => {
                if (!onClick) return;
                onClick();
            }}
        >
            {title}
        </div>
    );
};

Button.defaultProps = {
    variant: "contained",
    color: "white",
    textColor: "black",
    textSize: "16px",
    style: {},
    className: "",
    onClick: () => {},
};

export default Button;
