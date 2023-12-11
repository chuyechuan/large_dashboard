"use client";

import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";
import { Radar } from "@ant-design/charts";
import Title from "./Title";

const DemoColumn = () => {
  const data = [
    {
      name: "London",
      月份: "Jan.",
      月均降雨量: 18.9,
    },
    {
      name: "London",
      月份: "Feb.",
      月均降雨量: 28.8,
    },
    {
      name: "London",
      月份: "Mar.",
      月均降雨量: 39.3,
    },
    {
      name: "London",
      月份: "Apr.",
      月均降雨量: 81.4,
    },
    {
      name: "London",
      月份: "May",
      月均降雨量: 47,
    },
    {
      name: "London",
      月份: "Jun.",
      月均降雨量: 20.3,
    },
    {
      name: "London",
      月份: "Jul.",
      月均降雨量: 24,
    },
    {
      name: "London",
      月份: "Aug.",
      月均降雨量: 35.6,
    },
    {
      name: "Berlin",
      月份: "Jan.",
      月均降雨量: 12.4,
    },
    {
      name: "Berlin",
      月份: "Feb.",
      月均降雨量: 23.2,
    },
    {
      name: "Berlin",
      月份: "Mar.",
      月均降雨量: 34.5,
    },
    {
      name: "Berlin",
      月份: "Apr.",
      月均降雨量: 99.7,
    },
    {
      name: "Berlin",
      月份: "May",
      月均降雨量: 52.6,
    },
    {
      name: "Berlin",
      月份: "Jun.",
      月均降雨量: 35.5,
    },
    {
      name: "Berlin",
      月份: "Jul.",
      月均降雨量: 37.4,
    },
    {
      name: "Berlin",
      月份: "Aug.",
      月均降雨量: 42.4,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: "月份",
    yField: "月均降雨量",
    seriesField: "name",

    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: "interval-adjust-position",
        }, // 数据标签防遮挡
        {
          type: "interval-hide-overlap",
        }, // 数据标签文颜色自动调整
        {
          type: "adjust-color",
        },
      ],
    },
  };
  return <Column {...config} />;
};

const DemoRadar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    width: 200,
    height: 200,
    xField: "item",
    yField: "score",
    seriesField: "user",
    meta: {
      score: {
        alias: "分数",
        min: 0,
        max: 80,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: "line",
          style: {
            lineDash: null,
          },
        },
      },
    },
    // 开启面积
    area: {},
    // 开启辅助点
    point: {
      size: 2,
    },
  };

  return <Radar {...config} />;
};

export default () => (
  <div>
    <Title>
      <p>标题</p>
    </Title>
    <DemoColumn />
    <Title>
      <p>标题</p>
    </Title>
    <div className="flex flex-row">
      <DemoRadar />
      <DemoRadar />
    </div>
  </div>
);
