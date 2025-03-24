"use client";

import { Carousel, Select } from "antd";
import Image from "next/image";
import { useState } from "react";
import BarChart from "../BarChart";
import "./index.css";
import Title from "../Title";
import { Gauge } from "@ant-design/charts";

// 交通事故数量
const TrafficAccidents = ({ color }: { color: string }) => {
  const data = Array.from({ length: 10 }).map((_, index) => ({
    type: new Date(`2025-03-0${index + 1}`).toLocaleString().substring(5, 8),
    value: Math.round(Math.random() * 100),
  }))
  return (
    <div className="backdrop-blur-xl bg-white/10 p-2  rounded-lg overflow-hidden">
      <Title color={color}>
        <p className="text-white">交通事件数量</p>
      </Title>
      <BarChart data={data} />
    </div>
  );
};

// 交通拥堵指数
const TrafficCongestion = ({ color }: { color: string }) => {
  const data = Array.from({ length: 10 }).map((_, index) => ({
    type: new Date(`2025-03-0${index + 1}`).toLocaleString().substring(5, 8),
    value: Math.round(Math.random() * 100),
  }))
  return (
    <div className="backdrop-blur-xl bg-white/10 p-2  rounded-lg overflow-hidden">
      <Title color={color}>
        <p className="text-white">交通拥堵指数</p>
      </Title>
      <BarChart data={data} />
    </div>
  );
};

// 交通事件类型
const TrafficEventTypes = ({ color }: { color: string }) => {
  const [value, setValue] = useState('person');
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
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
      <Title color={color}>
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

// 实时通行率
const GaugeChart = () => {
  const config = {
    width: 150,
    height: 150,
    autoFit: true,
    data: {
      target: 120,
      total: 400,
      name: 'score',
    },
    legend: false,
  };
  return <Gauge percent={0} {...config} />;
};

// 实时通行率
const RealTimePassingRate = ({ color }: { color: string }) => {
  return <div className="backdrop-blur-xl bg-white/10 p-2  rounded-lg overflow-hidden">
    <Title color={color}>
      <p className="text-white">实时通行率</p>
    </Title>
    <GaugeChart />
  </div>;
};

// 故障恢复时间
const FaultyTime = ({ color }: { color: string }) => {
  const [value, setValue] = useState('0');
  const selects = [
    { value: '0', label: <span>服务器1</span> },
    { value: '1', label: <span>服务器2</span> },
    { value: '2', label: <span>服务器3</span> },
    { value: '3', label: <span>服务器4</span> },
    { value: '4', label: <span>服务器5</span> },
  ]
  const data = new Array(7).fill(0).map((_, i) => ({
    type: `红绿灯${i + 1}`,
    value: new Date(`2025-03-01 ${Math.floor(Math.random() * 24)}:00`).toLocaleString().substring(9, 14),
  }))
  return <div className="backdrop-blur-xl bg-white/10 p-2 rounded-lg overflow-hidden">
    <Title color={color}>
      <div className="w-full flex justify-between gap-2">
        <p className="text-white">故障恢复时间</p>
        {/* <Select
          options={selects}
          value={value}
          onChange={setValue}
          dropdownStyle={{ width: 200, backgroundColor: '#ffffff30', color: "#ffffff" }}
        /> */}
      </div>
    </Title>
    <BarChart
      data={data}
    />
  </div>
};

export default ({ color }: { color: string }) => (
  <>
    <div className="flex flex-col gap-2">
      {/* <TrafficAccidents color={color} />
      <TrafficCongestion color={color} />
      <TrafficEventTypes color={color} /> */}
      <RealTimePassingRate color={color} />
      <FaultyTime color={color} />
    </div>
  </>
);
