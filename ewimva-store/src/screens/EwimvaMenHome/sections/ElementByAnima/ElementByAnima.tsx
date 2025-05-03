import React from "react";

export const ElementByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1144px]">
      <div className="w-full h-full bg-[url(/ph1.png)] bg-cover bg-center flex flex-col items-center justify-center">
        <h2 className="[text-shadow:0px_0px_10px_#1313131a] font-['Inter',Helvetica] font-bold text-white text-[54.5px] text-center tracking-[0] leading-[68px] underline">
          NEW NOW
        </h2>
        <a
          href="#"
          className="mt-8 [text-shadow:0px_0px_10px_#1313131a] font-['Inter',Helvetica] font-bold text-white text-[6.5px] text-center tracking-[0] leading-[18px] underline"
        >
          УЗНАТЬ БОЛЬШЕ
        </a>
      </div>
    </section>
  );
};
