import React from "react";
import Image from "next/image";

export default function Title({ children }: any) {
  return (
    <div className="p-2 my-2 flex border-[#18FEFE] border-b-2 bg-gradient-to-r from-indigo-500/50 to-white-500 relative z-5">
      <Image className="mr-2" src="/images/subtract.svg" width={20} height={20} alt="subtract" />
      {children}
    </div>
  );
}
