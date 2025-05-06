import React from "react";
import { ElementByAnima } from "./sections/ElementByAnima";
import { ElementWrapperByAnima } from "./sections/ElementWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima";


export const EwimvaMenHome = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full"
      data-model-id="1:273"
    >
      <div className="bg-white w-full max-w-[1920px] relative">
        <div className="w-full">
          <ElementByAnima />
        </div>

        <ElementWrapperByAnima />
        <OverlapWrapperByAnima />
      </div>
    </div>
  );
};

export default EwimvaMenHome;