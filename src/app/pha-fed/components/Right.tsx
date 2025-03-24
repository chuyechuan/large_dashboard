"use client";

import { Area } from "@ant-design/plots";
import Select from "antd/es/select";
import { useState } from "react";
import Title from "@/components/Title";
import BarChart from "@/components/BarChart";
import AreaChart from "@/components/AreaChart";
import Image from "next/image";

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

// 照片墙
const PhotoWall = ({ color }: { color: string }) => {
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

  const coverList = [
    'https://www.law966.com/image/jszs/redlight.jpg',
    'https://www.law966.com/image/jszs/redlight.jpg',
    'https://www.law966.com/image/jszs/redlight.jpg',
    'https://www.law966.com/image/jszs/redlight.jpg',
    'https://www.law966.com/image/jszs/redlight.jpg',
  ]

  return (
    <div className="backdrop-blur-xl bg-white/10 p-2 rounded-lg overflow-auto h-full scroll-smooth">
      <Title color={color}>
        <div className="w-full flex justify-between gap-2">
          <p className="text-white">照片墙</p>
          {/* <Select
            options={selects}
            value={value}
            onChange={setValue}
            dropdownStyle={{ width: 200, backgroundColor: '#ffffff30', color: "#ffffff" }}
          /> */}
        </div>
      </Title>
      <div className="flex gap-2 flex-1 flex-col">
        {coverList.map((item, index) => (
          <div key={index} className="relative w-full h-[200px]">
            <Image src={item} fill alt="traffic" />
            {/* <div className="absolute bottom-0 left-0 w-full text-center text-white backdrop-blur-xl bg-white/10 py-1">{item.label}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ({ color }: { color: string }) => {
  return (
    <div className="flex flex-col gap-2 flex-1 h-full pb-3 overflow-hidden">
      {/* <TimePredict color={color} />
      <Offset color={color} />
      <FaultyTime color={color} /> */}
      <PhotoWall color={color} />
    </div>
  );
};
