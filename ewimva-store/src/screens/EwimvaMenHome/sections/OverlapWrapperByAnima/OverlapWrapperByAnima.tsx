import React from "react";
import { Button } from "../../../../components/ui/button";

export const OverlapWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-20 relative">
      <div className="w-full h-[1144px] bg-[url(/ph6.png)] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-normal text-white text-[54.5px] text-center tracking-[0] leading-[68px] underline whitespace-nowrap [text-shadow:0px_0px_10px_#1313131a] [font-family:'Inter',Helvetica]">
            THE SUIT GUIDE
          </h2>
          <Button
            variant="link"
            className="h-[18px] [text-shadow:0px_0px_10px_#1313131a] font-bold text-white text-[6.5px] text-center underline [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap p-0"
          >
            УЗНАТЬ БОЛЬШЕ
          </Button>
        </div>
      </div>
    </section>
  );
};
