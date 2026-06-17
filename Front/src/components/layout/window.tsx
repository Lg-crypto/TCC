import { type ReactNode } from "react"
import styles from "./window.module.css";

interface WindowProps{
    width: string,
    height: string,
    children?: ReactNode
}

export default function Window ({width, height, children}: WindowProps) {
    return(
        <div className={styles.window} style={{width: width, height: height}}>
            {children}
        </div>
    )
}