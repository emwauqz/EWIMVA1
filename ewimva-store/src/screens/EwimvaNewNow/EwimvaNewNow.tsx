import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Separator } from "../../components/ui/separator";
import { DivByAnima } from "./sections/DivByAnima";
import Footer from "../../components/Footer";
import { OverlapGroupWrapperByAnima } from "./sections/OverlapGroupWrapperByAnima/OverlapGroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";
import { SectionComponentNodeByAnima } from "./sections/SectionComponentNodeByAnima";
import { View1ByAnima } from "./sections/View1ByAnima";
import { View2ByAnima } from "./sections/View2ByAnima";
import { ViewByAnima } from "./sections/ViewByAnima";
import { ViewWrapperByAnima } from "./sections/ViewWrapperByAnima";
import Header from '../../components/Header';

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
      <Header />

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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EwimvaNewNow;