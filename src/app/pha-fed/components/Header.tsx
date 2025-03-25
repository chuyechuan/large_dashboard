import Image from "next/image";
import Link from "next/link";

const Header = ({ title, subtitle, cover }: { title: string; subtitle: string; cover: string }) => {
  return (
    <div className="w-full flex relative mb-2">
      <div className="w-full h-[70px]">
        <Image
          src={cover}
          fill
          objectFit="cover"
          alt="header"
        />
        <div
          className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl flex justify-center text-center leading-5"
          style={{ textShadow: '0 0 10px #1890ff' }}
        >
          <div className="flex">
            <Link href="/">
              <div className="flex flex-col scale-75 opacity-40 cursor-pointer">
                <span>基于MCHFL的交通信号灯控制</span>
                <span className="text-[10px] h-fit">Traffic Light Control Based on MCHFL</span>
              </div>
            </Link>
            <Link href="/pha-fed">
              <div className="flex flex-col mx-28 cursor-pointer">
                <span>{title}</span>
                <span className="text-[10px] h-fit">{subtitle}</span>
              </div>
            </Link>
            <Link href="/vrc-tshl">
              <div className="flex flex-col scale-75 opacity-40 cursor-pointer">
                <span>VRC-FSHL的交通流量实时预测</span>
                <span className="text-[10px] h-fit">Real-time traffic flow prediction based on VRC-FSHL</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
