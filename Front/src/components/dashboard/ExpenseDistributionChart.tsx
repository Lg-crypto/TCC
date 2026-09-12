import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import {
  categoryDetails,
  formatCurrency,
} from "../../functions/financeDashboard";

type CategoryExpense = [string, number];
type ExpenseDistributionChartProps = {
  data: CategoryExpense[];
  contentClassName: string;
  legendClassName: string;
  emptyClassName: string;
};
const colors = ["#787cf2", "#19d0a8", "#bf8af7", "#f1b662", "#f16b8a"];

export default function ExpenseDistributionChart({
  data,
  contentClassName,
  legendClassName,
  emptyClassName,
}: ExpenseDistributionChartProps) {
  if (!data.length)
    return (
      <div className={`${contentClassName} ${emptyClassName}`}>
        Nenhuma despesa encontrada.
      </div>
    );

  const total = data.reduce((sum, [, value]) => sum + value, 0);
  const options: ApexOptions = {
    labels: data.map(
      ([category]) => categoryDetails[category]?.label || category,
    ),
    colors,
    legend: { show: false },
    dataLabels: { enabled: false },
    stroke: { colors: ["#222328"], width: 2 },
    plotOptions: {
      pie: {
        donut: {
          size: "67%",
          labels: {
            show: true,
            value: { fontSize: "14px", color: "#ffffff" },
            total: {
              show: true,
              label: "TOTAL",
              color: "#8d909a",
              fontSize: "16px",
              formatter: () => formatCurrency(total),
            },
          },
        },
      },
    },
    tooltip: { theme: "dark", y: { formatter: formatCurrency } },
  };

  return (
    <div className={contentClassName}>
      <ReactApexChart
        options={options}
        series={data.map(([, value]) => value)}
        type="donut"
        width={170}
        height={190}
      />
      <div className={legendClassName}>
        {data.map(([category, value], index) => (
          <div key={category}>
            <span style={{ backgroundColor: colors[index % colors.length] }} />
            <b>{categoryDetails[category]?.label || category}</b>
            <small>{formatCurrency(value)}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
