import React from "react";
import Image from "next/image";

export default function Title({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div 
    className={`p-2 my-2 flex border-[#18FEFE] border-b-2 relative z-5`} 
    style={{ backgroundImage: `linear-gradient(to right, ${color}, rgba(255, 255, 255, 0.1))` }}>
      <Image className="mr-2" src="/images/subtract.svg" width={20} height={20} alt="subtract" />
      {children}
    </div>
  );
}
