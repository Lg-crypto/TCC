import { type RecordType } from "../types/recordType";

type RecordGroup = {
    title: string;
    date: Date;
    records: RecordType[];
};

export function groupRecordsByDate(records: RecordType[]): RecordGroup[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const groups: Record<string, RecordGroup> = {};

    records.forEach((record) => {
        const [day, month, year] = record.date.split("/");

        const recordDate = new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
        );

        recordDate.setHours(0, 0, 0, 0);

        let title: string;

        if (recordDate.getTime() === today.getTime()) {
            title = "Hoje";
        } else if (recordDate.getTime() === yesterday.getTime()) {
            title = "Ontem";
        } else {
            title = record.date;
        }

        if (!groups[title]) {
            groups[title] = {
                title,
                date: recordDate,
                records: []
            };
        }

        groups[title].records.push(record);
    });

    return Object.values(groups).sort(
        (a, b) => b.date.getTime() - a.date.getTime()
    );
}

export default groupRecordsByDate;