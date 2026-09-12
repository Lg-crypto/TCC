import type { IconType } from "react-icons";
import {
  LuBriefcaseBusiness,
  LuCar,
  LuHouse,
  LuShoppingCart,
  LuTv,
  LuUtensils,
  LuWalletCards,
} from "react-icons/lu";
import type { RecordType } from "../types/recordType";

export type DashboardPeriod = "7D" | "1M" | "3M" | "6M" | "1A";
export const dashboardPeriods: DashboardPeriod[] = ["7D", "1M", "3M", "6M", "1A"];

export const categoryDetails: Record<string, { label: string; icon: IconType }> = {
  Salary: { label: "Salário", icon: LuWalletCards },
  House: { label: "Aluguel / Casa", icon: LuHouse },
  Shopping: { label: "Mercado / Compras", icon: LuShoppingCart },
  Food: { label: "Alimentação", icon: LuUtensils },
  Entertainment: { label: "Entretenimento", icon: LuTv },
  Transport: { label: "Transporte", icon: LuCar },
  Other: { label: "Outros", icon: LuBriefcaseBusiness },
};

export function getRecordDate(record: RecordType) {
  if (record.dateKey) return new Date(`${record.dateKey}T12:00:00`);
  const [day, month, year] = record.date.split("/");
  return new Date(Number(year), Number(month) - 1, Number(day), 12);
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

export function getDateHeading(record: RecordType) {
  const date = getRecordDate(record);
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.getTime() === today.getTime()) return "Hoje";
  if (date.getTime() === yesterday.getTime()) return "Ontem";
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}
