import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ItemWrapperByAnima = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[479px] h-auto">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="w-full h-[671px] bg-[url(/-------------------------------------------------.png)] bg-cover bg-center" />

        {/* Product Information */}
        <div className="p-2 space-y-2">
          <h3 className="font-normal text-[11.8px] text-[#131313] font-['Inter',Helvetica] leading-[18px]">
            Прямой костюмный пиджак
          </h3>

          <p className="font-normal text-[12.8px] text-[#131313] font-['Inter',Helvetica] leading-[18px]">
            KGS 8 990,00
          </p>

          {/* Color Options */}
          <div className="flex items-center gap-3 mt-2">
            {/* First color option */}
            <div className="w-3.5 h-3.5 rounded-[7px] bg-[url(/52.png)] bg-cover bg-center" />

            {/* Second color option with border */}
            <div className="relative w-[18px] h-[18px] rounded-[9px]">
              <div className="absolute w-3.5 h-3.5 top-0.5 left-0.5 rounded-[7px] bg-[url(/05.png)] bg-cover bg-center" />
              <div className="w-[18px] h-[18px] rounded-[9px] border border-solid border-[#131313] absolute top-0 left-0" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
