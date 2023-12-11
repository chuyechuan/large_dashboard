"use client";

import Image from "next/image";
import Map from "@/components/Map";

const Content = () => {
  return (
    <div className="flex flex-1 justify-center">
      {/* <Image src="/images/map_kv.svg" width={800} height={200} alt="map" /> */}
      <Map />
    </div>
  );
};

export default Content;
