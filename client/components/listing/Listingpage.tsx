import React from "react";
import Image from "next/image";
import FrameOne from "@/public/images/listinframtwo.png";
import FrameTwo from "@/public/images/listingframone.png";

type MenuItems = {
  id: string;
  itemName: string;
  price: number;
  description: string;
  menuId: string;
};

interface ListingpageProps {
  items: MenuItems[]; // Expecting an array of MenuItems
}
const Listingpage: React.FC<ListingpageProps> = ({ items }) => {
  console.log(items);
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
        <div>
          {items.length > 0 ? (
            items.map((val) => (
              <div className="w-full" key={val.id}>
                <div className="text-xs md:text-lg font-semibold tracking-wide flex items-center">
                  <span>{val.itemName}</span>
                  <span className="flex-1 mx-1 border-b border-dotted border-current"></span>
                  <span>$20</span>
                </div>

                <span className="text-[12px] md:text-[16px] leading-[21.82px] font-normal">
                  <p className="m-0 text-left">
                    Aperol, St Germain, botanical liquor, fresh lime juice, mini
                    brut Moet topper
                  </p>
                </span>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">
              <p>No items found</p>
            </div>
          )}
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
