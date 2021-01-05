import * as React from 'react';
import {CSSProperties} from 'react';
import '../Css/Button.css'

interface ButtonProps {
    title: string,
    variant?: "Text" | "Outlined" | "Contained",
    color?: string,
    textColor?: string,
    textSize?: string,
    style?: CSSProperties,
    className?: string,
    onClick?: () => void
}

export default function Button({title, variant, color, textColor, textSize, style, className}: ButtonProps) {
    return (
        <div className={`ButtonBase ${className}`} style={{
            ...style,
            border: ((variant || "Contained") === "Outlined") ? `solid 2px ${color || "white"}` : "none",
            backgroundColor: ((variant || "Contained") === "Contained") ? color || "white" : "none",
            color: textColor || "black",
            padding: ((variant || "Contained") === "Text") ? "10px 0px" : ((variant || "Contained") === "Contained") ? "20px 40px" : "10px 30px",
            fontSize: textSize
        }}>
            {title}
        </div>
    )
}
