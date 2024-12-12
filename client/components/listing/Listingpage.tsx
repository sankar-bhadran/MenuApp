import React from "react";
import Image from "next/image";
import FrameOne from "@/public/images/listinframtwo.png";
import FrameTwo from "@/public/images/listingframone.png";

const Listingpage = () => {
  return (
    <div className="w-[100%] bg-[url('/images/listingbackgroundpic.png')] flex justify-between">
      <Image
        src={FrameOne}
        //   layout="fill"
        //   objectFit="cover"
        alt="helvetiaLogo"
        className="hidden md:block"
      />
      <div className="flex flex-col items-center justify-center p-4 border border-white w-[70%] bg-black/50 text-white rounded-md m-24">
        <span className="text-lg text-center font-bold mb-4">
          BRUNCH COCKTAILS
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center w-full">
          <div className="w-full">
            <div className="text-xs md:text-lg font-semibold tracking-wide flex items-center justify-center">
              <span> CINNAMON TOAST CRUNCH</span>
              <span className="flex-1 mx-1 border-b border-dotted border-current"></span>
              <span>$20</span>
            </div>
            <span className="text-[12px] md:text-[16px] leading-[21.82px] font-normal">
              <p className="m-0 text-left">
                Skrewball peanut butter whiskey, vanilla extract, Amaretto,
                Baileys, egg white, cinnamon
              </p>
            </span>
          </div>
          <div className="w-full">
            <div className="text-xs md:text-lg font-semibold tracking-wide flex items-center">
              <span>MOET SPRITZ</span>
              <span className="flex-1 mx-1 border-b border-dotted border-current"></span>
              <span>$20</span>
            </div>

            <span className="text-[12px]  md:text-[16px] leading-[21.82px] font-normal">
              <p className="m-0 text-left">
                Aperol, St Germain, botanical liquor, fresh lime juice, mini
                brut Moet topper
              </p>
            </span>
          </div>
          <div className="w-full">
            <div className="text-xs md:text-lg font-semibold tracking-wide flex items-center">
              <span>BAR 42 MARY</span>
              <span className="flex-1 mx-1 border-b border-dotted border-current"></span>
              <span>$14</span>
            </div>

            <span className="text-[12px] md:text-[16px] leading-[21.82px] font-normal block">
              <p className="m-0 text-left">
                Titos, tomato juice, worcestershire, celery salt, black pepper,
                tabasco, fully loaded
              </p>
            </span>
          </div>
        </div>
      </div>

      <Image
        src={FrameTwo}
        //   layout="fill"
        //   objectFit="cover"
        alt="helvetiaLogo"
        style={{}}
        className="hidden md:block"
      />
    </div>
  );
};

export default Listingpage;
