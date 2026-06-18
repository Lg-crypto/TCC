import { Link, useLocation } from "react-router-dom";
import styles from "./sideMenu.module.css"
import { GoHomeFill, GoGraph } from "react-icons/go";
import { IoPersonCircle } from "react-icons/io5";


export default function SideMenu (){
    return (
        <aside className={styles.container}>
            <nav className={styles.navigation}>
                <Link to="/Login" className={styles.link}>
                    <IoPersonCircle size={45}></IoPersonCircle>
                </Link>
                <Link to="/" className={styles.link}>
                    <GoHomeFill size={40}></GoHomeFill>
                </Link>
                <Link to="/home" className={styles.link}>
                    <GoGraph size={40}></GoGraph>
                </Link>
            </nav>
        </aside>
    );
}