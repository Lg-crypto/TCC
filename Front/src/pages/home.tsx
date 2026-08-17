import styles from "./home.module.css";
import SideMenu from "../components/layout/sideMenu";
import Window from "../components/layout/window";
import LineChart from "../components/lineChart";
import RegisterCard from "../components/layout/registerCard";

import { type RecordType } from "../types/recordType";
import { groupRecordsByDate } from "../functions/GroupRecordsByDate";

export default function Home() {

    const records: RecordType[] = [
        {
            gain: false,
            value: 1500,
            date: "15/08/2026",
            description: "House rent",
            destination_or_source: "House"
        },
        {
            gain: false,
            value: 121.67,
            date: "14/08/2026",
            description: "Combo from Burger King",
            destination_or_source: "Food"
        },
        {
            gain: true,
            value: 1621.67,
            date: "13/08/2026",
            description: "Salary",
            destination_or_source: "Salary"
        },
        {
            gain: false,
            value: 340.50,
            date: "12/08/2026",
            description: "Supermarket shopping",
            destination_or_source: "Food"
        },
        {
            gain: true,
            value: 850.00,
            date: "10/08/2026",
            description: "Freelance web development",
            destination_or_source: "Other"
        },
        {
            gain: false,
            value: 185.30,
            date: "08/08/2026",
            description: "Electricity bill",
            destination_or_source: "House"
        },
        {
            gain: false,
            value: 119.90,
            date: "05/08/2026",
            description: "Fiber internet subscription",
            destination_or_source: "House"
        },
        {
            gain: true,
            value: 25.40,
            date: "04/08/2026",
            description: "Credit card cashback",
            destination_or_source: "Other"
        },
        {
            gain: false,
            value: 200.00,
            date: "02/08/2026",
            description: "Gas station",
            destination_or_source: "Transport"
        },
        {
            gain: false,
            value: 75.00,
            date: "01/08/2026",
            description: "Movie ticket and snacks",
            destination_or_source: "Entertainment"
        }
    ];
    const groupedRecords = groupRecordsByDate(records);

    const lineChartCategories = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
    const lineChartData = [
        30, 40, 35, 50, 49, 60, 35, 40, 49, 50, 39, 60
    ]


    return (
        <>
            <div className={styles.container}>

                <SideMenu />

                <div className={styles.content}>

                    <Window width="80%" height="400px">
                        <LineChart
                            name="Ganhos (%)"
                            categories={lineChartCategories}
                            data={lineChartData}
                        />
                    </Window>

                    <Window
                        width="73%"
                        height="400px"
                        className={styles.bottomWindow}
                    >
                        Aqui tera relatorios de registros e outros...
                    </Window>

                    <Window
                        width="20vw"
                        height="calc(100vh - 24px)"
                        padding="0px"
                        className={styles.cardsContainer}
                    >
                        {
                            groupedRecords.map((group) => (
                                <div
                                    key={group.title}
                                    className={styles.recordGroup}
                                >

                                    <h3 className={styles.recordGroupDates}>{group.title}</h3>

                                    {
                                        group.records.map((record, index) => (
                                            <RegisterCard
                                                key={`${group.title}-${index}`}
                                                isGain={record.gain}
                                                value={record.value}
                                                description={record.description}
                                                date={record.date}
                                                destination_or_source={
                                                    record.destination_or_source
                                                }
                                            />
                                        ))
                                    }

                                </div>
                            ))
                        }
                    </Window>

                </div>
            </div>
        </>
    );
}