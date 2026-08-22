import { Link } from "react-router-dom";
import styles from "./sideMenu.module.css"
import { GoHomeFill, GoGraph } from "react-icons/go";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";

export default function SideMenu (){
    return (
        <aside className={styles.container}>
            <nav className={styles.navigation}>
                <Link to="/profile" className={styles.link}>
                    <IoPersonCircle size={45}></IoPersonCircle>
                </Link>
                <Link to="/" className={styles.link}>
                    <GoHomeFill size={40}></GoHomeFill>
                </Link>
                <Link to="/home" className={styles.link}>
                    <GoGraph size={40}></GoGraph>
                </Link>
                <Link to="/about" className={styles.link}>
                    <IoMdPeople size={40}></IoMdPeople>
                </Link>
            </nav>
        </aside>
    );
}