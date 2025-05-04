import React from "react";
import { Button } from "../../../../components/ui/button";

export const OverlapWrapperByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1144px]">
      <div className="w-full h-full bg-[url(/ph6.png)] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-white text-[54.5px] font-bold font-['Inter',Helvetica] tracking-[0] leading-[68px] underline text-center [text-shadow:0px_0px_10px_#1313131a]">
              THE SUIT GUIDE
          </h2>
          <Button
            variant="link"
            className="text-white text-[6.5px] font-bold font-['Inter',Helvetica] tracking-[0] leading-[18px] underline [text-shadow:0px_0px_10px_#1313131a] p-0 h-auto"
          >
            УЗНАТЬ БОЛЬШЕ
          </Button>
        </div>
      </div>
    </section>
  );
};
