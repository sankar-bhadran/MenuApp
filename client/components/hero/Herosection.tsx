import React from "react";
import Image from "next/image";
import HeroPic from "@/public/images/herosectionpic.png";

const Herosection = () => {
  return (
    <>
      <div className="relative w-[100%] flex flex-col justify-center items-center text-center  h-[311px]">
        <Image
          src={HeroPic}
          layout="fill"
          objectFit="cover"
          alt="helvetiaLogo"
          className="z-0 w-full h-full bg-gradient-to-r from-black/70 to-black/50"
          style={{}}
        />
        <div className="z-10 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-[75px] leading-[111.5px] font-semibold mb-4 font-oswald ">
            Menu
          </h1>
          <div className="text-[14px] leading-[21.82px] font-normal text-center w-[60%] md:w-[668px]">
            <span>
              Please take a look at our menu featuring food, drinks, and brunch.
              If youd like to place an order, use the Order Online button
              located below the menu.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
