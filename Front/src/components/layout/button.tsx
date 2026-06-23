import {type ReactNode} from "react"
import styles from "./button.module.css"

interface buttonProps{
    width:  number,
    height: number,
    children: ReactNode
}

export default function Button ({width, height, children}: buttonProps){
    return (
        <button style={{width: width+"px", height: height+"px"}} className={styles.button}>
            {children}
        </button>
    )
}