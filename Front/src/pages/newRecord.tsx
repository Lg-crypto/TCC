import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/layout/sideMenu";
import Window from "../components/layout/window";
import styles from "./newRecord.module.css";
import { auth } from "../services/firebase";
import { createRecord } from "../services/records";

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
  description: z.string().trim().min(3, "Informe uma descrição com ao menos 3 caracteres."),
  type: z.enum(["Gain", "Expense"]),
  value: z.number().positive("Informe um valor maior que zero."),
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
  const categories = selectedType === "Gain" ? gainCategories : expenseCategories;

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
      navigate("/home");
    } catch (error) {
      console.error(error);
      setSubmitError("Não foi possível salvar o lançamento. Tente novamente.");
    }
  };

  return (
    <>
      <SideMenu />
      <section className={styles.container}>
        <Window className={styles.content} width="90vw" height="90vh">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputGroup">
              <label htmlFor="nameInput">Nome</label>
              <input id="nameInput" type="text" {...register("description")} />
              {errors.description && <p>{errors.description.message}</p>}
            </div>

            <div className="inputGroup">
              <label htmlFor="typeSelect">Tipo</label>
              <select id="typeSelect" {...register("type")}>
                <option value="Gain">Ganho</option>
                <option value="Expense">Gasto</option>
              </select>
            </div>

            <div className="inputGroup">
              <label htmlFor="valueInput">Valor</label>
              <input
                id="valueInput"
                type="number"
                step="0.01"
                min="0.01"
                placeholder="0.00"
                {...register("value", { valueAsNumber: true })}
              />
              {errors.value && <p>{errors.value.message}</p>}
            </div>

            <div className="inputGroup">
              <label htmlFor="categorySelect">Categoria</label>
              <select id="categorySelect" {...register("category")}>
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              {errors.category && <p>{errors.category.message}</p>}
            </div>

            {submitError && <p>{submitError}</p>}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Salvando..." : "Criar registro"}
            </button>
          </form>
        </Window>
      </section>
    </>
  );
}
