import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupWrapperByAnima = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      image: "/87065751-1.png",
      title: "Топ на бретелях с квадратным декольте",
      alt: "Element",
    },
    {
      id: 2,
      image: "/87037183-2.png",
      title: "Топ из тонкого трикотажа с декольте",
      alt: "Element",
    },
    {
      id: 3,
      image: "/87077180-3.png",
      title: "Трикотажный топ с воротником поло",
      alt: "Element",
    },
    {
      id: 4,
      image: "/87026337-4.png",
      title: "Укороченный хлопковый топ хлопок без рук…",
      alt: "Element",
    },
    {
      id: 5,
      image: "/87037184-05.png",
      title: "Вязаный топ с V-образной горловиной",
      alt: "Element",
    },
  ];

  return (
    <section className="w-full py-8 px-8">
      <h2 className="font-bold text-[12.4px] text-[#131313] mb-[68px] font-['Inter',Helvetica] leading-[18px]">
        В ТОМ ЖЕ СТИЛЕ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[1px]">
        {products.map((product) => (
          <Card
            key={product.id}
            className="w-full max-w-[308px] h-[471px] bg-white border-none rounded-none"
          >
            <CardContent className="p-0">
              <div className="relative h-full">
                <img
                  className="w-full h-[432px] object-cover"
                  alt={product.alt}
                  src={product.image}
                />
                <div className="flex justify-between items-center px-2 mt-3">
                  <p className="font-normal text-[11.9px] text-[#131313] leading-[18px] font-['Inter',Helvetica] truncate max-w-[238px]">
                    {product.title}
                  </p>
                  <HeartIcon className="w-4 h-[15px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
