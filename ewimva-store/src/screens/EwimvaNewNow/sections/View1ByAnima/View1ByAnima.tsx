import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const View1ByAnima = (): JSX.Element => {
  const products = [
    {
      id: 1,
      image: "/77097691-35.png",
      category: "NEW NOW - SELECTION",
      title: "Толстовка с высоким воротником и молнией",
      price: "KGS 12 990,00",
      colorOptions: [],
    },
    {
      id: 2,
      image: "/87038267-05-d2-4.png",
      category: "CAPSULE",
      title: "Асимметричное платье с воротником-бантом",
      price: "KGS 12 990,00",
      colorOptions: [],
    },
    {
      id: 3,
      image: "/87050367-92.png",
      category: "NEW NOW",
      title: "Меланжевый кардиган с косами",
      price: "KGS 12 990,00",
      colorOptions: [
        { id: 1, image: "/03-5.png" },
        { id: 2, image: "/32-5.png" },
      ],
    },
    {
      id: 4,
      image: "/87085755-07.png",
      category: "NEW NOW - SELECTION",
      title: "Футболка с асимметричной горловиной и сборками",
      price: "KGS 12 990,00",
      colorOptions: [],
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="border-none rounded-none">
              <CardContent className="p-0 relative">
                <div className="relative">
                  <img
                    className="w-full h-auto object-cover aspect-[0.71/1]"
                    alt={product.title}
                    src={product.image}
                  />
                  <button className="absolute top-3 right-3">
                    <img
                      className="w-4 h-4"
                      alt="Add to favorites"
                      src="/svg.svg"
                    />
                  </button>
                </div>
                <div className="p-2">
                  <div className="font-normal text-[#131313] text-[8.9px] leading-3 font-['Inter',Helvetica] tracking-[0]">
                    {product.category}
                  </div>
                  <h3 className="font-normal text-[#131313] text-[11.9px] leading-[18px] font-['Inter',Helvetica] tracking-[0] mt-1">
                    {product.title}
                  </h3>
                  <div className="font-normal text-[#131313] text-[12.6px] leading-[18px] font-['Inter',Helvetica] tracking-[0] mt-1">
                    {product.price}
                  </div>
                  {product.colorOptions.length > 0 && (
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
