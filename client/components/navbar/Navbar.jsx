import React from "react";
import Ham from "@/public/ci_hamburger-md.svg";
import Log from "@/public/LogoOne.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-[#121618] flex justify-between h-[65px] p-8 px-7 gap-[-10px] text-white relative">
        <div className=" hidden md:block  ml-24 ">
          <Link href="/">
            <h2>DeepNetSoft</h2>
          </Link>
        </div>
        <div>
          <Image
            src={Log}
            alt="helvetiaLogo"
            className=" block md:hidden w-[50px] h-[44px] absolute top-10 left-1/2 transform -translate-x-1/2 z-10"
          />
        </div>
        <div className="hidden md:block felx space-x-10">
          <span className="hover:text-[#0796EF] transition duration-200">
            Home
          </span>
          <span className="hover:text-[#0796EF] transition duration-200">
            Menu
          </span>
          <span className="hover:text-[#0796EF] transition duration-200">
            Make a Reservation
          </span>
          <span className="hover:text-[#0796EF] transition duration-200">
            Contact Us
          </span>
        </div>
        <div className="block md:hidden">
          <Image src={Ham} alt="helvetiaLogo" className="w-[19px] h-[19px]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
