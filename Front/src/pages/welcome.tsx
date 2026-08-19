import styles from "./welcome.module.css"
import {Link} from "react-router-dom"
import Button from "../components/layout/button";

export default function Welcome(){
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Seja Bem <br /> Vindo</h1>
            <Link to="/about" className={styles.button}>
                <Button width={260} height={65} >
                    <p className={styles.buttonText}>Começar</p>
                </Button>
            </Link>        
        </div>
    );
}