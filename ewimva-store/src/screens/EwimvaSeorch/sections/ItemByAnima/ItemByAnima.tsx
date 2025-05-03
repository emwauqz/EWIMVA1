import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ItemByAnima = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[479px] rounded-none border-none">
      <div className="bg-[url(/----------------------------------------.png)] w-full h-[671px] bg-cover bg-center" />
      <CardContent className="p-2 relative">
        <div className="text-[11.7px] font-normal text-[#131313] leading-[18px] font-['Inter',Helvetica] tracking-[0]">
          Структурный пиджак с поясом
        </div>
        <div className="text-[12.6px] font-normal text-[#131313] tracking-[0] leading-[18px] font-['Inter',Helvetica]">
          KGS 12 990,00
        </div>
        <HeartIcon className="absolute right-2 bottom-2 w-4 h-[15px]" />
      </CardContent>
    </Card>
  );
};
