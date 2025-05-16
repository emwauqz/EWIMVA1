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
name: 'Рубашка лен и хлопок с карманом',
category: 'CAPSULE',
price: 'KGS 7 990',
image: '/Рубашка лен и хлопок с карманом.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Рубашка лен и хлопок с карманом.png", alt: "1" },
    { src: "/Рубашка лен и хлопок с карманом_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка лен и хлопок с карманом_3.png", alt: "3" },
    { src: "/Рубашка лен и хлопок с карманом_4.png", alt: "4" },
    { src: "/Рубашка лен и хлопок с карманом_5.png", alt: "5" },
    { src: "/Рубашка лен и хлопок с карманом_6.png", alt: "6" },
],
color: "Экрю",
description: "Прямой крой. Ткань из смеси льна и хлопка. Рубашечный воротник. Передняя застежка на пуговицы. Накладной карман на груди. Манжеты на пуговицах. Прямой низ. Модель ростом 190 см и носит размер M. В наличии комплект для создания тотального образа. ",
},
{
id: 2,
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
id: 3,
name: 'Куртка-бомбер с эффектом замши',
category: 'CAPSULE',
price: 'KGS 5 990',
image: '/Куртка-бомбер с эффектом замши.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Куртка-бомбер с эффектом замши1.png", alt: "1" },
    { src: "/Куртка-бомбер с эффектом замши1_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Куртка-бомбер с эффектом замши1_3.png", alt: "3" },
    { src: "/Куртка-бомбер с эффектом замши1_4.png", alt: "4" },
    { src: "/Куртка-бомбер с эффектом замши1_5.png", alt: "5" },
],
color: "Бежевый",
description: "Фасон бомбер. Выделка под замшу. Спереди застежка на молнию. Длинные рукава с эластичными манжетами. Два боковых кармана с застежкой на молнию. Низ с эластичной резинкой. Внутри карман на молнии. Подкладка. Рост модели: 183 см, размер: М. Коричневый цвет эксклюзивно онлайн. ",
},
{
id: 4,
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
id: 5,
name: 'Куртка regular fit из шерсти',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/Куртка regular fit из шерсти.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Куртка regular fit из шерсти.png", alt: "1" },
    { src: "/Куртка regular fit из шерсти_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Куртка regular fit из шерсти_3.png", alt: "3" },
    { src: "/Куртка regular fit из шерсти_4.png", alt: "4" },
    { src: "/Куртка regular fit из шерсти_5.png", alt: "5" },
    { src: "/Куртка regular fit из шерсти_6.png", alt: "6" },
],
color: "Угольно-серый",
description: "ESSENTIALS: Сделано, чтобы служить долго. Шерсть. Воротник-стойка. Спереди застежка на молнию. По бокам карманы с застежкой на кнопки. Регулируемый низ. Подкладка. Модель ростом 187 см и носит размер M. Длинный рукав с эластичными и собранными манжетами. ",
},
{
id: 6,
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
id: 7,
name: 'Классический водоотталкивающий тренч',
category: 'NEW NOW',
price: 'KGS 6 990',
image: '/Классический водоотталкивающий тренч.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Классический водоотталкивающий тренч.png", alt: "1" },
    { src: "/Классический водоотталкивающий тренч_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Классический водоотталкивающий тренч_3.png", alt: "3" },
    { src: "/Классический водоотталкивающий тренч_4.png", alt: "4" },
    { src: "/Классический водоотталкивающий тренч_5.png", alt: "5" },
    { src: "/Классический водоотталкивающий тренч_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 8,
name: 'Водоотталкивающий плащ из хлопка',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/Водоотталкивающий плащ из хлопка.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Водоотталкивающий плащ из хлопка.png", alt: "1" },
    { src: "/Водоотталкивающий плащ из хлопка_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Водоотталкивающий плащ из хлопка_3.png", alt: "3" },
    { src: "/Водоотталкивающий плащ из хлопка_4.png", alt: "4" },
    { src: "/Водоотталкивающий плащ из хлопка_5.png", alt: "5" },
    { src: "/Водоотталкивающий плащ из хлопка_6.png", alt: "6" },
],
color: "Черный",
description: "ESSENTIALS: Сделано, чтобы служить долго. Черный цвет эксклюзивно онлайн. Water Repellent: Техническая ткань, отталкивающая воду. Классический воротник. Передняя застежка на пуговицы. Длинные рукава с пуговицами на манжетах. Два передних прорезных кармана. Задний разрез внизу. Внутренняя подкладка. Внутренний карман. Модель ростом 190 см и носит размер M. ",
},
{
id: 9,
name: 'Водоотталкивающая куртка с карманами',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Водоотталкивающая куртка с карманами.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Водоотталкивающая куртка с карманами.png", alt: "1" },
    { src: "/Водоотталкивающая куртка с карманами_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Водоотталкивающая куртка с карманами_3.png", alt: "3" },
    { src: "/Водоотталкивающая куртка с карманами_4.png", alt: "4" },
    { src: "/Водоотталкивающая куртка с карманами_5.png", alt: "5" },
    { src: "/Водоотталкивающая куртка с карманами_6.png", alt: "6" },
],
color: "Золотисто-оранжевый",
description: "Коллекция Performance. Терморегулятор: эта ткань обеспечивает оптимальную воздухопроницаемость для поддержания стабильной температуры. Comfort Stretch: эластичная ткань, обеспечивающая дополнительный комфорт. Водоотталкивающая: Прочное покрытие этого изделия защищает от легкого дождя, отталкивая воду и капли дождя. Рубашечный воротник. Потайная застежка на кнопки. На груди накладной карман с клапаном. Спереди два прорезных кармана с застежкой на водонепроницаемую молнию. Длинные рукава с регулируемыми шлейками. Без подкладки. Внутренние карманы. Внутренние швы с термозапаянным усилением. Модель ростом 190 см и носит размер M. ",
},
{
id: 10,
name: 'Стеганая куртка с перьевым наполнителем',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Стеганая куртка с перьевым наполнителем.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Стеганая куртка с перьевым наполнителем.png", alt: "1" },
    { src: "/Стеганая куртка с перьевым наполнителем_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Стеганая куртка с перьевым наполнителем_3.png", alt: "3" },
    { src: "/Стеганая куртка с перьевым наполнителем_4.png", alt: "4" },
    { src: "/Стеганая куртка с перьевым наполнителем_5.png", alt: "5" },
    { src: "/Стеганая куртка с перьевым наполнителем_6.png", alt: "6" },
],
color: "Темно-синий",
description: "Прямой крой. ESSENTIALS: Сделано, чтобы служить долго. Наполнитель из пуха и пера 80/20. Водоотталкивающая: Прочное покрытие этого изделия защищает от легкого дождя, отталкивая воду и капли дождя. Терморегулятор: эта ткань обеспечивает оптимальную воздухопроницаемость для поддержания стабильной температуры. Стеганый дизайн. Воротник перкинс. Спереди застежка на молнию. Спереди два прорезных кармана с застежкой на молнию. Длинный рукав. Прямой низ. Подкладка. Внутри карман на молнии. Модель ростом 185 см и носит размер M. ",
},
{
id: 11,
name: 'Куртка-бомбер из искусственной кожи',
category: 'NEW NOW',
price: 'KGS 7 990',
image: '/Куртка-бомбер из искусственной кожи.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Куртка-бомбер из искусственной кожи.png", alt: "1" },
    { src: "/Куртка-бомбер из искусственной кожи_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Куртка-бомбер из искусственной кожи_3.png", alt: "3" },
    { src: "/Куртка-бомбер из искусственной кожи_4.png", alt: "4" },
    { src: "/Куртка-бомбер из искусственной кожи_5.png", alt: "5" },
    { src: "/Куртка-бомбер из искусственной кожи_6.png", alt: "6" },
],
color: "Черный",
description: "Фасон бомбер. Эффект кожи. Контрастный воротник, манжеты и низ. Подкладка. Два боковых кармана с клапанами. Модель ростом 185 см и носит размер M. ",
},
{
id: 12,
name: 'Бомбер regular fit из фланели',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Бомбер regular fit из фланели.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Бомбер regular fit из фланели.png", alt: "1" },
    { src: "/Бомбер regular fit из фланели_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Бомбер regular fit из фланели_3.png", alt: "3" },
    { src: "/Бомбер regular fit из фланели_4.png", alt: "4" },
    { src: "/Бомбер regular fit из фланели_5.png", alt: "5" },
    { src: "/Бомбер regular fit из фланели_6.png", alt: "6" },
],
color: "Меланжевый темно-серый",
description: "Прямой крой. Фланель. Воротник бомбер. Края связаны резинкой. Два боковых кармана с кантом. Застежка-молния. Модель ростом 185 см и носит размер M. ",
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

const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

const allPhotos = [...selectedProduct.photosLarge, ...selectedProduct.photosSmall];

const nextImage = () => {
setCurrentImageIndex((prev) => (prev + 1) % allPhotos.length);
};

const prevImage = () => {
setCurrentImageIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
};

const sizes = ["XXS", "XS", "S", "M", "L", "XL"];

return (
<div className="bg-white flex flex-row justify-center w-full" style={{ marginTop: '56px' }}>
    <div className="bg-white w-full max-w-[1920px] relative">
    <div className="flex flex-col md:flex-row">
        {/* Mobile Carousel */}
        <div className="md:hidden w-full relative">
        <div className="relative w-full h-[500px] overflow-hidden">
            <img
            className="w-full h-auto max-h-[500px] object-contain"
            src={allPhotos[currentImageIndex].src}
            alt={allPhotos[currentImageIndex].alt}
            />
            <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10"
            >
            ←
            </button>
            <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10"
            >
            →
            </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
            {allPhotos.map((_, index) => (
            <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                onClick={() => setCurrentImageIndex(index)}
            />
            ))}
        </div>
        </div>

        {/* Desktop Photo Grid */}
        <div className="hidden md:block flex-1 min-w-[1150px]">
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

        {/* Product Details */}
        <div className="w-full md:w-[770px] bg-white px-8 md:px-8 py-4 md:py-0 relative z-10">
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
                <div className="mb-2 font-bold text-[13px] text-[#131313] leading-[18px]">
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

                {/* Sizes (hidden on mobile, shown on desktop) */}
                <div className="hidden md:block">
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
                </div>

                <div className="mt-3 mb-2 md:mb-6">
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

    <div className="px-8 md:px-[196px] py-8 relative z-10">
        <div className="font-bold text-[#131313] text-[12.7px] tracking-[0] leading-[18px] [font-family:'Inter',Helvetica]">
        ОПИСАНИЕ
        </div>
        <div className="font-normal text-[#131313] text-[11.9px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] mt-2">
        {selectedProduct.description}
        </div>
    </div>

    <section className="w-full py-8 px-0 relative z-10">
        <h2 className="font-bold text-[14px] text-[#131313] mb-[68px] font-['Inter',Helvetica] leading-[18px] px-8 md:px-9">
        В ТОМ ЖЕ СТИЛЕ
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {products.map((product) => (
            <Card
            key={product.id}
            className="w-full h-[550px] bg-white border-none rounded-none overflow-hidden"
            >
            <CardContent className="p-0">
                <div className="relative h-full">
                <img
                    className="w-full h-[511px] object-cover"
                    alt={product.name}
                    src={product.image}
                />
                <div className="flex justify-between items-center px-2 mt-3 relative z-10">
                    <p className="font-normal text-[11.9px] text-[#131313] leading-[18px] font-['Inter',Helvetica] truncate max-w-[80%]">
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