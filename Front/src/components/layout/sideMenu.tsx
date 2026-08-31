import { Link } from "react-router-dom";
import styles from "./sideMenu.module.css"
import { IoPersonCircle } from "react-icons/io5";
import { LuHouse, LuChartNoAxesColumn, LuUsers, LuPlus } from "react-icons/lu";


export default function SideMenu (){
    return (
        <aside className={styles.container}>
            <nav className={styles.navigation}>
                <Link to="/profile" className={styles.link}>
                    <IoPersonCircle size={45}></IoPersonCircle>
                </Link>
                <Link to="/" className={styles.link}>
                    <LuHouse size={40}></LuHouse>
                </Link>
                <Link to="/home" className={styles.link}>
                    <LuChartNoAxesColumn size={40}></LuChartNoAxesColumn>
                </Link>
                <Link to="/home/new" className={styles.link}>
                    <LuPlus size={40}></LuPlus>
                </Link>
                <Link to="/about" className={styles.link +" "+ styles.aboutButton}>
                    <LuUsers size={40}></LuUsers>
                </Link>
            </nav>
        </aside>
    );
}