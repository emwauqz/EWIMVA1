import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivByAnima = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      name: "Lyocell V-neck midi dress",
      category: "CAPSULE",
      price: "KGS 12 990,00",
      image: "/87028650-tc.png",
      alt: "Element TC",
    },
    {
      id: 2,
      name: "Embroidered shirt dress with belt",
      category: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/87029065-01-99999999-01.png",
      alt: "Element",
    },
    {
      id: 3,
      name: "Полупрозрачное комбинированное платье",
      category: "CAPSULE",
      price: "KGS 12 990,00",
      image: "/87007199-05-d9.png",
      alt: "Element",
    },
    {
      id: 4,
      name: "Прямой комбинезон с короткими рукавами и поясом",
      category: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/87077907-05-d7.png",
      alt: "Element",
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="border-none rounded-none">
              <CardContent className="p-0 relative">
                <div className="relative">
                  <img
                    className="w-full h-[671px] object-cover"
                    alt={product.alt}
                    src={product.image}
                  />
                  <button className="absolute top-3 right-3">
                    <HeartIcon className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-2">
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[8.9px] tracking-[0] leading-3 whitespace-nowrap">
                    {product.category}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[11.9px] tracking-[0] leading-[18px] mt-1">
                    {product.name}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[12.6px] tracking-[0] leading-[18px] mt-1">
                    {product.price}
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
