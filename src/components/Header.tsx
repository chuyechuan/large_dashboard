import Image from "next/image";
import Box from "@/components/Box";

const Header = () => {
  return (
    <div className="w-full flex p-5 justify-center">
      {/* <Box> */}
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
