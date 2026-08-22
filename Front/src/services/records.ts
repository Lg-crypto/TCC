import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import type { RecordType } from "../types/recordType";

type NewRecord = Omit<RecordType, "id">;

export async function createRecord(userId: string, record: NewRecord) {
  return addDoc(collection(db, "users", userId, "records"), record);
}
