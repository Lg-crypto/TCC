import styles from "./home.module.css";
import SideMenu from "../components/layout/sideMenu"
import Window from "../components/layout/window";
import LineChart from "../components/lineChart";
import RegisterCard from "../components/layout/registerCard";

export default function Home() {
    
    return (
        <>
            <div className={styles.container}>
                <SideMenu></SideMenu>
                <div className={styles.content}>
                    <Window width="80%" height="400px">
                        <LineChart
                            name="Ganhos (%)"
                            categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                            data={[30, 40, 35, 50, 49, 60, 35, 40, 49, 50, 39, 60]}
                        >
                        </LineChart>
                    </Window>
                    <Window
                        width="20vw"
                        height="calc(100vh - 24px)"
                        padding="0px"
                    >
                        <RegisterCard
                            isGain={false}
                            value={1500.00}
                            description="House Rent"
                            date="08/05/2026"
                            destination="House"
                        ></RegisterCard>
                        <RegisterCard
                            isGain={false}
                            value={121.67}
                            description="Burger King"
                            date="07/05/2026"
                            destination="Food"
                        ></RegisterCard>
                        <RegisterCard
                            isGain={true}
                            value={1621.67}
                            description="salary"
                            date="07/05/2026"
                            source="Monthly salary"
                        ></RegisterCard>
                    </Window>
                </div>
            </div>
        </>
    );
}