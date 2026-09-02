import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/layout/sideMenu";
import Window from "../components/layout/window";
import styles from "./newRecord.module.css";
import { auth, db } from "../services/firebase";
import { createRecord } from "../services/records";
import RegisterCard from "../components/layout/registerCard";

import { type RecordType } from "../types/recordType";
import { groupRecordsByDate } from "../functions/GroupRecordsByDate";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const gainCategories = [
  { value: "Salary", label: "Salário" },
  { value: "Other", label: "Freelance / Outros" },
];

const expenseCategories = [
  { value: "House", label: "Casa" },
  { value: "Shopping", label: "Mercado / Compras" },
  { value: "Food", label: "Alimentação" },
  { value: "Transport", label: "Transporte" },
  { value: "Entertainment", label: "Entretenimento" },
  { value: "Other", label: "Outros" },
];

const recordSchema = z.object({
  description: z
    .string()
    .trim()
    .min(3, "Informe uma descrição com ao menos 3 caracteres."),
  type: z.enum(["Gain", "Expense"]),
  value: z.number("informe um numero valido").positive("Informe um valor maior que zero."),
  category: z.string().min(1, "Selecione uma categoria."),
});

type FormValues = z.infer<typeof recordSchema>;

function getToday() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  return {
    date: `${day}/${month}/${year}`,
    dateKey: `${year}-${month}-${day}`,
  };
}

export default function NewRecordPage() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(recordSchema),
    defaultValues: {
      type: "Expense",
      category: expenseCategories[0].value,
      description: "",
    },
  });

  const selectedType = watch("type");
  const categories =
    selectedType === "Gain" ? gainCategories : expenseCategories;

  useEffect(() => {
    setValue("category", categories[0].value);
  }, [selectedType, setValue, categories]);

  const onSubmit = async (data: FormValues) => {
    const user = auth.currentUser;

    if (!user) {
      navigate("/login");
      return;
    }

    try {
      setSubmitError("");
      const { date, dateKey } = getToday();

      await createRecord(user.uid, {
        gain: data.type === "Gain",
        value: data.value,
        date,
        dateKey,
        description: data.description,
        destination_or_source: data.category,
      });

      reset();
      //navigate("/home");
    } catch (error) {
      console.error(error);
      setSubmitError("Não foi possível salvar o lançamento. Tente novamente.");
    }
  };

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

  return (
    <>
      <SideMenu />
      <section className={styles.container}>
        <Window className={styles.content} width="90vw" height="90vh">
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fieldsGroup}>
              <div className={styles.fields}>
                <label htmlFor="nameInput">Nome</label>
                <input
                  className={styles.input}
                  id="nameInput"
                  type="text"
                  {...register("description")}
                />
                {errors.description && <p>{errors.description.message}</p>}
              </div>

              <div className={styles.fields}>
                <label htmlFor="typeSelect">Tipo</label>
                <select
                  className={styles.select}
                  id="typeSelect"
                  {...register("type")}
                >
                  <option value="Gain">Ganho</option>
                  <option value="Expense">Gasto</option>
                </select>
              </div>

              <div className={styles.fields}>
                <label htmlFor="valueInput">Valor</label>
                <input
                  className={styles.input}
                  id="valueInput"
                  type="number"
                  step="0.01"
                  min="0.01"
                  placeholder="0.00"
                  {...register("value", { valueAsNumber: true })}
                />
                {errors.value && <p>{errors.value.message}</p>}
              </div>

              <div className={styles.fields}>
                <label htmlFor="categorySelect">Categoria</label>
                <select
                  className={styles.select}
                  id="categorySelect"
                  {...register("category")}
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {errors.category && <p>{errors.category.message}</p>}
              </div>
            </div>
            {submitError && <p>{submitError}</p>}

            <div className={styles.buttonContainer}>
              <button
                className={styles.button}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Salvando..." : "Criar registro"}
              </button>
            </div>
          </form>
          <Window
            width="100%"
            height="500px"
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
        </Window>
      </section>
    </>
  );
}
