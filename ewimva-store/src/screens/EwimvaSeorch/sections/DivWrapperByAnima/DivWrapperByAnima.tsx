import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
  return (
    <div className="w-full max-w-[479px] mx-auto">
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <div className="flex flex-col">
            <div className="bg-[url(/---------------------------------------------.png)] w-full h-[671px] bg-cover bg-center" />

            <div className="mt-3 px-2">
              <h3 className="font-normal text-[#131313] text-[11.7px] leading-[18px] font-['Inter',Helvetica] tracking-[0]">
                Костюмный пиджак в узкую полоску
              </h3>

              <div className="flex justify-between items-center mt-1">
                <p className="text-[12.8px] font-['Inter',Helvetica] font-normal text-[#131313] tracking-[0] leading-[18px]">
                  KGS 9 990,00
                </p>
                <HeartIcon className="w-4 h-[15px] text-black" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
