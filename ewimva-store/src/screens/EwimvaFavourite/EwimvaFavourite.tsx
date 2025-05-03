import React from "react";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { HeaderByAnima } from "./sections/HeaderByAnima";
import { ItemByAnima } from "./sections/ItemByAnima";
import { ItemWrapperByAnima } from "./sections/ItemWrapperByAnima";
import { ViewByAnima } from "./sections/ViewByAnima";

export const EwimvaFavourite = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full" data-model-id="1:8">
      <div className="bg-white w-full max-w-[1440px] relative">
        <HeaderByAnima />
        
        <div className="px-8 mt-[82px] mb-8">
          <div className="font-bold text-[#131313] text-[12.2px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] mb-2">
            МОИ ФАВОРИТЫ
          </div>
          <div className="font-bold text-[#131313] text-[12.6px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]">
            КАТЕГОРИЯ
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          <div className="relative">
            <ItemByAnima />
            <img
              className="absolute w-[17px] h-[15px] bottom-[35px] right-[28px]"
              alt="Vector"
              src="/vector_favourite.svg"
            />
          </div>
          <ItemWrapperByAnima />
          <DivWrapperByAnima />
          <DivByAnima />
        </div>

        <ViewByAnima />
      </div>
    </div>
  );
};

export default EwimvaFavourite;
