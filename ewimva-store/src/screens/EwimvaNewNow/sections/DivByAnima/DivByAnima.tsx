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
        colorVariants: [],
      },
      {
        id: 2,
        name: "Embroidered shirt dress with belt",
        category: "NEW NOW - SELECTION",
        price: "KGS 12 990,00",
        image: "/87029065-01-99999999-01.png",
        colorVariants: [],
      },
      {
        id: 3,
        name: "Полупрозрачное комбинированное платье",
        category: "CAPSULE",
        price: "KGS 12 990,00",
        image: "/87007199-05-d9.png",
        colorVariants: [
          { color: "03", image: "/03-2.png" },
          { color: "32", image: "/32-2.png" },
        ],
      },
      {
        id: 4,
        name: "Прямой комбинезон с короткими рукавами и поясом",
        category: "NEW NOW - SELECTION",
        price: "KGS 12 990,00",
        image: "/87077907-05-d7.png",
        colorVariants: [],
      },
    ];
  
    return (
      <section className="w-full py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {products.map((product) => (
            <Card key={product.id} className="rounded-none border-0 relative">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    className="w-full h-[671px] object-cover"
                    alt={product.name}
                    src={product.image}
                  />
                  <button className="absolute top-3 right-3">
                    <HeartIcon className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-2">
                  <div className="font-['Inter',Helvetica] text-[8.9px] font-normal text-[#131313] leading-3 whitespace-nowrap">
                    {product.category}
                  </div>
                  <div className="font-['Inter',Helvetica] text-[11.9px] font-normal text-[#131313] leading-[18px] mt-1">
                    {product.name}
                  </div>
                  <div className="font-['Inter',Helvetica] text-[12.6px] font-normal text-[#131313] leading-[18px] mt-1">
                    {product.price}
                  </div>
                  {product.colorVariants.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {product.colorVariants.map((variant, index) => (
                        <div
                          key={index}
                          className="w-3.5 h-3.5 rounded-[7px] bg-cover bg-[50%_50%]"
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
      </section>
    );
  };