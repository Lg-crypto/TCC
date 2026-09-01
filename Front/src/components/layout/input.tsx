import type { UseFormRegisterReturn } from "react-hook-form";
import styles from "./input.module.css"


interface inputProps{
    type: string,
    inputName: string,
    isRequired?: boolean,
    register?: UseFormRegisterReturn
}

export default function Input ({type, isRequired, inputName, register}: inputProps ) {
    return(
        <div className={styles.inputGroup}>
            <input
                type={type}
                id={inputName}
                className={styles.input}
                required={isRequired}
                {...register}
            />
            <label htmlFor={inputName}>{inputName}</label>
        </div>
    )    
}
