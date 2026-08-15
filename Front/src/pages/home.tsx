import styles from "./home.module.css";
import SideMenu from "../components/layout/sideMenu"
import Window from "../components/layout/window";
import LineChart from "../components/lineChart";
import RegisterCard from "../components/layout/registerCard";

export default function Home() {
    
    const records = [
        {
            gain: false,
            value: 1500,
            date: '15/08/2026',
            description: 'House rent',
            destination_or_source: 'House'
        },
        {
            gain: false,
            value: 121.67,
            date: '14/08/2026',
            description: 'Combo from Burger King',
            destination_or_source: 'Food'
        },
        {
            gain: true,
            value: 1621.67,
            date: '13/08/2026',
            description: 'Salary',
            destination_or_source: 'Salary'
        },
    ]



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
                    <Window width="73%" height="400px" className={styles.bottomWindow} >
                        Aqui tera relatorios de registros e outros...
                    </Window>
                    <Window
                        width="20vw"
                        height="calc(100vh - 24px)"
                        padding="0px"
                    >
                        {
                            records.map((record)=>{

                                return(
                                    <RegisterCard
                                        isGain={record.gain}
                                        value={record.value}
                                        description={record.description}
                                        date={record.date}
                                        destination_or_source={record.destination_or_source}
                                    ></RegisterCard>
                                )
                            })
                        }
                    </Window>
                </div>
            </div>
        </>
    );
}