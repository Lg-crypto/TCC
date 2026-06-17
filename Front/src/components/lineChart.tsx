import type { ApexOptions, ApexNonAxisChartSeries } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import styles from './lineChart.module.css'


interface LineChartProps{
    categories: string[],
    name:       string,
    data:       number[] 
}

export default function LineChart ({categories, name, data}: LineChartProps){
    const options: ApexOptions = {
        chart: {
            type: 'line',
            toolbar: { show: false } 
        },
        xaxis: {
            categories: categories
        },
        yaxis:{
            axisBorder:{
                show:true
            }
        },
        grid:{
            yaxis:{
                lines:{
                    show: false
                }
            },
        },
        fill: {
            type: 'horizontal',
            
        }
    };

    const series: ApexNonAxisChartSeries = [
        {
            name: name,
            data: data
        }
    ];

  return (
    <ReactApexChart 
        className={styles.chart}
        options={options} 
        series={series} 
        type="line" 
        height={350} 
    />
  );
}