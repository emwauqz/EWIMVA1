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
name: '',
category: 'CAPSULE',
price: 'KGS 7 990',
image: '/.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 2,
name: '',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 3,
name: '',
category: 'CAPSULE',
price: 'KGS 5 990',
image: '/.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 4,
name: '',
category: 'NEW NOW - SELECTION',
price: 'KGS 7 990',
image: '/.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 5,
name: '',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 6,
name: '',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 7,
name: '',
category: 'NEW NOW',
price: 'KGS 6 990',
image: '/.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 8,
name: '',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 9,
name: '',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 10,
name: '',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 11,
name: '',
category: 'NEW NOW',
price: 'KGS 7 990',
image: '/.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 12,
name: '',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/.png", alt: "1" },
    { src: "/_2.png", alt: "2" },
],
photosSmall: [
    { src: "/_3.png", alt: "3" },
    { src: "/_4.png", alt: "4" },
    { src: "/_5.png", alt: "5" },
    { src: "/_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
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