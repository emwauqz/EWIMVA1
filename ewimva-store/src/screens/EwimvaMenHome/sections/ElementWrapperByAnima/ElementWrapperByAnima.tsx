import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ElementWrapperByAnima = (): JSX.Element => {
  // Define the category data for easier mapping
  const categoryData = [
    {
      id: 1,
      name: "РУБАШКИ",
      image: "photo2.png",
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
    <div className="w-full mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {categoryData.map((category) => (
          <Card key={category.id} className="rounded-none border-0">
            <CardContent className="p-0">
              <div
                className="relative w-full h-[960px] bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute bottom-[50px] left-8 font-bold text-white text-[13px] underline font-['Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                  {category.name}
                </div>
                <div className="absolute bottom-[50px] right-[155px] font-bold text-white text-[12.8px] text-center underline font-['Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                  ПОСМОТРЕТЬ ВСЕ
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
