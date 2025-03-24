import Title from "@/components/Title";
import Slider, { SliderSingleProps } from "antd/es/slider";
import Switch from "antd/es/switch";

// 一键设置故障时间/设置不同故障比例，最高50%
const SetFaultyTime = ({ color }: { color: string }) => {
  const marks: SliderSingleProps['marks'] = {
    0: '0%',
    25: '25%',
    50: '50%',
    75: '75%',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100%</strong>,
    },
  };
  return <div className="w-56 h-26 px-2 backdrop-blur-xl bg-white/10 p-2 rounded-lg overflow-hidden">
    <Title color={color}>
      <p className="text-white">故障比例</p>
    </Title>
    <div className="mx-4">
      <Slider marks={marks} step={null} defaultValue={37} />
    </div>
  </div>
}

// 未来趋势/进度条拖动控制时间
const FutureTrend = ({ color }: { color: string }) => {
  const marks: SliderSingleProps['marks'] = {
    10: '10:00',
    11: '11:00',
    12: '12:00',
    13: '13:00',
    14: '14:00',
    15: '15:00',
  };
  return <div className="w-96 h-26 backdrop-blur-xl bg-white/10 p-2 rounded-lg overflow-hidden">
    <Title color={color}>
      <p className="text-white">未来趋势</p>
    </Title>
    <div className="mx-4">
      <Slider marks={marks} step={null} min={10} max={15} defaultValue={10} />
    </div>
  </div>
}

const Footer = ({ color }: { color: string }) => {
  return (
    <div className="mb-4">
      <div className="flex gap-2">
        {/* <SetFaultyTime color={color} /> */}
        <FutureTrend color={color} />
      </div>

      {/* <div className="w-full py-2 overflow-hidden h-60">
        <Title>
          <div className="flex flex-1">
            <span className="flex-1 pl-3">事件</span>
            <span className="w-20">类型</span>
            <span className="w-24">时间</span>
          </div>
        </Title>
        <div className="w-full border-2 h-full overflow-auto">
          {Array.from({ length: 10 }).map((k, i) => (
            <div className="p-2 flex" key={+i}>
              <span className="flex-1">这是一条告警信息</span>
              <span className="w-20">未关闭</span>
              <span className="w-24">2077-12-11</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
