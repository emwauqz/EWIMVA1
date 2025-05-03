import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ElementWrapperByAnima = (): JSX.Element => {
  // Define category data for mapping
  const categories = [
    {
      id: 1,
      name: "РУБАШКИ",
      image: "/photo2.png",
      position: "top-left",
    },
    {
      id: 2,
      name: "КОСТЮМЫ",
      image: "/phh3.png",
      position: "top-right",
    },
    {
      id: 3,
      name: "БРЮКИ",
      image: "/photo3.png",
      position: "bottom-left",
    },
    {
      id: 4,
      name: "ДВОЙКИ",
      image: "/complect.png",
      position: "bottom-right",
    },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto mt-[1199px]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {categories.slice(0, 2).map((category) => (
            <Card key={category.id} className="rounded-none border-0">
              <CardContent className="p-0">
                <div
                  className="relative h-[960px] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute bottom-[50px] left-8 font-bold text-white text-[13px] underline [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                    {category.name}
                  </div>
                  <div className="absolute bottom-[50px] right-[154px] font-bold text-white text-[12.8px] text-center underline [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                    ПОСМОТРЕТЬ ВСЕ
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {categories.slice(2, 4).map((category) => (
            <Card key={category.id} className="rounded-none border-0">
              <CardContent className="p-0">
                <div
                  className="relative h-[960px] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute bottom-[50px] left-8 font-bold text-white text-[13px] underline [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                    {category.name}
                  </div>
                  <div className="absolute bottom-[50px] right-[154px] font-bold text-white text-[12.8px] text-center underline [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                    ПОСМОТРЕТЬ ВСЕ
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
