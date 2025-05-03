import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivByAnima = (): JSX.Element => {
  // Product data
  const product = {
    title: "Трикотажный пиджак с геометрическим узором",
    price: "KGS 4 990,00",
    image: "/-------------------------------------------------------.png",
    colorOptions: [
      { id: 1, color: "/43.png", selected: true },
      { id: 2, color: "/07.png", selected: false },
    ],
  };

  return (
    <Card className="w-full max-w-[479px] h-auto">
      <CardContent className="p-0">
        {/* Product Image */}
        <div
          className="w-full h-[671px] bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        />

        {/* Product Info */}
        <div className="p-2 space-y-2">
          {/* Product Title */}
          <h3 className="font-normal text-[#131313] text-[11.7px] font-['Inter',Helvetica] leading-[18px]">
            {product.title}
          </h3>

          {/* Product Price */}
          <p className="text-[12.8px] font-['Inter',Helvetica] font-normal text-[#131313] leading-[18px]">
            {product.price}
          </p>

          {/* Color Options */}
          <div className="flex items-center gap-3">
            {product.colorOptions.map((option) => (
              <div
                key={option.id}
                className={`relative ${option.selected ? "cursor-default" : "cursor-pointer"}`}
              >
                <div
                  className="w-3.5 h-3.5 rounded-[7px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${option.color})` }}
                />
                {option.selected && (
                  <div className="absolute inset-0 w-[18px] h-[18px] -m-0.5 rounded-[9px] border border-solid border-[#131313]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
