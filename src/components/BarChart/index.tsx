import { Column, ColumnConfig } from "@ant-design/charts";

const BarChart = ({ data, config }: { data: any[]; config?: ColumnConfig }) => {

  const cfg: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'value',
    style: {
      height: 185,
      fill: '#2989FF',
      // fill: (originData) => {
      //   const val = parseFloat(originData.value);
      //   if (val < 0.05) {
      //     return '#22CBCC';
      //   }
      //   return '#2989FF';
      // },
    },
    xAxis: {
      label: {
        style: {
          fill: '#ffffff',
        },
      },
    },
    yAxis: {
      label: {
        style: {
          fill: '#ffffff',
        },
      },
      grid: {
        line: {
          style: {
            stroke: '#eee',
            lineDash: [4, 5],
          },
        },
      },
      // grid: null,
      // tickLine: null,
    },
    // label: {
    //   text: (originData) => {
    //     const val = parseFloat(originData.value);
    //     if (val < 0.05) {
    //       return (val * 100).toFixed(1) + '%';
    //     }
    //     return '';
    //   },
    //   offset: 10,
    // },
    legend: false,
    ...config,
  };
  return <Column {...cfg} />;
};

export default BarChart;