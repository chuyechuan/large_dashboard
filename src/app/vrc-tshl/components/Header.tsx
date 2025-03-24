import Image from "next/image";

const Header = ({ title, subtitle, cover }: { title: string; subtitle: string; cover: string }) => {
  return (
    <div className="w-full flex relative mb-2">
      <div className="w-full h-[70px]">
        <Image
          src={cover}
          fill
          objectFit="cover"
          alt="header"
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl flex flex-col text-center leading-5"
          style={{ textShadow: '0 0 10px #1890ff' }}
        >
          <span>{title}</span>
          <span className="text-[10px] h-fit">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
