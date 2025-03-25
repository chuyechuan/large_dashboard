import Header from "@/components/Header";
import Side from "@/components/Side";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Right from "@/components/Right";
import Left from "@/components/Left/Left";
import { Suspense } from 'react';

export default function Home() {
  const color = "#6366f150";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex min-h-screen max-h-screen flex-col items-center overflow-hidden">
        <Content />
        <Header
          title="基于MCHFL的交通信号灯控制"
          subtitle="Traffic Light Control Based on MCHFL"
          cover="/images/header-purple.svg" />
        <div className="w-full flex-1 flex flex-row px-7 bg-blue-500 overflow-hidden">
          <Side>
            <Left color={color} />
          </Side>
          <div className="flex flex-1 flex-col justify-end">
            <Footer color={color} />
          </div>
          <Side>
            <Right color={color} />
          </Side>
        </div>
      </main>
    </Suspense>
  );
}
