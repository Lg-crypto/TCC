import type { RecordType } from "../types/recordType";

type ChartData = {
    categories: string[];
    data: number[];
};

export function getChartData(records: RecordType[]): ChartData {
    // Agrupa os registros pela data
    const recordsByDate = records.reduce((acc, record) => {
        const date = record.dateKey;

        if (!acc[date]) {
            acc[date] = [];
        }

        acc[date].push(record);

        return acc;
    }, {} as Record<string, RecordType[]>);


    // Coloca as datas em ordem crescente
    const sortedDates = Object.keys(recordsByDate).sort();


    let balance = 0;

    const categories: string[] = [];
    const data: number[] = [];


    sortedDates.forEach((date) => {
        const dailyRecords = recordsByDate[date];


        // Calcula todas as entradas e saídas do dia
        dailyRecords.forEach((record) => {
            const value = Number(record.value);

            if (record.gain) {
                balance += value;
            } else {
                balance -= value;
            }
        });


        // Formata a data para aparecer no gráfico
        const formattedDate = new Date(
            `${date}T00:00:00`
        ).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
        });


        categories.push(formattedDate);
        data.push(balance);
    });


    return {
        categories,
        data,
    };
}