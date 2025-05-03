import React from "react";
import { GroupByAnima } from "./sections/GroupByAnima";
import { HeaderByAnima } from "./sections/HeaderByAnima";
import { ViewByAnima } from "./sections/ViewByAnima";

export const EwimvaMyDetails = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full min-h-screen"
      data-model-id="1:8"
    >
      <div className="bg-white w-full max-w-[1920px] flex flex-col">
        <HeaderByAnima />

        <main className="flex flex-col items-center">
          <h1 className="mt-[109px] [font-family:'Meow_Script',Helvetica] font-normal text-black text-5xl text-center tracking-[0] leading-normal">
            Elmira
          </h1>

          <GroupByAnima />
          <ViewByAnima />
        </main>
      </div>
    </div>
  );
};

export default EwimvaMyDetails;