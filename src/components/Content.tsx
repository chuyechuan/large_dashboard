"use client";

import Image from "next/image";
import Map from "@/components/Map";

const Side = ({ direction }: any) => {
  return <div className={`absolute top-0 ${direction === "l" ? "left-0" : "right-0"} w-96 h-full bg-gradient-to-${direction} from-black/0 to-black`}></div>;
};

const Horizon = ({ direction }: any) => {
  return <div className={`absolute ${direction === "t" ? "top-0" : "bottom-0"} w-full h-28 bg-gradient-to-${direction} from-black/0 to-black`}></div>;
};

const Content = () => {
  return (
    <div className="flex flex-1 justify-center absolute top-0 left-0 w-full h-full bg-white">
      {/* <Image src="/images/map_kv.svg" width={800} height={200} alt="map" /> */}
      <div className="flex-1 flex flex-col relative z-2">
        <div className="w-full h-full bg-blue-500 z-1 absolute top-0 left-0">
          <Map />
        </div>
        <Horizon direction="t" />
        {/* <div className="flex-1 flex"> */}
        <Side direction="l" />
        {/* <div className="flex-1"></div> */}
        <Side direction="r" />
        {/* </div> */}
        <Horizon direction="b" />
      </div>
    </div>
  );
};

export default Content;
