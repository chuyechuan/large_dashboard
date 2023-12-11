import Image from "next/image";
import Title from "./Title";

const Footer = () => {
  const data = ["这是一条告警信息"];

  return (
    <div className="w-full py-2 overflow-hidden h-40">
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
    </div>
  );
};

export default Footer;
