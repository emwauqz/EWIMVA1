import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { HeaderByAnima } from "./sections/HeaderByAnima";
import { ViewByAnima } from "./sections/ViewByAnima/ViewByAnima";

export const EwimvaMyAccount = (): JSX.Element => {
  // Menu items data for easier management and rendering
  const menuItems = [
    { id: 1, title: "ПОМОЩЬ" },
    { id: 2, title: "МОИ ПОКУПКИ" },
    { id: 3, title: "МОИ ДАННЫЕ" },
    { id: 4, title: "МОИ ПОКУПКИ" },
    { id: 5, title: "МОЙ АДРЕСС" },
    { id: 6, title: "МОИ ИЗБРАННЫЕ" },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:8"
    >
      <div className="bg-white w-full relative">
        <HeaderByAnima />

        <div className="flex flex-col items-center mt-[109px]">
          <h1 className="[font-family:'Meow_Script',Helvetica] font-normal text-black text-5xl text-justify tracking-[0] leading-[normal]">
            Elmira
          </h1>

          <Card className="w-[319px] mt-10 border-none">
            <CardContent className="p-0 space-y-[60px]">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap">
                    {item.title}
                  </div>
                  <ChevronRightIcon className="w-[18px] h-[15px]" />
                </div>
              ))}

              <Button
                variant="link"
                className="p-0 h-auto [font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap"
              >
                ВЫХОД
              </Button>
            </CardContent>
          </Card>
        </div>

        <ViewByAnima />
      </div>
    </div>
  );
};

export default EwimvaMyAccount;