import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ItemWrapperByAnima = (): JSX.Element => {
  // Product data
  const product = {
    name: "Прямой костюмный пиджак",
    price: "KGS 8 990,00",
    image: "/-------------------------------------------------.png",
    colors: [
      { id: 1, image: "/52.png" },
      { id: 2, image: "/05.png", selected: true },
    ],
  };

  return (
    <Card className="w-full max-w-[479px] mx-auto">
      <div className="relative">
        {/* Product image */}
        <div
          className="w-full h-[671px] bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        />

        {/* Favorite icon */}
        <button className="absolute top-6 right-6">
          <HeartIcon className="w-4 h-[15px]" />
        </button>
      </div>

      <CardContent className="pt-3 pb-6">
        {/* Product name */}
        <h3 className="font-normal text-[#131313] text-[11.8px] leading-[18px] font-['Inter',Helvetica] mb-0">
          {product.name}
        </h3>

        {/* Product price */}
        <p className="text-[12.8px] font-['Inter',Helvetica] font-normal text-[#131313] leading-[18px] mt-0">
          {product.price}
        </p>

        {/* Color options */}
        <div className="flex gap-3 mt-3">
          {product.colors.map((color) => (
            <div key={color.id} className="relative">
              <div
                className={`w-3.5 h-3.5 rounded-[7px] bg-cover bg-center`}
                style={{ backgroundImage: `url(${color.image})` }}
              />
              {color.selected && (
                <div className="w-[18px] h-[18px] absolute top-[-2px] left-[-3px] rounded-[9px] border border-solid border-[#131313]" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
