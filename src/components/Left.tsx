"use client";

import { G2, Gauge, Rose } from "@ant-design/charts";
import { Pie } from "@ant-design/plots";
import Title from "./Title";

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

export default () => (
  <>
    <Title>
      <p>标题</p>
    </Title>
    <DemoPie />
    <Title>
      <p>标题</p>
    </Title>
    <DemoRose />
    <Title>
      <p>标题</p>
    </Title>
    <DemoGauge />
  </>
);
