import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperByAnima = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      title: "Хлопковая футболка с контрастными окантовками",
      category: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/87099211-01-d2.png",
      colorVariants: [],
    },
    {
      id: 2,
      title: "Футболка из смесового хлопка",
      category: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/77073266-ta-d1.png",
      colorVariants: [],
    },
    {
      id: 3,
      title: "Драпированное платье с цветочным принтом",
      category: "NEW NOW",
      price: "KGS 12 990,00",
      image: "/87038267-05-d2-1.png",
      colorVariants: [
        { color: "03", image: "/03-1.png" },
        { color: "32", image: "/32-1.png" },
      ],
    },
    {
      id: 4,
      title: "Вязаный жилет с нарядными пуговицами",
      category: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/87079065-56-d2.png",
      colorVariants: [],
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {products.map((product) => (
            <Card key={product.id} className="rounded-none border-0 relative">
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
                  <div className="font-normal text-[#131313] text-[8.9px] leading-3 font-['Inter',Helvetica]">
                    {product.category}
                  </div>
                  <div className="font-normal text-[#131313] text-[11.9px] leading-[18px] font-['Inter',Helvetica] mt-1">
                    {product.title}
                  </div>
                  <div className="font-normal text-[#131313] text-[12.6px] leading-[18px] font-['Inter',Helvetica] mt-1">
                    {product.price}
                  </div>
                  {product.colorVariants.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {product.colorVariants.map((variant, index) => (
                        <div
                          key={index}
                          className="w-3.5 h-3.5 rounded-[7px] bg-cover bg-center"
                          style={{ backgroundImage: `url(${variant.image})` }}
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
