import { Link } from "react-router-dom";
import styles from "./sideMenu.module.css"
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuHouse, LuChartNoAxesColumn, LuPlus, LuUsers } from "react-icons/lu";
export default function SideMenu (){
    return (
        <aside className={styles.container}>
            <nav className={styles.navigation}>
                <Link to="/profile" className={styles.link}>
                    <IoPersonCircleOutline size={45}></IoPersonCircleOutline>
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
                <Link to="/about" className={styles.link}>
                    <LuUsers size={40}></LuUsers>
                </Link>
            </nav>
        </aside>
    );
}