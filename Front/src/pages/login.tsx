import styles from "./login.module.css";
import SideMenu from "../components/layout/sideMenu";
import {Link} from "react-router-dom"
import Button from "../components/layout/button"

export default function Login(){
    return (
        <div className={styles.container}>
            <SideMenu></SideMenu>
            <div className={styles.content}>
                <form className={styles.form}>
                    <div className={styles.logo}></div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className={styles.input}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" className={styles.input}/>
                    </div>

                    <Button width={150} height={50} type="submit" className="sendButton">Entrar</Button>
                    <Link to="/register">Ainda não tem uma conta?</Link>
                </form>
            </div>
        </div>
    );
}