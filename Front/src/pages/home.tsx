import styles from "./home.module.css";
import SideMenu from "../components/layout/sideMenu.js"
import Window from "../components/layout/window.js";

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <SideMenu></SideMenu>
                <Window width={630} height={400}></Window>
            </div>
        </>
    );
}