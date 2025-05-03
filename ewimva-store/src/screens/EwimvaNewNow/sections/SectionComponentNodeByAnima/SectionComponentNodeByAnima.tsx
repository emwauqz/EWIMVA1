import { HeartIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SectionComponentNodeByAnima = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      title: "Джемпер с косами и расклешенными рукавами",
      label: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/87000350-05-99999999-01.png",
      colorOptions: [],
    },
    {
      id: 2,
      title: "Двубортный тренч изо льна",
      label: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/87077888-30.png",
      colorOptions: [],
    },
    {
      id: 3,
      title: "Вязаный свитер с высоким воротником",
      label: "NEW NOW",
      price: "KGS 12 990,00",
      image: "/77073266-30.png",
      colorOptions: [
        { color: "03", image: "/03-4.png" },
        { color: "32", image: "/32-4.png" },
      ],
    },
    {
      id: 4,
      title: "Футболка из хлопка",
      label: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/77090593-01-99999999-01.png",
      colorOptions: [],
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="container">
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
                    {product.label}
                  </div>
                  <div className="font-normal text-[#131313] text-[11.9px] leading-[18px] font-['Inter',Helvetica] mt-1">
                    {product.title}
                  </div>
                  <div className="font-normal text-[#131313] text-[12.6px] leading-[18px] font-['Inter',Helvetica] mt-1">
                    {product.price}
                  </div>
                  {product.colorOptions.length > 0 && (
                    <div className="flex gap-3 mt-2">
                      {product.colorOptions.map((option, index) => (
                        <div
                          key={index}
                          className="w-3.5 h-3.5 rounded-[7px] bg-cover bg-center"
                          style={{ backgroundImage: `url(${option.image})` }}
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
