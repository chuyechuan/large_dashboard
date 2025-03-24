"use client";

import { Area } from "@ant-design/plots";
import Select from "antd/es/select";
import { useState } from "react";
import Title from "@/components/Title";
import BarChart from "@/components/BarChart";
import AreaChart from "@/components/AreaChart";

const TimePredict = ({ color }: { color: string }) => {
  const [value, setValue] = useState('all');
  const selects = [
    { value: 'all', label: <span>全局</span> },
    { value: 'qingshan', label: <span>青山路</span> },
    { value: 'yuexing', label: <span>岳兴路</span> },
    { value: 'wanglong', label: <span>旺龙路</span> },
    { value: 'jianshanhu', label: <span>尖山湖路</span> },
  ]
  return <div className="backdrop-blur-xl bg-white/10 p-2 rounded-lg overflow-hidden">
    <Title color={color}>
      <div className="w-full flex justify-between gap-2">
        <p className="text-white">时间预测准确率</p>
        <Select
          options={selects}
          value={value}
          onChange={setValue}
          dropdownStyle={{ width: 200, backgroundColor: '#ffffff30', color: "#ffffff" }}
        />
      </div>
    </Title>
    <AreaChart data={new Array(7).fill(0).map((_, i) => ({
      date: new Date(`2025-03-01 ${i + 1}:00`).toLocaleString().substring(9, 14),
      value: Math.random() * 50,
    }))} />
  </div>
};

const Offset = ({ color }: { color: string }) => {
  return <div className="backdrop-blur-xl bg-white/10 p-2 rounded-lg overflow-hidden">
    <Title color={color}>
      <p className="text-white">偏移时间准确率</p>
    </Title>
    <AreaChart data={new Array(7).fill(0).map((_, i) => ({
      date: new Date(`2025-03-01 ${i + 1}:00`).toLocaleString().substring(9, 14),
      value: Math.random() * 50,
    }))} />
  </div>
};

export default ({ color }: { color: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <TimePredict color={color} />
      <Offset color={color} />
    </div>
  );
};
