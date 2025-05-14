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
name: 'Шелковая рубашка с фуляром и бахромой',
category: 'NEW NOW - SELECTION',
price: 'KGS 17 990',
image: '/Шелковая рубашка с фуляром и бахромой.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Шелковая рубашка с фуляром и бахромой.png", alt: "1" },
    { src: "/Шелковая рубашка с фуляром и бахромой_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Шелковая рубашка с фуляром и бахромой_3.png", alt: "3" },
    { src: "/Шелковая рубашка с фуляром и бахромой_4.png", alt: "4" },
    { src: "/Шелковая рубашка с фуляром и бахромой_5.png", alt: "5" },
    { src: "/Шелковая рубашка с фуляром и бахромой_6.png", alt: "6" },
],
color: "Грязно-белый",
description: "Эта рубашка – воплощение роскоши и универсальности. Восхитительная шелковая ткань обеспечивает мягкость и элегантность, многопозиционный фуляр с бахромой придает динамичность и уникальность, адаптируясь к различным стилям, а возможность сочетать рубашку с брюками или юбкой из коллекции позволяет создавать изысканные и гармоничные тотальные образы. Шелк. Прямой крой. Отложной воротник с длинными лацканами. Клапаны с бахромой по краям. Длинные рукава с манжетами на пуговицах. Контрастные воротник и манжеты. Передняя застежка на пуговицы, скрытые планкой. Товары из коллекции CAPSULE можно обменять или вернуть в течение 14 дней с даты отправки.",
},
{
id: 2,
name: 'Асимметричная блузка с фуляром и бахромой',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Асимметричная блузка с фуляром и бахромой.png',
colorVariants: [],
composition: "Composition: 100% viscose, Lining: 100% polyester, Fringe: 100% viscose",
origin: "Разработано в Барселоне, Производство: Марокко",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка перхлорэтиленом, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Асимметричная блузка с фуляром и бахромой.png", alt: "Асимметричная блузка с фуляром и бахромой" },
    { src: "/Асимметричная блузка с фуляром и бахромой_2.png", alt: "Асимметричная блузка с фуляром и бахромой_2" },
],
photosSmall: [
    { src: "/Асимметричная блузка с фуляром и бахромой_3.png", alt: "Асимметричная блузка с фуляром и бахромой_3" },
    { src: "/Асимметричная блузка с фуляром и бахромой_4.png.png", alt: "Асимметричная блузка с фуляром и бахромой_4" },
    { src: "/Асимметричная блузка с фуляром и бахромой_5.png.png", alt: "Асимметричная блузка с фуляром и бахромой_5" },
    { src: "/Асимметричная блузка с фуляром и бахромой_6.png.png", alt: "Асимметричная блузка с фуляром и бахромой_6" },
],
color: "Коричневый",
description: "Прямой крой. Асимметричный вырез. Короткий рукав. Горловина украшена фуляром. Отделка бахромой. Боковая застежка-молния. Total look. Эта одежда принадлежит нашей коллекции для мероприятий, созданной, чтобы сделать вас идеальной гостьей на любой вечеринке, свадьбе или церемонии.",
},
{
id: 3,
name: 'Рубашка regular из смесового льна',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 490',
image: '/Рубашка regular из смесового льна.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Рубашка regular из смесового льна.png", alt: "1" },
    { src: "/Рубашка regular из смесового льна_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка regular из смесового льна_3.png", alt: "3" },
    { src: "/Рубашка regular из смесового льна_4.png", alt: "4" },
    { src: "/Рубашка regular из смесового льна_5.png", alt: "5" },
    { src: "/Рубашка regular из смесового льна_6.png", alt: "6" },
],
color: "Золото",
description: "Ткань из смеси льна. Прямой крой. Прямой крой. Рубашечный воротник. Длинные рукава с манжетами на пуговицах. Спереди потайная застежка на пуговицы. Коллекция Рамадан.",
},
{
id: 4,
name: 'Объемная рубашка с вышивкой',
category: 'NEW NOW',
price: 'KGS 6 990',
image: '/Объемная рубашка с вышивкой.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Объемная рубашка с вышивкой.png", alt: "1" },
    { src: "/Объемная рубашка с вышивкой_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Объемная рубашка с вышивкой_3.png", alt: "3" },
    { src: "/Объемная рубашка с вышивкой_4.png", alt: "4" },
    { src: "/Объемная рубашка с вышивкой_5.png", alt: "5" },
    { src: "/Объемная рубашка с вышивкой_6.png", alt: "6" },
],
color: "Грязно-белый",
description: "Легкая трикотажная ткань. Глубокое декольте. Идеально для повседневного образа.",
},
{
id: 5,
name: 'Джинсы wideleg с необработанными краями',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/Джинсы wideleg с необработанными краями.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Джинсы wideleg с необработанными краями.png", alt: "1" },
    { src: "/Джинсы wideleg с необработанными краями_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Джинсы wideleg с необработанными краями_3.png", alt: "3" },
    { src: "/Джинсы wideleg с необработанными краями_4.png", alt: "4" },
    { src: "/Джинсы wideleg с необработанными краями_5.png", alt: "5" },
    { src: "/Джинсы wideleg с необработанными краями_6.png", alt: "6" },
],
color: "Синий средний",
description: "Джинсовая ткань из хлопка. Длинный дизайн. Фасон wideleg. Полная длина. Высокая посадка. Шлёвки. Пять карманов. Передняя застежка на молнию и пуговицу. Необработанная линия низа с торчащими нитками.",
},
{
id: 6,
name: 'Топ из лиоцелла с пуговицами на спине',
category: 'NEW NOW - SELECTION',
price: 'KGS 4 990',
image: '/Топ из лиоцелла с пуговицами на спине.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Топ из лиоцелла с пуговицами на спине.png", alt: "1" },
    { src: "/Топ из лиоцелла с пуговицами на спине_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Топ из лиоцелла с пуговицами на спине_3.png", alt: "3" },
    { src: "/Топ из лиоцелла с пуговицами на спине_4.png", alt: "4" },
    { src: "/Топ из лиоцелла с пуговицами на спине_5.png", alt: "5" },
    { src: "/Топ из лиоцелла с пуговицами на спине_6.png", alt: "6" },
],
color: "Коричневый",
description: "Ткань из лиоцелла. Кроп-дизайн. Прямой крой. Круглый вырез. Без рукавов. Застежка на пуговицы сзади. Total look.",
},
{
id: 7,
name: 'Рубашка из лиоцелла с запахом и завязками',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Рубашка из лиоцелла с запахом и завязками.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Рубашка из лиоцелла с запахом и завязками.png", alt: "1" },
    { src: "/Рубашка из лиоцелла с запахом и завязками_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка из лиоцелла с запахом и завязками_3.png", alt: "3" },
    { src: "/Рубашка из лиоцелла с запахом и завязками_4.png", alt: "4" },
    { src: "/Рубашка из лиоцелла с запахом и завязками_5.png", alt: "5" },
    { src: "/Рубашка из лиоцелла с запахом и завязками_6.png", alt: "6" },
],
color: "Морская волна",
description: "В состав входит лиоцелл. Полупрозрачный дизайн. Запáх. Рубашечный воротник. Длинный рукав. Накладной карман на груди. На талии завязки.",
},
{
id: 8,
name: 'Объемная рубашка изо льна',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/Объемная рубашка изо льна.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Объемная рубашка изо льна.png", alt: "1" },
    { src: "/Объемная рубашка изо льна_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Объемная рубашка изо льна_3.png", alt: "3" },
    { src: "/Объемная рубашка изо льна_4.png", alt: "4" },
    { src: "/Объемная рубашка изо льна_5.png", alt: "5" },
    { src: "/Объемная рубашка изо льна_6.png", alt: "6" },
],
color: "Черный",
description: "Ткань 100% лен. Оверсайз дизайн. Рубашечный воротник. Длинные рукава с манжетами на пуговицах. Застежка на пуговицы спереди. ",
},
{
id: 9,
name: 'Вязаный жилет с нарядными пуговицами',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Вязаный жилет с нарядными пуговицами.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Вязаный жилет с нарядными пуговицами.png", alt: "1" },
    { src: "/Вязаный жилет с нарядными пуговицами_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Вязаный жилет с нарядными пуговицами_3.png", alt: "3" },
    { src: "/Вязаный жилет с нарядными пуговицами_4.png", alt: "4" },
    { src: "/Вязаный жилет с нарядными пуговицами_5.png", alt: "5" },
    { src: "/Вязаный жилет с нарядными пуговицами_6.png", alt: "6" },
],
color: "Глубокий темно-синий",
description: "Тонкий трикотаж. Прямой крой. V-образный вырез. Без рукавов. Широкие бретели. Передняя застежка на пуговицы. Пуговицы украшены стразами. ",
},
{
id: 10,
name: 'Объемная рубашка из лиоцелла',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Объемная рубашка из лиоцелла.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Объемная рубашка из лиоцелла.png", alt: "1" },
    { src: "/Объемная рубашка из лиоцелла_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Объемная рубашка из лиоцелла_3.png", alt: "3" },
    { src: "/Объемная рубашка из лиоцелла_4.png", alt: "4" },
    { src: "/Объемная рубашка из лиоцелла_5.png", alt: "5" },
    { src: "/Объемная рубашка из лиоцелла_6.png", alt: "6" },
],
color: "Экрю",
description: "В состав входят лен и лиоцелл. Оверсайз дизайн. Длинный дизайн. Прямой крой. Рубашечный воротник. Длинные рукава с манжетами на пуговицах. Два накладных кармана спереди. Total look. Спереди потайная застежка на пуговицы. ",
},
{
id: 11,
name: 'Блузка со сборками и открытыми плечами',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/Блузка со сборками и открытыми плечами.png',
colorVariants: [
],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Блузка со сборками и открытыми плечами.png", alt: "1" },
    { src: "/Блузка со сборками и открытыми плечами_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Блузка со сборками и открытыми плечами_3.png", alt: "3" },
    { src: "/Блузка со сборками и открытыми плечами_4.png", alt: "4" },
    { src: "/Блузка со сборками и открытыми плечами_5.png", alt: "5" },
    { src: "/Блузка со сборками и открытыми плечами_6.png", alt: "6" },
],
color: "Белый",
description: "Ткань 100% хлопок. Глубокий вырез. Открытые плечи. Вверху присборенная вставка. Длинный рукав с эластичными и собранными манжетами. Эластичный пояс. На талии банты. Без застежки. ",
},
{
id: 12,
name: 'Рубашка с вышивкой',
category: 'NEW NOW - SELECTION',
price: 'KGS 7 990',
image: '/Рубашка с вышивкой.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Рубашка с вышивкой.png", alt: "1" },
    { src: "/Рубашка с вышивкой_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Рубашка с вышивкой_3.png", alt: "3" },
    { src: "/Рубашка с вышивкой_4.png", alt: "4" },
    { src: "/Рубашка с вышивкой_5.png", alt: "5" },
    { src: "/Рубашка с вышивкой_6.png", alt: "6" },
],
color: "Грязно-белый",
description: "Ткань 100% хлопок. Стандартная длина. Длинный рукав. Легкая плоская структура. Передняя застежка. Острый лацкан. Силуэт оверсайз. V-образный вырез горловины. Длинный рукав. Спереди завязки. Присборенные детали. Вышивка. Прямой крой. ",
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

// Size options data
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