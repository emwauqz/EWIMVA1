import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    title: "Прямое платье с драпировкой",
    label: "NEW NOW - SELECTION",
    price: "KGS 12 990,00",
    image: "/87038267-05-d2-2.png",
  },
  {
    id: 2,
    title: "Короткий тренч из денима с поясом",
    label: "NEW NOW - SELECTION",
    price: "KGS 12 990,00",
    image: "/87075741-ts-02-d7.png",
  },
  {
    id: 3,
    title: "Объемный тренч из хлопка",
    label: "NEW NOW",
    price: "KGS 12 990,00",
    image: "/87038267-05-d2-3.png",
    colorOptions: [
      { id: 1, image: "/03-3.png" },
      { id: 2, image: "/32-3.png" },
    ],
  },
  {
    id: 4,
    title: "Куртка-бомбер со сборками",
    label: "NEW NOW - SELECTION",
    price: "KGS 12 990,00",
    image: "/87063290-92-d7.png",
  },
];

export const ViewWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="border-none relative">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  className="w-full h-[671px] object-cover"
                  alt={product.title}
                  src={product.image}
                />
                <button className="absolute top-3 right-3">
                  <HeartIcon className="w-4 h-4" />
                </button>
              </div>

              <div className="p-2">
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[8.9px] tracking-[0] leading-3 whitespace-nowrap">
                  {product.label}
                </div>

                <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[11.9px] tracking-[0] leading-[18px] mt-1">
                  {product.title}
                </div>

                <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[12.6px] tracking-[0] leading-[18px] whitespace-nowrap mt-1">
                  {product.price}
                </div>

                {product.colorOptions && (
                  <div className="flex gap-2 mt-2">
                    {product.colorOptions.map((color) => (
                      <div
                        key={color.id}
                        className="w-3.5 h-3.5 rounded-[7px] bg-cover bg-[50%_50%]"
                        style={{ backgroundImage: `url(${color.image})` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
