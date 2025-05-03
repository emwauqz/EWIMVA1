import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupByAnima = (): JSX.Element => {
  // Size options data
  const sizes = ["XXS", "XS", "S", "M", "L", "XL"];

  return (
    <div className="w-full max-w-[592px] py-6">
      <div className="mb-2 font-normal text-[13px] text-[#131313] leading-[18px]">
        RIBBED HALTER-NECK TOP
      </div>

      <div className="mb-6 font-normal text-[12.7px] text-[#131313] leading-[18px]">
        KGS 3 490,00
      </div>

      <div className="flex items-center mb-6">
        <div className="w-[34px] h-[34px] relative">
          <div className="relative w-[18px] h-[18px] top-2 left-2">
            <div className="bg-[url(/----------------------.png)] absolute w-[18px] h-[18px] top-0 left-0 opacity-50 bg-cover bg-[50%_50%]" />
            <div className="absolute w-6 h-px top-2 left-[-3px] bg-[#131313] -rotate-45" />
          </div>
        </div>

        <div className="w-[34px] h-[34px] relative">
          <div className="absolute w-[18px] h-px top-[29px] left-2 bg-[#131313]" />
          <div className="absolute w-[18px] h-[18px] top-2 left-2">
            <div className="bg-[url(/--------------------.png)] absolute w-[18px] h-[18px] top-0 left-0 opacity-50 bg-cover bg-[50%_50%]" />
            <div className="absolute w-6 h-px top-2 left-[-3px] bg-[#131313] -rotate-45" />
          </div>
        </div>

        <div className="ml-auto font-normal text-[12.2px] text-[#131313] text-right">
          Экрю
        </div>
      </div>

      <Card className="border-0 shadow-none">
        <CardContent className="p-0">
          <div className="border-t border-b border-[#d7d7d8]">
            {sizes.map((size, index) => (
              <div
                key={size}
                className={`h-9 flex items-center ${index !== sizes.length - 1 ? "border-b border-[#d7d7d8]" : ""}`}
              >
                <div className="ml-4 font-normal text-[13px] text-[#131313]">
                  {size}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-3 mb-6">
        <button className="font-bold text-[12.6px] text-[#131313] underline">
          Таблица размеров
        </button>
      </div>

      <Button className="w-full h-11 bg-[#131313] text-white rounded-none hover:bg-[#2a2a2a]">
        <img
          className="w-[19px] h-[18px] mr-1.5"
          alt="Heart icon"
          src="/vector-5.svg"
        />
        <span className="font-bold text-[12.8px]">Добавить в Фавориты</span>
      </Button>
    </div>
  );
};
