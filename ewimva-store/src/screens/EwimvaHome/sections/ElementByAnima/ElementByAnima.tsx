import React from "react";

export const ElementByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1144px]">
      <div className="w-full h-full bg-[url(/tak1.png)] bg-cover bg-center flex flex-col items-center justify-center">
        <h2 className="text-[54.5px] font-bold text-white text-center tracking-normal leading-[68px] underline [text-shadow:0px_0px_10px_#1313131a] font-['Inter',Helvetica] mb-8">
          NEW NOW
        </h2>
        <a
          href="#"
          className="text-[6.5px] font-bold text-white text-center underline [text-shadow:0px_0px_10px_#1313131a] font-['Inter',Helvetica] tracking-normal leading-[18px]"
        >
          УЗНАТЬ БОЛЬШЕ
        </a>
      </div>
    </section>
  );
};
