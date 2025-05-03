import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivByAnima = (): JSX.Element => {
  // Product data
  const product = {
    name: "Трикотажный пиджак с геометрическим узором",
    price: "KGS 4 990,00",
    image: "/-------------------------------------------------------.png",
    colors: [
      { id: 1, image: "/43.png", selected: true },
      { id: 2, image: "/07.png", selected: false },
    ],
  };

  return (
    <Card className="w-full max-w-[479px] border-none">
      <CardContent className="p-0">
        {/* Product Image */}
        <div
          className="w-full h-[671px] bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        />

        {/* Product Info */}
        <div className="mt-3 px-2">
          <h3 className="font-normal text-[11.7px] leading-[18px] text-[#131313] font-['Inter',Helvetica] tracking-[0]">
            {product.name}
          </h3>

          <p className="mt-1 font-normal text-[12.8px] leading-[18px] text-[#131313] font-['Inter',Helvetica] tracking-[0]">
            {product.price}
          </p>

          {/* Color Options */}
          <div className="flex items-center mt-3 gap-3">
            {product.colors.map((color) => (
              <div key={color.id} className="relative">
                <div
                  className={`w-3.5 h-3.5 rounded-[7px] bg-cover bg-center`}
                  style={{ backgroundImage: `url(${color.image})` }}
                />
                {color.selected && (
                  <div className="absolute top-[-2px] left-[-2px] w-[18px] h-[18px] rounded-[9px] border border-solid border-[#131313]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Button */}
        <button className="absolute top-[694px] right-7">
          <HeartIcon className="w-4 h-[15px]" />
        </button>
      </CardContent>
    </Card>
  );
};
