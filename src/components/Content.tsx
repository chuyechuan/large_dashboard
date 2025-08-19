"use client";

import Image from "next/image";
import Map from "@/components/Map";

const Content = () => {
  return (
    <div className="flex flex-1 justify-center fixed top-0 left-0 right-0 bottom-0 z-1">
      {/* <Image src="/images/map_kv.svg" width={800} height={200} alt="map" /> */}
      {/* <Map /> */}
      <iframe
        // src="https://sketchfab.com/models/2308641716324ddf945c21917a53f42c/embed?autostart=1&internal=1&tracking=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_theatre=1&ui_watermark=0"
        src="https://sketchfab.com/models/a65a3750c68a4e9b885c81c84485cb63/embed?autostart=1&internal=1&tracking=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_theatre=1&ui_watermark=0"
        className="w-full h-fulls"
      ></iframe>
    </div>
  );
};

export default Content;
