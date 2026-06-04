import { type ReactNode } from "react"
import styles from "./window.module.css";

interface WindowProps{
    width: number,
    height: number,
    children?: ReactNode
}

export default function Window ({width, height, children}: WindowProps) {
    return(
        <div className={styles.window} style={{width: width+"px", height: height+"px"}}>
            {children}
        </div>
    )
}