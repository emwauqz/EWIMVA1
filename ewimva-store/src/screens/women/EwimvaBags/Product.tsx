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

// Данные о товарах (берем из EwimvaDress.tsx)
const products = [
{
id: 1,
name: 'Сумка кроше на плечо',
category: 'CAPSULE',
price: 'KGS 6 999',
image: '/Сумка кроше на плечо.png',
colorVariants: [],
composition: "Composition: 100% polyester, Lining: 50% cotton, 50% polyester, Details: 100% polyurethane",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Сумка кроше на плечо.png", alt: "Сумка кроше на плечо" },
    { src: "/Сумка кроше на плечо_2.png", alt: "Сумка кроше на плечо_2" },
],
photosSmall: [
    { src: "/Сумка кроше на плечо_3.png", alt: "Сумка кроше на плечо_3" },
    { src: "/Сумка кроше на плечо_4.png", alt: "Сумка кроше на плечо_4" },
    { src: "/Сумка кроше на плечо_5.png", alt: "Сумка кроше на плечо_5" },
    { src: "/Сумка кроше на плечо_6.png", alt: "Сумка кроше на плечо_6" },
],
color: "Черный",
description: "Средний размер. Ажурная ткань. Две короткие ручки. Плечевой ремень. Застежка-молния. Подкладка. Эксклюзивно онлайн.",
},
{
id: 2,
name: 'Кожаная сумка-ведро',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 999',
image: '/Кожаная сумка-ведро.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Кожаная сумка-ведро.png", alt: "1" },
    { src: "/Кожаная сумка-ведро_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Кожаная сумка-ведро_3.png", alt: "3" },
    { src: "/Кожаная сумка-ведро_4.png", alt: "4" },
    { src: "/Кожаная сумка-ведро_5.png", alt: "5" },
    { src: "/Кожаная сумка-ведро_6.png", alt: "6" },
],
color: "Коричневый средний",
description: "100% кожа быка. Маленький размер. Плечевой ремень. Регулируемая ручка. Магнитная застежка. Внутренний карман. Подкладка 100% хлопок. 24.0x30.0x12.0 cm (Длина x Высота x Ширина). ",
},
{
id: 3,
name: 'Средняя сумка-ведро с эффектом рафии',
category: 'CAPSULE',
price: 'KGS 8 999',
image: '/Средняя сумка-ведро с эффектом рафии.png',
colorVariants: [
],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Средняя сумка-ведро с эффектом рафии.png", alt: "1" },
    { src: "/Средняя сумка-ведро с эффектом рафии_2.png", alt: "2" },
    { src: "/Средняя сумка-ведро с эффектом рафии_3.png", alt: "3" },
    { src: "/Средняя сумка-ведро с эффектом рафии_4.png", alt: "4" },
],
photosSmall: [

],
color: "Черный",
description: "Средний размер. Эффект рафии. Дизайн панама. Контрастная отделка. Плечевой ремень. Регулируемая ручка с пряжкой. Регулируемая застежка. 22.0x26.0x13.0 cm (Длина x Высота x Ширина). ",
},
{
id: 4,
name: 'Сумка-конверт из натурального волокна',
category: 'NEW NOW - SELECTION',
price: 'KGS 4 799',
image: '/Сумка-конверт из натурального волокна.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Сумка-конверт из натурального волокна.png", alt: "1" },
    { src: "/Сумка-конверт из натурального волокна_2.png", alt: "2" },    
    { src: "/Сумка-конверт из натурального волокна_3.png", alt: "3" },
    { src: "/Сумка-конверт из натурального волокна_4.png", alt: "4" },
],
photosSmall: [],
color: "Черный",
description: "Маленький размер. Ткань из натуральных волокон. Конверт. Ручка. Съемная ручка из цепочки. Без застежки. 20.0x14.0x3.0 cm (Длина x Высота x Ширина). ",
},
{
id: 5,
name: 'Сумка в стиле конверта через плечо',
category: 'CAPSULE',
price: 'KGS 3 499 ',
image: '/Сумка в стиле конверта через плечо.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Сумка в стиле конверта через плечо.png", alt: "1" },
    { src: "/Сумка в стиле конверта через плечо_2.png", alt: "2" },
    { src: "/Сумка в стиле конверта через плечо_3.png", alt: "3" },
    { src: "/Сумка в стиле конверта через плечо_4.png", alt: "4" },],
photosSmall: [],
color: "Черный",
description: "Удоб100% кожа быка. Стиль шоппер. Большой размер. Двойная ручка. Плечевой ремень. Магнитная застежка. Декоративные строчки. Внутренняя подкладка. 43.0x25.0x9.0 cm (Длина x Высота x Ширина).ный ",
},
{
id: 6,
name: 'Средняя сумка-шоппер из кожи',
category: 'NEW NOW - SELECTION',
price: 'KGS 24 999',
image: '/Средняя сумка-шоппер из кожи.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Средняя сумка-шоппер из кожи.png", alt: "1" },
    { src: "/Средняя сумка-шоппер из кожи_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Средняя сумка-шоппер из кожи_3.png", alt: "3" },
    { src: "/Средняя сумка-шоппер из кожи_4.png", alt: "4" },
    { src: "/Средняя сумка-шоппер из кожи_5.png", alt: "5" },
    { src: "/Средняя сумка-шоппер из кожи_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 7,
name: 'Сумка на плечевом ремне с заклепками',
category: 'NEW NOW',
price: 'KGS 5 999',
image: '/Сумка на плечевом ремне с заклепками.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Сумка на плечевом ремне с заклепками.png", alt: "1" },
    { src: "/Сумка на плечевом ремне с заклепками_2.png", alt: "2" },
    { src: "/Сумка на плечевом ремне с заклепками_3.png", alt: "3" },
    { src: "/Сумка на плечевом ремне с заклепками_4.png", alt: "4" },
],
photosSmall: [],
color: "Белый",
description: "Удобный ",
},
{
id: 8,
name: 'Фактурная сумка-шоппер',
category: 'NEW NOW - SELECTION',
price: 'KGS 4 799 ',
image: '/Фактурная сумка-шоппер.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Фактурная сумка-шоппер.png", alt: "1" },
    { src: "/Фактурная сумка-шоппер_2.png", alt: "2" },
    { src: "/Фактурная сумка-шоппер_3.png", alt: "3" },
    { src: "/Фактурная сумка-шоппер_4.png", alt: "4" },],
photosSmall: [],
color: "Экрю",
description: "Мягкая искусственная кожа. Большой размер. Стиль шоппер. Две короткие ручки. Плечевой ремень. Застежка на крючок. 50.0x30.0x17.0 cm (Длина x Высота x Ширина). ",
},
{
id: 9,
name: 'Сумка на плечо с принтованной надписью',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/Сумка на плечо с принтованной надписью.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Сумка на плечо с принтованной надписью.png", alt: "1" },
    { src: "/Сумка на плечо с принтованной надписью_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Сумка на плечо с принтованной надписью_3.png", alt: "3" },
    { src: "/Сумка на плечо с принтованной надписью_4.png", alt: "4" },
    { src: "/Сумка на плечо с принтованной надписью_5.png", alt: "5" },
    { src: "/Сумка на плечо с принтованной надписью_6.png", alt: "6" },
],
color: "Грязно-белый",
description: "В состав входит кожа. Плечевой ремень. Печатное сообщение. Контрастные канты. Застежка-молния. Внутренний карман. Коллекция Чемпионат по теннису. В знак уважения к одному из самых социальных видов спорта и в честь нашего спонсорства Barcelona Open Banc Sabadell – 72-го Открытого чемпионата Барселоны по теннису мы выпустили коллекцию одежды, которая представляет самую изысканную сторону этого спорта, с деталями в стиле ретро. 32.0x20.0x10.0 cm (Длина x Высота x Ширина). ",
},
{
id: 10,
name: 'Атласная сумка с бахромой для ношения в руке',
category: 'NEW NOW - SELECTION',
price: 'KGS 9 000 ',
image: '/Атласная сумка с бахромой для ношения в руке.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Атласная сумка с бахромой для ношения в руке.png", alt: "1" },
    { src: "/Атласная сумка с бахромой для ношения в руке_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Атласная сумка с бахромой для ношения в руке_3.png", alt: "3" },
    { src: "/Атласная сумка с бахромой для ношения в руке_4.png", alt: "4" },
    { src: "/Атласная сумка с бахромой для ношения в руке_5.png", alt: "5" },
    { src: "/Атласная сумка с бахромой для ношения в руке_6.png", alt: "6" },
],
color: "Экрю",
description: "Эта сумочка сочетает в себе мягкость атласной ткани с элегантной бахромой, излучающей изысканность и динамизм. Уникальный дизайн аксессуара добавит гламурную нотку и движение в любой образ. Маленький размер. Атласная ткань. Длинный дизайн. Ручка. По низу бахрома. Без застежки. Внутренняя подкладка. Коллекция для праздников и церемоний. Товары из коллекции CAPSULE можно обменять или вернуть в течение 14 дней с даты отправки. 21.0x31.0x1.0 cm (Длина x Высота x Ширина). ",
},
{
id: 11,
name: 'Замшевая сумка на цепочке',
category: 'NEW NOW',
price: 'KGS 7 999',
image: '/Замшевая сумка на цепочке.png',
colorVariants: [
],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Замшевая сумка на цепочке.png", alt: "1" },
    { src: "/Замшевая сумка на цепочке_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Замшевая сумка на цепочке_3.png", alt: "3" },
    { src: "/Замшевая сумка на цепочке_4.png", alt: "4" },
    { src: "/Замшевая сумка на цепочке_5.png", alt: "5" },
    { src: "/Замшевая сумка на цепочке_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 12,
name: 'Кожаная сумка с металлической ручкой',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Кожаная сумка с металлической ручкой.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Кожаная сумка с металлической ручкой.png", alt: "1" },
    { src: "/Кожаная сумка с металлической ручкой_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Кожаная сумка с металлической ручкой_3.png", alt: "3" },
    { src: "/Кожаная сумка с металлической ручкой_4.png", alt: "4" },
    { src: "/Кожаная сумка с металлической ручкой_5.png", alt: "5" },
    { src: "/Кожаная сумка с металлической ручкой_6.png", alt: "6" },
    { src: "/Кожаная сумка с металлической ручкой_7.png", alt: "7" },
    { src: "/Кожаная сумка с металлической ручкой_8.png", alt: "8" },
    { src: "/Кожаная сумка с металлической ручкой_9.png", alt: "9" },
],
color: "Черный",
description: "100% кожа быка. Маленький размер. Металлическая ручка. Металлическая магнитная застежка. Коллекция для праздников и церемоний. Коллекция Selection. Рост модели: 177 см, размер: S/36. 33.0x14.0x7.0 cm (Длина x Высота x Ширина). ",
},
{
id: 13,
name: 'Плетеная кожаная сумка на плечо',
category: 'CAPSULE',
price: 'KGS 12 990',
image: '/Плетеная кожаная сумка на плечо.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Плетеная кожаная сумка на плечо.png", alt: "1" },
    { src: "/Плетеная кожаная сумка на плечо_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Плетеная кожаная сумка на плечо_3.png", alt: "3" },
    { src: "/Плетеная кожаная сумка на плечо_4.png", alt: "4" },
    { src: "/Плетеная кожаная сумка на плечо_5.png", alt: "5" },
    { src: "/Плетеная кожаная сумка на плечо_6.png", alt: "6" },
],
color: "Шоколадный",
description: "100% кожа быка. Плетеный дизайн. Маленький размер. Плечевой ремень. Магнитная застежка. 33.0x18.0x10.0 cm (Длина x Высота x Ширина).",
},
{
id: 14,
name: 'Овальная сумка на плечо',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/Овальная сумка на плечо.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Овальная сумка на плечо.png", alt: "1" },
    { src: "/Овальная сумка на плечо_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Овальная сумка на плечо_3.png", alt: "3" },
    { src: "/Овальная сумка на плечо_4.png", alt: "4" },
    { src: "/Овальная сумка на плечо_5.png", alt: "5" },
],
color: "Черный",
description: "Средний размер. Эффект кожи. Плечевой ремень. Регулируемый ремень с пряжкой. Застежка-молния. Внутренняя подкладка. 31.0x26.0x9.0 cm (Длина x Высота x Ширина). ",
},
{
id: 15,
name: 'Овальная сумка на плечевом ремне',
category: 'NEW NOW',
price: 'KGS 3 999',
image: '/Овальная сумка на плечевом ремне.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Овальная сумка на плечевом ремне.png", alt: "1" },
    { src: "/Овальная сумка на плечевом ремне_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Овальная сумка на плечевом ремне_3.png", alt: "3" },
    { src: "/Овальная сумка на плечевом ремне_4.png", alt: "4" },
    { src: "/Овальная сумка на плечевом ремне_5.png", alt: "5" },
    { src: "/Овальная сумка на плечевом ремне_6.png", alt: "6" },
],
color: "Коричневый средний",
description: "Маленький размер. Овальный дизайн. Двойная ручка. Внутри сумка. Застежка-молния. Декоративные строчки. Подкладка. 21.0x13.0x6.0 cm (Длина x Высота x Ширина).",
},
{
id: 16,
name: 'Сумка на плечо с пайетками',
category: 'NEW NOW - SELECTION',
price: 'KGS 4 799 ',
image: '/Сумка на плечо с пайетками.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Сумка на плечо с пайетками.png", alt: "1" },
    { src: "/Сумка на плечо с пайетками_2.png", alt: "2" },
    { src: "/Сумка на плечо с пайетками_3.png", alt: "3" },
    { src: "/Сумка на плечо с пайетками_4.png", alt: "4" },],
photosSmall: [],
color: "Белый",
description: "Маленький размер. Плечевой ремень. Изделие расшито пайетками. Без застежки. 31.0x58.0x1.0 cm (Длина x Высота x Ширина). ",
},
{
id: 17,
name: 'Shoulder bag with buckles',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Shoulder bag with buckles.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Shoulder bag with buckles.png", alt: "1" },
    { src: "/Shoulder bag with buckles_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Shoulder bag with buckles_3.png", alt: "3" },
    { src: "/Shoulder bag with buckles_4.png", alt: "4" },
    { src: "/Shoulder bag with buckles_5.png", alt: "5" },
    { src: "/Shoulder bag with buckles_6.png", alt: "6" },
],
color: "Серый",
description: "Эффект кожи. Плечевой ремень. Короткая ручка. Внутренний карман. Застежка-молния. Застежка на кнопках. Декоративные пряжки. Подкладка. 34.0x17.0x7.0 cm (Длина x Высота x Ширина). ",
},
{
id: 18,
name: 'Кожаная сумка в виде месяца',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Кожаная сумка в виде месяца.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Кожаная сумка в виде месяца.png", alt: "1" },
    { src: "/Кожаная сумка в виде месяца_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Кожаная сумка в виде месяца_3.png", alt: "3" },
    { src: "/Кожаная сумка в виде месяца_4.png", alt: "4" },
    { src: "/Кожаная сумка в виде месяца_5.png", alt: "5" },
    { src: "/Кожаная сумка в виде месяца_6.png", alt: "6" },
],
color: "Пастельный светло-серый",
description: "100% кожа быка. Дизайн луна. Большой размер. Плечевой ремень. Регулируемая ручка. Встроенная ручка. Застежка-молния. Внутренняя подкладка. 44.0x73.0x2.0 cm (Длина x Высота x Ширина). ",
},
{
id: 19,
name: 'Большая плетеная кожаная сумка на плечо',
category: 'NEW NOW',
price: 'KGS 12 990',
image: '/Большая плетеная кожаная сумка на плечо.png',
colorVariants: [
],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Большая плетеная кожаная сумка на плечо.png", alt: "1" },
    { src: "/Большая плетеная кожаная сумка на плечо_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Большая плетеная кожаная сумка на плечо_3.png", alt: "3" },
    { src: "/Большая плетеная кожаная сумка на плечо_4.png", alt: "4" },
    { src: "/Большая плетеная кожаная сумка на плечо_5.png", alt: "5" },
],
color: "Черный",
description: "100% кожа быка. Большой размер. Плетеный дизайн. Плечевой ремень. Магнитная застежка. 50.0x51.0x4.0 cm (Длина x Высота x Ширина). ",
},
{
id: 20,
name: 'Кожаная сумка-шоппер пэчворк',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Кожаная сумка-шоппер пэчворк.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "Кожаная сумка-шоппер пэчворк.png", alt: "1" },
    { src: "/Кожаная сумка-шоппер пэчворк_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Кожаная сумка-шоппер пэчворк_3.png", alt: "3" },
    { src: "/Кожаная сумка-шоппер пэчворк_4.png", alt: "4" },
    { src: "/Кожаная сумка-шоппер пэчворк_5.png", alt: "5" },
    { src: "/Кожаная сумка-шоппер пэчворк_6.png", alt: "6" },
],
color: "Черный",
description: "100% овечья кожа. Большой размер. Стиль шоппер. Узор пэчворк. Плечевой ремень. Магнитная застежка. Внутренняя подкладка. Коллекция Selection. 46.0x51.0x19.0 cm (Длина x Высота x Ширина).",
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