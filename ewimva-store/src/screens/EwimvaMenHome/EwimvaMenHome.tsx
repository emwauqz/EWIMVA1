import React from "react";
import { ElementByAnima } from "./sections/ElementByAnima";
import { ElementWrapperByAnima } from "./sections/ElementWrapperByAnima";
import { HeaderByAnima } from "./sections/HeaderByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima";
import { ViewByAnima } from "./sections/ViewByAnima";

export const EwimvaMenHome = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full"
      data-model-id="1:273"
    >
      <div className="bg-white w-full max-w-[1920px] relative">
        <div className="w-full">
          <HeaderByAnima />
          <ElementByAnima />
        </div>

        <ElementWrapperByAnima />
        <OverlapWrapperByAnima />
        <ViewByAnima />
      </div>
    </div>
  );
};

export default EwimvaMenHome;