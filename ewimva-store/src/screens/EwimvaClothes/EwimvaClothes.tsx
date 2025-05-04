import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Card, CardContent } from "../../components/ui/card";
import { GroupByAnima } from "./sections/GroupByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima";
import Header from '../../components/Header';
import Footer from "../../components/Footer";


export const EwimvaClothes = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full" data-model-id="1:8">
      <div className="bg-white w-full max-w-[1920px] relative">
        <Header />
        
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
                <GroupByAnima />
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

        <GroupWrapperByAnima />
        <Footer />
      </div>
    </div>
  );
};

export default EwimvaClothes;
