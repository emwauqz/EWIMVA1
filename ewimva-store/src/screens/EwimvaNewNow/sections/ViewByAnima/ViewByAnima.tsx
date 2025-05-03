import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const ViewByAnima = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      title: "Костюмные брюки изо льна",
      label: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/87067706-06-d2--1-.png",
      colors: [],
    },
    {
      id: 2,
      title: "Lyocell palazzo pants",
      label: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/87028650-tc-99999999-01.png",
      colors: [],
    },
    {
      id: 3,
      title: "Прямые костюмные брюки из смесового льна",
      label: "NEW NOW",
      price: "KGS 12 990,00",
      image: "/87038267-05-d2.png",
      colors: [],
    },
    {
      id: 4,
      title: "Прямые костюмные брюки из смесового льна",
      label: "NEW NOW - SELECTION",
      price: "KGS 12 990,00",
      image: "/87068640-05-d1.png",
      colors: [
        { id: 1, image: "/03.png" },
        { id: 2, image: "/32.png" },
      ],
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
                    <img className="w-4 h-4" alt="Favorite" src="/svg.svg" />
                  </button>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-2 space-y-1">
                <Badge
                  variant="outline"
                  className="rounded-none px-0 py-0 border-0 text-[8.9px] font-normal text-[#131313] leading-3 [font-family:'Inter',Helvetica]"
                >
                  {product.label}
                </Badge>
                <h3 className="font-normal text-[#131313] text-[11.9px] leading-[18px] [font-family:'Inter',Helvetica]">
                  {product.title}
                </h3>
                <p className="font-normal text-[#131313] text-[12.6px] leading-[18px] [font-family:'Inter',Helvetica]">
                  {product.price}
                </p>
                {product.colors.length > 0 && (
                  <div className="flex space-x-2 mt-1">
                    {product.colors.map((color) => (
                      <div
                        key={color.id}
                        className="w-3.5 h-3.5 rounded-[7px] bg-cover bg-[50%_50%]"
                        style={{ backgroundImage: `url(${color.image})` }}
                      />
                    ))}
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
