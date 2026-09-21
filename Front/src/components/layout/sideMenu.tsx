import { NavLink } from "react-router-dom";
import styles from "./sideMenu.module.css";
import { IoPersonCircle } from "react-icons/io5";
import { LuChartNoAxesColumn, LuHouse, LuPlus, LuSettings } from "react-icons/lu";

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
          <IoPersonCircle size={25} />
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.activeLink : ""}`
          }
        >
          <LuHouse size={22} />
        </NavLink>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.activeLink : ""}`
          }
        >
          <LuChartNoAxesColumn size={22} />
        </NavLink>
        <NavLink
          to="/newrecord"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.activeLink : ""}`
          }
        >
          <LuPlus size={22} />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${styles.link} ${styles.aboutButton} ${isActive ? styles.activeLink : ""}`
          }
        >
          <LuSettings size={22} />
        </NavLink>
      </nav>
    </aside>
  );
}
