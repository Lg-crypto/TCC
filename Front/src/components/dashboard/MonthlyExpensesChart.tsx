import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { formatCurrency } from "../../functions/financeDashboard";

type MonthlyExpense = { label: string; value: number };
export default function MonthlyExpensesChart({
  data,
}: {
  data: MonthlyExpense[];
}) {
  const options: ApexOptions = {
    chart: {
      toolbar: { show: false },
      background: "transparent",
      fontFamily: "Poppins, sans-serif",
    },
    colors: ["#777af0"],
    plotOptions: { bar: { borderRadius: 3, columnWidth: "60%" } },
    xaxis: {
      categories: data.map((item) => item.label),
      labels: { style: { colors: "#8d909a", fontSize: "9px" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (value) =>
          value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value.toFixed(0),
        style: { colors: "#8d909a", fontSize: "9px" },
      },
    },
    grid: { borderColor: "#313239", strokeDashArray: 3 },
    dataLabels: { enabled: false },
    tooltip: { theme: "dark", y: { formatter: formatCurrency } },
  };
  return (
    <ReactApexChart
      options={options}
      series={[{ name: "Despesas", data: data.map((item) => item.value) }]}
      type="bar"
      height={210}
    />
  );
}
