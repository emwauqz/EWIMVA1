import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ItemByAnima = (): JSX.Element => {
  return (
    <Card className="w-full h-full relative">
      <CardContent className="p-0 flex flex-col h-full">
        <div
          className="bg-[url(/----------------------------------------.png)] w-full h-[671px] bg-cover bg-center flex-grow"
          aria-label="Product image"
        />
        <div className="p-2 space-y-0.5">
          <h3 className="text-[11.7px] font-normal text-[#131313] font-['Inter',Helvetica] leading-[18px]">
            Структурный пиджак с поясом
          </h3>
          <p className="text-[12.6px] font-normal text-[#131313] font-['Inter',Helvetica] leading-[18px]">
            KGS 12 990,00
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
