import styles from "./home.module.css";
import SideMenu from "../components/layout/sideMenu"
import Window from "../components/layout/window";
import LineChart from "../components/lineChart";

export default function Home() {
    
    return (
        <>
            <div className={styles.container}>
                <SideMenu></SideMenu>
                <Window width={630} height={400}>
                    <LineChart
                        name="Ganhos (%)"
                        categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
                        data={[30, 40, 35, 50, 49, 60]}
                    >
                    </LineChart>
                </Window>
            </div>
        </>
    );
}