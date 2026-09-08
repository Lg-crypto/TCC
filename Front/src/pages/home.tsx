import styles from "./home.module.css";

import SideMenu from "../components/layout/sideMenu";
import Window from "../components/layout/window";
import LineChart from "../components/lineChart";
import RegisterCard from "../components/layout/registerCard";

import { type RecordType } from "../types/recordType";

import { groupRecordsByDate } from "../functions/GroupRecordsByDate";
import { getChartData } from "../functions/GetChartData";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { auth, db } from "../services/firebase";

export default function Home() {
  const [records, setRecords] = useState<RecordType[]>([]);

  useEffect(() => {
    let unsubscribeRecords: (() => void) | undefined;

    const unsubscribeAuth = onAuthStateChanged(auth, (user: any) => {
      unsubscribeRecords?.();

      if (!user) {
        setRecords([]);
        return;
      }

      const recordsQuery = query(
        collection(db, "users", user.uid, "records"),
        orderBy("dateKey", "desc"),
      );

      unsubscribeRecords = onSnapshot(recordsQuery, (snapshot) => {
        setRecords(
          snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          })) as RecordType[],
        );
      });
    });

    return () => {
      unsubscribeAuth();
      unsubscribeRecords?.();
    };
  }, []);

  const groupedRecords = groupRecordsByDate(records);

  // Dados calculados dinamicamente
  const chartData = getChartData(records);

  return (
    <>
      <div className={styles.container}>
        <SideMenu />

        <div className={styles.content}>
          <Window width="80%" height="400px">
            <LineChart
              name="Saldo"
              categories={chartData.categories}
              data={chartData.data}
            />
          </Window>



          <Window
            width="20vw"
            height="calc(100vh - 24px)"
            padding="0px"
            className={styles.cardsContainer}
          >
            {groupedRecords.map((group) => (
              <div key={group.title} className={styles.recordGroup}>
                <h3 className={styles.recordGroupDates}>{group.title}</h3>

                {group.records.map((record, index) => (
                  <RegisterCard
                    key={`${group.title}-${index}`}
                    isGain={record.gain}
                    value={record.value}
                    description={record.description}
                    destination_or_source={record.destination_or_source}
                  />
                ))}
              </div>
            ))}
          </Window>
        </div>
      </div>
    </>
  );
}
