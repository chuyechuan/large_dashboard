import Image from "next/image";
import Box from "@/components/Box";

const Header = () => {
  return (
    <div className="w-full flex p-5 justify-center relative">
      {/* <Box> */}
      {/* <Image
        src="/images/head-bg.apng"
        width={1000}
        height={200}
        alt="Picture of the author"
        className=""
      />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">车路智慧协同管理系统</span> */}
      <Image
          src="/images/head.svg"
          width={1000}
          height={200}
          alt="Picture of the author"
        />
      {/* </Box> */}
    </div>
  );
};

export default Header;
