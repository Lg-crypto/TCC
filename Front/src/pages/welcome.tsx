import styles from "./welcome.module.css"

export default function Welcome(){
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Seja Bem <br /> Vindo</h1>
            <button className={styles.button} >Começar</button>
        </div>
    );
}