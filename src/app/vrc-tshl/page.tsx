import Header from "./components/Header";
import Side from "./components/Side";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Right from "./components/Right";
import Left from "./components/Left/Left";

export default function Home() {
  const color = "#1d4ed850";
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center overflow-hidden">
      <Content />
      <Header
        title="VRC-FSHL的交通流量实时预测"
        subtitle="Real-time traffic flow prediction based on VRC-FSHL"
        cover="/images/header-bg.svg" />
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
  );
}
