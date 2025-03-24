import { Area } from "@ant-design/charts";

const AreaChart = ({ data }: { data: any }) => {
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    style: {
      height: 191,
      fill: 'linear-gradient(-90deg, white 0%, #1890ff 100%)',
    },
    axis: {
      y: { labelFormatter: '~s' },
    },
    line: {
      style: {
        stroke: '#1890ff',
        strokeWidth: 5,
      },
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
    },
    smooth: true,
  };
  return <Area {...config} />;
}

export default AreaChart;