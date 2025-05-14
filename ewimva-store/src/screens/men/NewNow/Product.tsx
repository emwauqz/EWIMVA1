import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "../../../components/ui/accordion";
import { Card, CardContent } from "../../../components/ui/card";
import { HeartIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";

const products = [
{
id: 1,
name: 'Куртка-бомбер с эффектом замши',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Куртка-бомбер с эффектом замши.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Куртка-бомбер с эффектом замши.png", alt: "1" },
    { src: "/Куртка-бомбер с эффектом замши_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Куртка-бомбер с эффектом замши_3.png", alt: "3" },
    { src: "/Куртка-бомбер с эффектом замши_4.png", alt: "4" },
    { src: "/Куртка-бомбер с эффектом замши_5.png", alt: "5" },
    { src: "/Куртка-бомбер с эффектом замши_6.png", alt: "6" },
],
color: "Песочный",
description: "Коричневый цвет эксклюзивно онлайн. Фасон бомбер. Выделка под замшу. Спереди застежка на молнию. Длинные рукава с эластичными манжетами. Два боковых кармана с застежкой на молнию. Низ с эластичной резинкой. Внутри карман на молнии. Подкладка. Рост модели: 183 см, размер: М. ",
},
{
id: 2,
name: 'Рубашка в полоску',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Рубашка в полоску1.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Рубашка в полоску1.png", alt: "1" },
    { src: "/Рубашка в полоску1_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка в полоску1_3.png", alt: "3" },
    { src: "/Рубашка в полоску1_4.png", alt: "4" },
    { src: "/Рубашка в полоску1_5.png", alt: "5" },
    { src: "/Рубашка в полоску1_6.png", alt: "6" },
],
color: "Небесно-голубой",
description: "ESSENTIALS: Сделано, чтобы служить долго. Прямой крой. Ткань 100% хлопок. Принт в мельчайшую полоску. Итальянский воротник. Передняя застежка на пуговицы. Длинные рукава с манжетами на пуговицах. Закругленный низ. Модель ростом 190 см и носит размер M. ",
},
{
id: 3,
name: 'Quilted water-repellent bomber jacket',
category: 'NEW NOW - SELECTION',
price: 'KGS 7 990',
image: '/Quilted water-repellent bomber jacket.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Quilted water-repellent bomber jacket.png", alt: "1" },
    { src: "/Quilted water-repellent bomber jacket_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Quilted water-repellent bomber jacket_3.png", alt: "3" },
    { src: "/Quilted water-repellent bomber jacket_4.png", alt: "4" },
    { src: "/Quilted water-repellent bomber jacket_5.png", alt: "5" },
    { src: "/Quilted water-repellent bomber jacket_6.png", alt: "6" },
],
color: "Темно-синий",
description: "Непромокаемая ткань. Стеганый дизайн. Прямой крой. Переработанный полиэстер. Воротник-бомбер из трикотажа. Спереди застежка на металлическую молнию. Длинные рукава с эластичными манжетами. Два кармана с клапанами спереди. Низ с эластичной резинкой. Модель ростом 190 см и носит размер M. Водоотталкивающая: Прочное покрытие этого изделия защищает от легкого дождя, отталкивая воду и капли дождя. ",
},
{
id: 4,
name: 'Двубортный костюмный пиджак в елочку шерсть',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/Двубортный костюмный пиджак в елочку шерсть.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Двубортный костюмный пиджак в елочку шерсть.png", alt: "1" },
    { src: "/Двубортный костюмный пиджак в елочку шерсть_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Двубортный костюмный пиджак в елочку шерсть_3.png", alt: "3" },
    { src: "/Двубортный костюмный пиджак в елочку шерсть_4.png", alt: "4" },
    { src: "/Двубортный костюмный пиджак в елочку шерсть_5.png", alt: "5" },
    { src: "/Двубортный костюмный пиджак в елочку шерсть_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 5,
name: 'Водоотталкивающий бомбер с карманами',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Водоотталкивающий бомбер с карманами.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Водоотталкивающий бомбер с карманами.png", alt: "1" },
    { src: "/Водоотталкивающий бомбер с карманами_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Водоотталкивающий бомбер с карманами_3.png", alt: "3" },
    { src: "/Водоотталкивающий бомбер с карманами_4.png", alt: "4" },
    { src: "/Водоотталкивающий бомбер с карманами_5.png", alt: "5" },
    { src: "/Водоотталкивающий бомбер с карманами_6.png", alt: "6" },
],
color: "Синяя ночь",
description: "ESSENTIALS: Сделано, чтобы служить долго. Ветрозащитный: Этот прочный материал обеспечивает защиту от ветра для большего комфорта в активном образе жизни. Water Repellent: Техническая ткань, отталкивающая воду. Фасон бомбер. Техническая ткань. Воротник-бомбер из трикотажа. Спереди застежка на молнию. Длинные рукава с эластичными манжетами. На бедрах два накладных кармана с клапанами. Без подкладки. Внутренний карман. Низ с эластичной резинкой. Модель ростом 190 см и носит размер M. ",
},
{
id: 6,
name: 'Рубашка из ажурного трикотажа',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Рубашка из ажурного трикотажа.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Рубашка из ажурного трикотажа.png", alt: "1" },
    { src: "/Рубашка из ажурного трикотажа_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка из ажурного трикотажа_3.png", alt: "3" },
    { src: "/Рубашка из ажурного трикотажа_4.png", alt: "4" },
    { src: "/Рубашка из ажурного трикотажа_5.png", alt: "5" },
    { src: "/Рубашка из ажурного трикотажа_6.png", alt: "6" },
],
color: "Белый",
description: "Прямой крой. Смесь хлопка. Короткий рукав. Воротник в стиле боулинг. Ажурный узор. Передняя застежка на пуговицы. Модель ростом 190 см и носит размер M. ",
},
{
id: 7,
name: 'Бермуды из хлопка с вышивкой',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Бермуды из хлопка с вышивкой.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Бермуды из хлопка с вышивкой.png", alt: "1" },
    { src: "/Бермуды из хлопка с вышивкой_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Бермуды из хлопка с вышивкой_3.png", alt: "3" },
    { src: "/Бермуды из хлопка с вышивкой_4.png", alt: "4" },
    { src: "/Бермуды из хлопка с вышивкой_5.png", alt: "5" },
    { src: "/Бермуды из хлопка с вышивкой_6.png", alt: "6" },
],
color: "Глубокий темно-синий",
description: "Прямой крой. Хлопковая ткань. Пояс с регулируемым шнуром. Два боковых кармана. Сбоку вышитый логотип Mango Tennis Club. Сзади накладной карман. Модель ростом 190 см и носит размер M. Коллекция Mango Tennis Club. ",
},
{
id: 8,
name: 'Костюмный пиджак Venice slim fit чистая шерсть',
category: 'NEW NOW',
price: 'KGS 6 990',
image: '/Костюмный пиджак Venice slim fit чистая шерсть.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Костюмный пиджак Venice slim fit чистая шерсть.png", alt: "1" },
    { src: "/Костюмный пиджак Venice slim fit чистая шерсть_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Костюмный пиджак Venice slim fit чистая шерсть_3.png", alt: "3" },
    { src: "/Костюмный пиджак Venice slim fit чистая шерсть_4.png", alt: "4" },
    { src: "/Костюмный пиджак Venice slim fit чистая шерсть_5.png", alt: "5" },
    { src: "/Костюмный пиджак Venice slim fit чистая шерсть_6.png", alt: "6" },
],
color: "Серый",
description: "Приталенный крой. Ткань 100% чистая шерсть. Принт в клетку принц Уэльский. Воротник с лацканами и вырезом. Двубортная застежка. Нагрудный прорезной карман. Два накладных кармана с клапаном спереди. Манжеты на пуговицах. Рост модели: 185 см, размер: 50. ",
},
{
id: 9,
name: 'Костюмные брюки Monaco slim fit',
category: 'NEW NOW - SELECTION',
price: 'KGS 7 990',
image: '/Костюмные брюки Monaco slim fit1.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Костюмные брюки Monaco slim fit1.png", alt: "1" },
    { src: "/Костюмные брюки Monaco slim fit1_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Костюмные брюки Monaco slim fit1_3.png", alt: "3" },
    { src: "/Костюмные брюки Monaco slim fit1_4.png", alt: "4" },
    { src: "/Костюмные брюки Monaco slim fit1_5.png", alt: "5" },
    { src: "/Костюмные брюки Monaco slim fit1_6.png", alt: "6" },
],
color: "Коричневый средний",
description: "Приталенный крой. Коллекция портновских изделий. Шлевки для ремня. Спереди двубортная застежка на пуговицы и молнию. Два боковых кармана. Два прорезных кармана с пуговицей сзади. Спереди и сзади стрелки. Модель ростом 190 см и носит размер 42. ",
},
{
id: 10,
name: 'Джинсы хлопок и лен regular fit с',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/Джинсы хлопок и лен regular fit с.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Джинсы хлопок и лен regular fit с.png", alt: "1" },
    { src: "/Джинсы хлопок и лен regular fit с_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Джинсы хлопок и лен regular fit с_3.png", alt: "3" },
    { src: "/Джинсы хлопок и лен regular fit с_4.png", alt: "4" },
    { src: "/Джинсы хлопок и лен regular fit с_5.png", alt: "5" },
    { src: "/Джинсы хлопок и лен regular fit с_6.png", alt: "6" },
],
color: "Экрю",
description: "Прямой крой. Ткань из смеси льна и хлопка. Двойная застежка на пуговицу и молнию. Деталь передних складок. Сзади два накладных кармана с окантовкой и пуговицей. Модель ростом 190 см и носит размер M. ",
},
{
id: 11,
name: 'Рубашка для боулинга со структурой кроше',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/Рубашка в полоску.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Рубашка в полоску.png", alt: "1" },
    { src: "/Рубашка в полоску_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка в полоску_3.png", alt: "3" },
    { src: "/Рубашка в полоску_4.png", alt: "4" },
    { src: "/Рубашка в полоску_5.png", alt: "5" },
    { src: "/Рубашка в полоску_6.png", alt: "6" },
],
color: "Слоновая кость",
description: "Прямой крой. Смесь хлопка. Ажурная ткань. Геометрическая структура. Короткий рукав. Передняя застежка на пуговицы. Воротник, манжеты и низ с отделкой в рубчик. Модель ростом 190 см и носит размер M. ",
},
{
id: 12,
name: 'Рубашка с жатым эффектом',
category: 'CAPSULE',
price: 'KGS 7 990',
image: '/Рубашка с жатым эффектом.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Рубашка с жатым эффектом.png", alt: "1" },
    { src: "/Рубашка с жатым эффектом_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка с жатым эффектом_3.png", alt: "3" },
    { src: "/Рубашка с жатым эффектом_4.png", alt: "4" },
    { src: "/Рубашка с жатым эффектом_5.png", alt: "5" },
    { src: "/Рубашка с жатым эффектом_6.png", alt: "6" },
],
color: "Коричневый",
description: "В состав входит лиоцелл. Прямой крой. Воротник в стиле боулинг. Эффект смятия. Накладной карман на груди. Короткий рукав. Прямой низ. Небольшие боковые разрезы внизу ",
},
];

export const Product = (): JSX.Element => {
const { id } = useParams<{ id: string }>();
const productId = id ? parseInt(id, 10) : 1;
const navigate = useNavigate();

const [favorites, setFavorites] = useState<number[]>(() => {
const savedFavorites = localStorage.getItem("favorites");
return savedFavorites ? JSON.parse(savedFavorites) : [];
});

useEffect(() => {
localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);

const handleFavoriteToggle = (productId: number) => {
setFavorites((prev) =>
    prev.includes(productId)
    ? prev.filter((id) => id !== productId)
    : [...prev, productId]
);
};

const handlePurchase = (product: any) => {
const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
const existingItem = cartItems.find((item: any) => item.id === product.id);
if (existingItem) {
    existingItem.quantity += 1;
} else {
    cartItems.push({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
    colorVariants: [],
    });
}
localStorage.setItem('cartItems', JSON.stringify(cartItems));
alert(`${product.name} добавлен в корзину!`);
};

const selectedProduct = products.find((p) => p.id === productId) || products[0];

const sizes = ["XXS", "XS", "S", "M", "L", "XL"];

return (
<div className="bg-white flex flex-row justify-center w-full" style={{ marginTop: '56px' }}>
    <div className="bg-white w-full max-w-[1920px] relative">
    <div className="flex">
        <div className="flex-1 min-w-[1150px]">
        <div className="grid grid-cols-2">
            {selectedProduct.photosLarge.map((photo, index) => (
            <img
                key={index}
                className="w-full h-[802px] object-cover"
                alt={photo.alt}
                src={photo.src}
            />
            ))}
        </div>
        <div className="grid grid-cols-4">
            {selectedProduct.photosSmall.map((photo, index) => (
            <img
                key={index}
                className="w-full h-[401px] object-cover"
                alt={photo.alt}
                src={photo.src}
            />
            ))}
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
                        Composition: {selectedProduct.composition}
                        <br />
                    </span>
                    <span className="font-bold">
                        <br />
                        Происхождение
                        <br />
                    </span>
                    <span className="font-medium">
                        {selectedProduct.origin}
                        <br />
                    </span>
                    <span className="font-bold">
                        <br />
                        Уход
                        <br />
                    </span>
                    <span className="font-medium">
                        {selectedProduct.care.split(", ").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                        ))}
                    </span>
                    </div>
                </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="w-full max-w-[592px] py-6">
                <div className="mb-2 font-normal text-[13px] text-[#131313] leading-[18px]">
                {selectedProduct.name}
                </div>

                <div className="mb-6 font-normal text-[12.7px] text-[#131313] leading-[18px]">
                {selectedProduct.price}
                </div>

                <div className="flex items-center mb-6">

                <div className="ml-auto font-normal text-[12.2px] text-[#131313] text-right">
                    {selectedProduct.color}
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
                <button
                    className="font-bold text-[12.6px] text-[#131313] underline"
                    onClick={() => navigate("/help")}
                >
                    Таблица размеров
                </button>
                </div>

                <div className="flex flex-col gap-3">
                <Button
                    className="w-full h-11 bg-[#131313] text-white rounded-none hover:bg-[#2a2a2a]"
                    onClick={() => handleFavoriteToggle(selectedProduct.id)}
                >
                    <img
                    className="w-[19px] h-[18px] mr-1.5"
                    alt="Heart icon"
                    src="/vector-5.svg"
                    />
                    <span className="font-bold text-[12.8px]">
                    {favorites.includes(selectedProduct.id)
                        ? "Убрать из Фаворитов"
                        : "Добавить в Фавориты"}
                    </span>
                </Button>
                <Button
                    className="w-full h-11 bg-white text-[#131313] border border-[#131313] rounded-none hover:bg-gray-100"
                    onClick={() => handlePurchase(selectedProduct)}
                >
                    <span className="font-bold text-[12.8px]">
                    Приобрести
                    </span>
                </Button>
                </div>
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
        {selectedProduct.description}
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
                    alt={product.name}
                    src={product.image}
                />
                <div className="flex justify-between items-center px-2 mt-3">
                    <p className="font-normal text-[11.9px] text-[#131313] leading-[18px] font-['Inter',Helvetica] truncate max-w-[238px]">
                    {product.name}
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

export default Product;
