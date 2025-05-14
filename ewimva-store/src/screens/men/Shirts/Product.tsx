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
{
id: 2,
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
id: 3,
name: 'Рубашка оксфорд',
category: 'CAPSULE',
price: 'KGS 5 990',
image: '/Рубашка оксфорд.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Рубашка оксфорд.png", alt: "1" },
    { src: "/Рубашка оксфорд_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка оксфорд_3.png", alt: "3" },
    { src: "/Рубашка оксфорд_4.png", alt: "4" },
    { src: "/Рубашка оксфорд_5.png", alt: "5" },
    { src: "/Рубашка оксфорд_6.png", alt: "6" },
],
color: "Белый",
description: "Легкая ткань. Прямой крой. Застежка на пуговицы. Ткань 100% хлопок. Ткань оксфорд. Рубашечный воротник. Манжеты на пуговицах. Закругленный низ. Застежка спереди. Стандартный дизайн. Длинный рукав. Модель ростом 185 см и носит размер M. ",
},
{
id: 4,
name: 'Рубашка комфорт стретч non iron',
category: 'NEW NOW - SELECTION',
price: 'KGS 7 990',
image: '/Рубашка комфорт стретч non iron.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Рубашка комфорт стретч non iron.png", alt: "1" },
    { src: "/Рубашка комфорт стретч non iron_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка комфорт стретч non iron_3.png", alt: "3" },
    { src: "/Рубашка комфорт стретч non iron_4.png", alt: "4" },
    { src: "/Рубашка комфорт стретч non iron_5.png", alt: "5" },
    { src: "/Рубашка комфорт стретч non iron_6.png", alt: "6" },
],
color: "Белый",
description: "Коллекция Performance. Wrinkle free: ткань, не требующая глажки. Терморегулятор: эта ткань обеспечивает оптимальную воздухопроницаемость для поддержания стабильной температуры. Comfort Stretch: эластичная ткань, обеспечивающая дополнительный комфорт. Breathable: ткань помогает регулировать температуру тела, позволяя отводить влагу. Прямой крой. Классический воротник. Передняя застежка на пуговицы. Длинные рукава с манжетами на пуговицах. Закругленный низ. Модель ростом 190 см и носит размер M. ",
},
{
id: 5,
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
id: 6,
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
id: 7,
name: 'Рубашка из лиоцелла с карманом',
category: 'NEW NOW',
price: 'KGS 6 990',
image: '/Рубашка из лиоцелла с карманом.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Рубашка из лиоцелла с карманом.png", alt: "1" },
    { src: "/Рубашка из лиоцелла с карманом_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка из лиоцелла с карманом_3.png", alt: "3" },
    { src: "/Рубашка из лиоцелла с карманом_4.png", alt: "4" },
    { src: "/Рубашка из лиоцелла с карманом_5.png", alt: "5" },
    { src: "/Рубашка из лиоцелла с карманом_6.png", alt: "6" },
],
color: "Песочный",
description: "Прямой крой. 100% лиоцелл. Рубашечный воротник. Накладной карман на груди. Короткий рукав. Передняя застежка на пуговицы. Детали вытачек сзади. Прямой низ. Модель ростом 190 см и носит размер M.",
},
{
id: 8,
name: 'Рубашка лен',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/Рубашка лен.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Рубашка лен.png", alt: "1" },
    { src: "/Рубашка лен_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка лен_3.png", alt: "3" },
    { src: "/Рубашка лен_4.png", alt: "4" },
    { src: "/Рубашка лен_5.png", alt: "5" },
    { src: "/Рубашка лен_6.png", alt: "6" },
],
color: "Черный",
description: "Голубой цвет эксклюзивно онлайн. Прямой крой. Ткань 100% лен. Рубашечный воротник. Передняя застежка на пуговицы. Длинные рукава с манжетами на пуговицах. Детали вытачек сзади. Закругленный низ. Модель ростом 190 см и носит размер M. Цвет синий фарфор эксклюзивно онлайн. ",
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