import Header from "@/components/Header";
import Side from "@/components/Side";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Right from "@/components/Right";
import Left from "@/components/Left";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-between overflow-hidden">
      <Header />
      <div className="w-full flex flex-1 flex-row">
        <Side>
          <Left />
        </Side>
        <div className="flex flex-1 flex-col">
          <Content />
          <Footer />
        </div>
        <Side>
          <Right />
        </Side>
      </div>
    </main>
  );
}
