import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import TelephoneIcon from "../../public/telephoneicon.svg";
import EmailIcon from "../../public/formkit_email.svg";
import LocationIcon from "../../public/locationicon.svg";
const SectionTwo = () => {
  return (
    <>
      <div className="bg-[#000000] flex flex-col justify-center items-center  md:flex md:flex-row md:justify-center gap-20 p-32 text-white">
        <div className="flex flex-col border-[0.98px] border-[#FFFFFF]  px-20 py-10 gap-6 rounded-[15px]">
          <span className="text-center text-[16px] leading-[23.71px]">
            Connect with Us
          </span>
          <span className="text-center">
            <p className="text-[16px] leading-[23.71px] flex justify-center items-center gap-3">
              <Image
                src={TelephoneIcon}
                alt="helvetiaLogo"
                className="w-[14.36px] h-[12.18px]"
              />
              +91 9567843340
            </p>
            <p className="text-[16px] leading-[23.71px] flex justify-center items-center gap-3">
              <Image
                src={EmailIcon}
                alt="helvetiaLogo"
                className="w-[14.36px] h-[12.18px]"
              />
              info@deepnetsoft.com
            </p>
          </span>
        </div>
        <div className="flex flex-col border-[0.98px] border-[#FFFFFF] px-20 py-3 gap-6 rounded-[15px] relative md:py-8">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <Image src={Logo} alt="helvetiaLogo" className="w-86 h-76" />
          </div>
          <span className="text-center text-[28px] leading-[53.87px] text-nowrap mt-10">
            DEEP NET SOFT
          </span>
          <div></div>
        </div>

        <div className="flex flex-col border-[0.98px] border-[#FFFFFF] px-20 py-8 gap-6 md:px-20 md:py-10 md:gap-6 md:rounded-[15px] rounded-[15px]">
          <span className="text-center text-[16px] leading-[23.71px]">
            Find us
          </span>
          <span className="text-center flex justify-center items-center gap-5 ">
            <Image
              src={LocationIcon}
              alt="helvetiaLogo"
              className="w-[15.79px] h-[16.01px]"
            />
            <div>
              <p>First floor, Geo infopark, </p>
              <p className="text-nowrap">Infopark EXPY, Kakkanad</p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
