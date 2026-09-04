import { NavLink } from "react-router-dom";
import styles from "./sideMenu.module.css";
import { IoPersonCircle } from "react-icons/io5";
import { LuHouse, LuChartNoAxesColumn, LuUsers, LuPlus } from "react-icons/lu";

export default function SideMenu() {
  return (
    <aside className={styles.container}>
      <nav className={styles.navigation}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.activeLink : ""}`
          }
        >
          <IoPersonCircle size={45}></IoPersonCircle>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.activeLink : ""}`
          }
        >
          <LuHouse size={40}></LuHouse>
        </NavLink>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.activeLink : ""}`
          }
        >
          <LuChartNoAxesColumn size={40}></LuChartNoAxesColumn>
        </NavLink>
        <NavLink
          to="/home/new"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.activeLink : ""}`
          }
        >
          <LuPlus size={40}></LuPlus>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${styles.link} ${styles.aboutButton} ${isActive ? styles.activeLink : ""}`
          }
        >
          <LuUsers size={40}></LuUsers>
        </NavLink>
      </nav>
    </aside>
  );
}
