import Header from "@/components/Header";
import Side from "@/components/Side";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Right from "@/components/Right";
import Left from "@/components/Left";

export default function Home() {
  return (
    <>
      <main className="flex w-screen h-screen flex-col fixed top-0 left-0 z-20 mask-y-from-70% mask-y-to-90%">
        <Header />
        <div className="w-full flex flex-1 justify-between">
          <Side>
            <Left />
          </Side>
          <div className="w-52 h-52 col-start-1 row-start-1 rounded-lg bg-[url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=80)] bg-cover bg-center mask-no-repeat mask-r-from-10%"></div>
          <Side>
            <Right />
          </Side>
        </div>
        <div className="flex w-full flex-col self-end">
          <Footer />
        </div>
      </main>
      {/* <Content /> */}
    </>
  );
}
