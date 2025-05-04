import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const View1ByAnima = (): JSX.Element => {
  const products = [
    {
      id: 1,
      name: "Толстовка с высоким воротником и молнией",
      category: "CAPSULE",
      price: "KGS 12 990,00",
      image: "/77097691-35.png",
      colorVariants: [],
    },
    {
      id: 2,
      name: "Асимметричное платье с воротником-бантом",
      category: "CAPSULE",
      price: "KGS 12 990,00",
      image: "/87038267-05-d2-4.png",
      colorVariants: [],
    },
    {
      id: 3,
      name: "Меланжевый кардиган с косами",
      category: "NEW NOW",
      price: "KGS 12 990,00",
      image: "/87050367-92.png",
      colorVariants: [
        { color: "03", image: "/03-2.png" },
        { color: "32", image: "/32-2.png" },
      ],
    },
    {
      id: 4,
      name: "Футболка с асимметричной горловиной и сборками",
      category: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/87085755-07.png",
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

