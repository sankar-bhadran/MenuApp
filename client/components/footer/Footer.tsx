import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#161616] flex flex-col justify-between py-5 px-10 text-white gap-5 md:flex md:flex-row">
      <div className="text-[15px]">
        <span>© 2024 Deepnetsoft Solutions. All rights reserved.</span>
      </div>
      <div className=" flex flex-col gap-5 md:flex md:flex-row space-x-3">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
