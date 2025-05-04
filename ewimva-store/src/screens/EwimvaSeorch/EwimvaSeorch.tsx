import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima/DivWrapperByAnima";
import Header from '../../components/Header';
import { ItemByAnima } from "./sections/ItemByAnima/ItemByAnima";
import { ItemWrapperByAnima } from "./sections/ItemWrapperByAnima";
import Footer from "../../components/Footer";


export const EwimvaSeorch = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1921px] relative">
        <Header />

        {/* Search bar */}
        <div className="relative w-[928px] h-8 mt-[78px] mx-auto border-b [border-bottom-style:solid] border-[#131313]">
          <div className="relative w-full h-[15px] top-2 overflow-hidden">
            <div className="w-[45px] font-normal text-black text-[11.9px] leading-[normal] absolute [font-family:'Inter',Helvetica] tracking-[0]">
              Искать
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute w-[11px] h-[11px] top-[9px] right-[6px] p-0"
            aria-label="Clear search"
          >
            <XIcon className="w-[11px] h-[11px]" />
          </Button>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-4 gap-4 max-w-[1920px] mx-auto px-8 mt-8">
          <ItemByAnima />
          <ItemWrapperByAnima />
          <DivWrapperByAnima />
          <DivByAnima />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default EwimvaSeorch;