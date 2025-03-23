"use client";

import { G2, Gauge, Rose } from "@ant-design/charts";
import { Column, Pie } from "@ant-design/plots";
import Title from "./Title";
import { Carousel, Select } from "antd";
import { useState } from "react";
import Image from "next/image";
import "./index.css";

const DemoPie = () => {
  const data = [
    {
      type: "分类一",
      value: 27,
    },
    {
      type: "分类二",
      value: 25,
    },
    {
      type: "分类三",
      value: 18,
    },
    {
      type: "分类四",
      value: 15,
    },
    {
      type: "分类五",
      value: 10,
    },
    {
      type: "其他",
      value: 5,
    },
  ];
  const config = {
    height: 200,
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

const DemoRose = () => {
  const data = [
    {
      type: "分类一",
      value: 27,
    },
    {
      type: "分类二",
      value: 25,
    },
    {
      type: "分类三",
      value: 18,
    },
    {
      type: "分类四",
      value: 15,
    },
    {
      type: "分类五",
      value: 10,
    },
    {
      type: "其他",
      value: 5,
    },
  ];
  const config = {
    height: 200,
    data,
    xField: "type",
    yField: "value",
    seriesField: "type",
    radius: 0.9,
    legend: {
      position: "bottom",
    },
  };
  return <Rose {...config} />;
};

const DemoGauge = () => {
  const { registerShape, Util } = G2; // 自定义 Shape 部分

  registerShape("point", "custom-gauge-indicator2", {
    draw(cfg, container) {
      // 使用 customInfo 传递参数
      const { indicator, defaultColor } = cfg.customInfo;
      const { pointer, pin } = indicator;
      const group = container.addGroup(); // 获取极坐标系下画布中心点

      const center = this.parsePoint({
        x: 0,
        y: 0,
      }); // 绘制指针

      if (pointer) {
        const { startAngle, endAngle } = Util.getAngle(cfg, this.coordinate);
        const radius = this.coordinate.getRadius();
        const midAngle = (startAngle + endAngle) / 2;
        const { x: x1, y: y1 } = Util.polarToCartesian(
          center.x,
          center.y,
          radius / 15,
          midAngle + 1 / Math.PI
        );
        const { x: x2, y: y2 } = Util.polarToCartesian(
          center.x,
          center.y,
          radius / 15,
          midAngle - 1 / Math.PI
        );
        const { x, y } = Util.polarToCartesian(
          center.x,
          center.y,
          radius * 0.65,
          midAngle
        );
        const { x: x0, y: y0 } = Util.polarToCartesian(
          center.x,
          center.y,
          radius * 0.1,
          midAngle + Math.PI
        );
        const path = [
          ["M", x0, y0],
          ["L", x1, y1],
          ["L", x, y],
          ["L", x2, y2],
          ["Z"],
        ]; // pointer

        group.addShape("path", {
          name: "pointer",
          attrs: {
            path,
            fill: defaultColor,
            ...pointer.style,
          },
        });
      }

      if (pin) {
        const pinStyle = pin.style || {};
        const {
          lineWidth = 2,
          fill = defaultColor,
          stroke = defaultColor,
        } = pinStyle;
        const r = 6;
        group.addShape("circle", {
          name: "pin-outer",
          attrs: {
            x: center.x,
            y: center.y,
            ...pin.style,
            fill: "transparent",
            r: r * 1.5,
            lineWidth,
            stroke: stroke,
          },
        });
        group.addShape("circle", {
          name: "pin-inner",
          attrs: {
            x: center.x,
            y: center.y,
            r,
            stroke: "transparent",
            fill,
          },
        });
      }

      return group;
    },
  });
  const config = {
    height: 200,
    percent: 0.78,
    range: {
      color: "#30BF78",
    },
    indicator: {
      shape: "custom-gauge-indicator2",
      pointer: {
        style: {
          stroke: "#D0D0D0",
          lineWidth: 1,
          fill: "#D0D0D0",
        },
      },
      pin: {
        style: {
          lineWidth: 2,
          stroke: "#D0D0D0",
          fill: "#D0D0D0",
        },
      },
    },
  };
  return <Gauge {...config} />;
};

// 柱状图
const BarChart = ({ data }: { data: any[] }) => {

  const config = {
    data,
    xField: 'type',
    yField: 'value',
    style: {
      height: 240,
      fill: (originData) => {
        const val = parseFloat(originData.value);
        if (val < 0.05) {
          return '#22CBCC';
        }
        return '#2989FF';
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
  };
  return <Column {...config} />;
};

// 交通事故数量
const TrafficAccidents = () => {
  const data = Array.from({ length: 10 }).map((_, index) => ({
    type: new Date(`2025-03-0${index + 1}`).toLocaleString().substring(5, 8),
    value: Math.round(Math.random() * 100),
  }))
  return (
    <div className="backdrop-blur-xl bg-white/10 p-2  rounded-lg overflow-hidden">
      <Title>
        <p className="text-white">交通事件数量</p>
      </Title>
      <BarChart data={data} />
    </div>
  );
};

// 交通拥堵指数
const TrafficCongestion = () => {
  const data = Array.from({ length: 10 }).map((_, index) => ({
    type: new Date(`2025-03-0${index + 1}`).toLocaleString().substring(5, 8),
    value: Math.round(Math.random() * 100),
  }))
  return (
    <div className="backdrop-blur-xl bg-white/10 p-2  rounded-lg overflow-hidden">
      <Title>
        <p className="text-white">交通拥堵指数</p>
      </Title>
      <BarChart data={data} />
    </div>
  );
};

// 交通事件类型
const TrafficEventTypes = () => {
  const [value, setValue] = useState('person');
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const contentStyle = {
    textAlign: 'center',
    lineHeight: '160px',
    color: '#fff',
    fontSize: 20,
    fontWeight: 500,
    height: '160px',
  };

  const selects = [
    { value: 'person', label: <span>礼让行人</span> },
    { value: 'illegal_parking', label: <span>违法停车</span> },
    { value: 'illegal_occupation_of_roads', label: <span>违法占道</span> },
    { value: 'red_light', label: <span>闯红灯</span> },
    { value: 'dashed_line', label: <span>实线变道</span> },
  ]
  return (
    <div className="backdrop-blur-xl bg-white/10 p-2  rounded-lg overflow-hidden">
      <Title>
        <div className="w-full flex justify-between gap-2">
          <p className="text-white">交通事件类型</p>
          <Select
            options={selects}
            value={value}
            onChange={setValue}
            dropdownStyle={{ width: 200, backgroundColor: '#ffffff30', color: "#ffffff" }}
          />
        </div>
      </Title>
      <Carousel afterChange={onChange}>
        {selects.map((item) => item.value === value && (
          <div key={item.value} className="relative h-[200px]">
            <Image src="https://www.law966.com/image/jszs/redlight.jpg" fill alt="traffic" />
            <div className="absolute bottom-0 left-0 w-full text-center text-white backdrop-blur-xl bg-white/10 py-1">{item.label}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default () => (
  <>
    <div className="flex flex-col gap-2">
      <TrafficAccidents />
      <TrafficCongestion />
      <TrafficEventTypes />
    </div>
  </>
);
