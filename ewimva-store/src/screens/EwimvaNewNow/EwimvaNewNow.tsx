import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Separator } from "../../components/ui/separator";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { OverlapGroupWrapperByAnima } from "./sections/OverlapGroupWrapperByAnima/OverlapGroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";
import { SectionComponentNodeByAnima } from "./sections/SectionComponentNodeByAnima";
import { View1ByAnima } from "./sections/View1ByAnima";
import { View2ByAnima } from "./sections/View2ByAnima";
import { ViewByAnima } from "./sections/ViewByAnima";
import { ViewWrapperByAnima } from "./sections/ViewWrapperByAnima";

export const EwimvaNewNow = (): JSX.Element => {
  const navigationItems = [
    { text: "ЖЕНЩИНЫ", active: true },
    { text: "МУЖЧИНЫ", active: false },
  ];

  const headerActions = [
    { text: "ИСКАТЬ" },
    { text: "МОЙ АККАУНТ" },
    { text: "ФАВОРИТЫ" },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:17"
    >
      <div className="bg-white overflow-hidden w-full relative">
        <header className="w-full h-14 bg-white flex items-center justify-between px-8">
          <div className="flex items-center space-x-10">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="font-bold text-[#131313] text-[12.7px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]">
                  {item.text}
                </div>
                {item.active && (
                  <Separator className="absolute w-[75px] h-0.5 top-6 border-[#131313]" />
                )}
              </div>
            ))}
          </div>

          <div className="[font-family:'Montserrat',Helvetica] font-semibold text-[#131313] text-2xl tracking-[0] leading-[normal]">
            EWIMVA
          </div>

          <div className="flex items-center space-x-6">
            {headerActions.map((action, index) => (
              <div
                key={index}
                className="font-bold text-[#131313] text-[12.7px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]"
              >
                {action.text}
              </div>
            ))}
          </div>
        </header>

        <div className="mt-8 ml-8">
          <div className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[12.2px] tracking-[0] leading-[18px] whitespace-nowrap">
            NEW NOW
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center mt-2 focus:outline-none">
              <div className="font-bold text-[#131313] text-[12.6px] text-center whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]">
                КАТЕГОРИЯ
              </div>
              <ChevronDownIcon className="ml-1 w-2 h-[5px]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* Dropdown content would go here */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-col w-full">
          <ViewByAnima />
          <OverlapWrapperByAnima />
          <OverlapGroupWrapperByAnima />
          <ViewWrapperByAnima />
          <DivByAnima />
          <SectionComponentNodeByAnima />
          <View1ByAnima />
          <View2ByAnima />
          <DivWrapperByAnima />
        </div>
      </div>
    </div>
  );
};

export default EwimvaNewNow;