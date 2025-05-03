import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
  return (
    <Card className="w-[479px] h-[744px] relative border-none">
      <CardContent className="p-0">
        <div className="bg-[url(/---------------------------------------------.png)] w-full h-[671px] bg-cover bg-center" />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2 space-y-0">
        <h3 className="font-normal text-[11.7px] text-[#131313] font-['Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
          Костюмный пиджак в узкую полоску
        </h3>
        <p className="text-[12.8px] font-['Inter',Helvetica] font-normal text-[#131313] tracking-[0] leading-[18px] whitespace-nowrap">
          KGS 9 990,00
        </p>
        <button
          className="absolute bottom-[35px] right-[12px] bg-transparent border-none cursor-pointer"
          aria-label="Add to favorites"
        >
          <HeartIcon className="w-[17px] h-[15px]" />
        </button>
      </CardFooter>
    </Card>
  );
};
