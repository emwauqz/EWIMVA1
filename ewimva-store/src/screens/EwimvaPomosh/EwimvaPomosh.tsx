import React from "react";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima/DivWrapperByAnima";
import { GroupByAnima } from "./sections/GroupByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima";
import Header from '../../components/Header';
import Footer from "../../components/Footer";


export const EwimvaPomosh = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full"
      data-model-id="1:8"
    >
      <div className="bg-white w-full max-w-[1920px] flex flex-col">
        <Header />
        <GroupByAnima />
        <GroupWrapperByAnima />
        <DivWrapperByAnima />
        <Footer />
      </div>
    </div>
  );
};

export default EwimvaPomosh;