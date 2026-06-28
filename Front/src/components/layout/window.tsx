import { type ReactNode } from "react"
import styles from "./window.module.css";

interface WindowProps{
    width: string,
    height: string,
    padding?: string,
    children?: ReactNode,
    className?: string,
}

export default function Window ({width, height, padding, children, className}: WindowProps) {
    return(
        <div className={`${styles.window} ${className}`} style={{width: width, height: height, padding}}>
            {children}
        </div>
    )
}