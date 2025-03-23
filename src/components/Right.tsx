"use client";

import React, { useState, useEffect } from "react";
import { Area, Column } from "@ant-design/plots";
import { Radar } from "@ant-design/charts";
import Title from "./Title";
import Select from "antd/es/select";


const AreaChart = ({ data }: { data: any }) => {
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    style: {
      height: 240,
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

const TimePredict = () => {
  const [value, setValue] = useState('all');
  const selects = [
    { value: 'all', label: <span>全局</span> },
    { value: 'qingshan', label: <span>青山路</span> },
    { value: 'yuexing', label: <span>岳兴路</span> },
    { value: 'wanglong', label: <span>旺龙路</span> },
    { value: 'jianshanhu', label: <span>尖山湖路</span> },
  ]
  return <div className="backdrop-blur-xl bg-white/10 p-2 rounded-lg overflow-hidden">
    <Title>
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

const Offset = () => {
  return <div className="backdrop-blur-xl bg-white/10 p-2 rounded-lg overflow-hidden">
    <Title>
      <p className="text-white">偏移时间准确率</p>
    </Title>
    <AreaChart data={new Array(7).fill(0).map((_, i) => ({
      date: new Date(`2025-03-01 ${i + 1}:00`).toLocaleString().substring(9, 14),
      value: Math.random() * 50,
    }))} />
  </div>
};

export default () => {
  return (
    <div className="flex flex-col gap-2">
      <TimePredict />
      <Offset />
    </div>
  );
};
