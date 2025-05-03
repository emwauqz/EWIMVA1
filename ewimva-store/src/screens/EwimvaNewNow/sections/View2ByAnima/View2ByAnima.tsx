import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    title: "Тренч оверсайз с ремнем",
    label: "NEW NOW - SELECTION",
    price: "KGS 12 990,00",
    image: "/87093294-05-99999999-01.png",
  },
  {
    id: 2,
    title: "Парка оверсайз на молнии",
    label: "NEW NOW - SELECTION",
    price: "KGS 12 990,00",
    image: "/87038267-05-d2-5.png",
  },
  {
    id: 3,
    title: "Платье А-силуэта из кружева",
    label: "NEW NOW",
    price: "KGS 12 990,00",
    image: "/87035749-30-d6.png",
    colorOptions: [
      { id: 1, image: "/03-6.png" },
      { id: 2, image: "/32-6.png" },
    ],
  },
  {
    id: 4,
    title: "Длинный тренч с двубортной застежкой",
    label: "NEW NOW - SELECTION",
    price: "KGS 12 990,00",
    image: "/87075142-37-99999999-01.png",
  },
];

export const View2ByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="border-none rounded-none">
              <CardContent className="p-0 relative">
                <div className="relative">
                  <img
                    className="w-full h-auto object-cover"
                    alt={product.title}
                    src={product.image}
                  />
                  <button className="absolute top-2 right-2">
                    <HeartIcon className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-2">
                  <div className="font-normal text-[#131313] text-[8.9px] leading-3 font-['Inter',Helvetica]">
                    {product.label}
                  </div>
                  <h3 className="font-normal text-[#131313] text-[11.9px] leading-[18px] font-['Inter',Helvetica] mt-1">
                    {product.title}
                  </h3>
                  <div className="font-normal text-[#131313] text-[12.6px] leading-[18px] font-['Inter',Helvetica]">
                    {product.price}
                  </div>
                  {product.colorOptions && (
                    <div className="flex gap-2 mt-2">
                      {product.colorOptions.map((color) => (
                        <div
                          key={color.id}
                          className="w-3.5 h-3.5 rounded-[7px] bg-cover bg-center"
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
      </div>
    </section>
  );
};
