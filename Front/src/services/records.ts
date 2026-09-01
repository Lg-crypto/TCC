import { addDoc, collection } from "firebase/firestore";
import type { RecordType } from "../types/recordType";
import { db } from "./firebase";

type NewRecord = Omit<RecordType, "id">;

export function createRecord(userId: string, record: NewRecord) {
  return addDoc(collection(db, "users", userId, "records"), record);
}
