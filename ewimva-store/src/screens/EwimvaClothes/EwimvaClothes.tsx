import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Card, CardContent } from "../../components/ui/card";
import { HeartIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export const EwimvaClothes = (): JSX.Element => {
  // Size options data from GroupByAnima
  const sizes = ["XXS", "XS", "S", "M", "L", "XL"];

  // Product data from GroupWrapperByAnima
  const products = [
    {
      id: 1,
      image: "/87065751-1.png",
      title: "Топ на бретелях с квадратным декольте",
      alt: "Element",
    },
    {
      id: 2,
      image: "/87037183-2.png",
      title: "Топ из тонкого трикотажа с декольте",
      alt: "Element",
    },
    {
      id: 3,
      image: "/87077180-3.png",
      title: "Трикотажный топ с воротником поло",
      alt: "Element",
    },
    {
      id: 4,
      image: "/87026337-4.png",
      title: "Укороченный хлопковый топ хлопок без рук…",
      alt: "Element",
    },
    {
      id: 5,
      image: "/87037184-05.png",
      title: "Вязаный топ с V-образной горловиной",
      alt: "Element",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full" data-model-id="1:8" style={{ marginTop: '56px' }}>
      <div className="bg-white w-full max-w-[1920px] relative">
        
        <div className="flex">
          <div className="flex-1 min-w-[1150px]">
            <div className="grid grid-cols-2">
              <img
                className="w-full h-[802px] object-cover"
                alt="Pervayz"
                src="/pervayz.png"
              />
              <img
                className="w-full h-[802px] object-cover"
                alt="Element r"
                src="/87098645-05-01-r.png"
              />
            </div>
            <div className="grid grid-cols-4">
              <img
                className="w-full h-[401px] object-cover"
                alt="Element"
                src="/87098645-05-01-d1.png"
              />
              <img
                className="w-full h-[401px] object-cover"
                alt="Element"
                src="/87098645-05-01-d8.png"
              />
              <img
                className="w-full h-[401px] object-cover"
                alt="Element b"
                src="/87098645-05-01-b.png"
              />
              <img
                className="w-full h-[401px] object-cover"
                alt="Element"
                src="/87098645-05-01-d0.png"
              />
            </div>
          </div>

          <div className="w-[770px] bg-white px-8">
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="composition" className="border-none">
                    <AccordionTrigger className="py-2">
                      <span className="font-bold text-[#131313] text-[12.4px] text-center whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]">
                        Состав, происхождение и уход
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[12.4px] tracking-[0] leading-[18px]">
                        <span className="font-bold">
                          Состав
                          <br />
                        </span>
                        <span className="font-medium">
                          Composition: 63% viscose, 37% polyamide
                          <br />
                        </span>
                        <span className="font-bold">
                          <br />
                          Происхождение
                          <br />
                        </span>
                        <span className="font-medium">
                          Разработано в Барселоне
                          <br />
                          Производство: Китай
                          <br />
                        </span>
                        <span className="font-bold">
                          <br />
                          Уход
                          <br />
                        </span>
                        <span className="font-medium">
                          Ручная стирка при 30 °С
                          <br />
                          Отбеливать запрещено
                          <br />
                          Гладить при 110 °С
                          <br />
                          Химчистка запрещена
                          <br />
                          Запрещено сушить в сушилке
                          <br />
                        </span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="w-full max-w-[592px] py-6">
                  <div className="mb-2 font-normal text-[13px] text-[#131313] leading-[18px]">
                    RIBBED HALTER-NECK TOP
                  </div>

                  <div className="mb-6 font-normal text-[12.7px] text-[#131313] leading-[18px]">
                    KGS 3 490,00
                  </div>

                  <div className="flex items-center mb-6">
                    <div className="w-[34px] h-[34px] relative">
                      <div className="relative w-[18px] h-[18px] top-2 left-2">
                        <div className="bg-[url(/----------------------.png)] absolute w-[18px] h-[18px] top-0 left-0 opacity-50 bg-cover bg-[50%_50%]" />
                        <div className="absolute w-6 h-px top-2 left-[-3px] bg-[#131313] -rotate-45" />
                      </div>
                    </div>

                    <div className="w-[34px] h-[34px] relative">
                      <div className="absolute w-[18px] h-px top-[29px] left-2 bg-[#131313]" />
                      <div className="absolute w-[18px] h-[18px] top-2 left-2">
                        <div className="bg-[url(/--------------------.png)] absolute w-[18px] h-[18px] top-0 left-0 opacity-50 bg-cover bg-[50%_50%]" />
                        <div className="absolute w-6 h-px top-2 left-[-3px] bg-[#131313] -rotate-45" />
                      </div>
                    </div>

                    <div className="ml-auto font-normal text-[12.2px] text-[#131313] text-right">
                      Экрю
                    </div>
                  </div>

                  <Card className="border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="border-t border-b border-[#d7d7d8]">
                        {sizes.map((size, index) => (
                          <div
                            key={size}
                            className={`h-9 flex items-center ${index !== sizes.length - 1 ? "border-b border-[#d7d7d8]" : ""}`}
                          >
                            <div className="ml-4 font-normal text-[13px] text-[#131313]">
                              {size}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-3 mb-6">
                    <button className="font-bold text-[12.6px] text-[#131313] underline">
                      Таблица размеров
                    </button>
                  </div>

                  <Button className="w-full h-11 bg-[#131313] text-white rounded-none hover:bg-[#2a2a2a]">
                    <img
                      className="w-[19px] h-[18px] mr-1.5"
                      alt="Heart icon"
                      src="/vector-5.svg"
                    />
                    <span className="font-bold text-[12.8px]">Добавить в Фавориты</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="px-[196px] py-8">
          <div className="font-bold text-[#131313] text-[12.7px] tracking-[0] leading-[18px] [font-family:'Inter',Helvetica]">
            ОПИСАНИЕ
          </div>
          <div className="font-normal text-[#131313] text-[11.9px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] mt-2">
            Трикотажная ткань в рубчик. Приталенный дизайн. Воротник-халтер. Без рукавов. Без застежки.
          </div>
        </div>

        <section className="w-full py-8 px-8">
          <h2 className="font-bold text-[12.4px] text-[#131313] mb-[68px] font-['Inter',Helvetica] leading-[18px]">
            В ТОМ ЖЕ СТИЛЕ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[1px]">
            {products.map((product) => (
              <Card
                key={product.id}
                className="w-full max-w-[308px] h-[471px] bg-white border-none rounded-none"
              >
                <CardContent className="p-0">
                  <div className="relative h-full">
                    <img
                      className="w-full h-[432px] object-cover"
                      alt={product.alt}
                      src={product.image}
                    />
                    <div className="flex justify-between items-center px-2 mt-3">
                      <p className="font-normal text-[11.9px] text-[#131313] leading-[18px] font-['Inter',Helvetica] truncate max-w-[238px]">
                        {product.title}
                      </p>
                      <HeartIcon className="w-4 h-[15px]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EwimvaClothes;