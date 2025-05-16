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
name: 'Cвитшот из вельвета с воротником perkins',
category: 'CAPSULE',
price: 'KGS 26 490',
image: '/Cвитшот из вельвета с воротником perkins.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Cвитшот из вельвета с воротником perkins.png", alt: "1" },
    { src: "/Cвитшот из вельвета с воротником perkins_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Cвитшот из вельвета с воротником perkins_3.png", alt: "3" },
    { src: "/Cвитшот из вельвета с воротником perkins_4.png", alt: "4" },
    { src: "/Cвитшот из вельвета с воротником perkins_5.png", alt: "5" },
    { src: "/Cвитшот из вельвета с воротником perkins_6.png", alt: "6" },
],
color: "Экрю",
description: "Вельвет. Стандартный дизайн. Прямой крой. Воротник перкинс. Длинный рукав. Без застежки. Рост модели: 175 см, размер: S/36. Total look. ",
},
{
id: 2,
name: 'Толстовка оверсайз с принтованной надписью',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Толстовка оверсайз с принтованной надписью.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Толстовка оверсайз с принтованной надписью.png", alt: "1" },
    { src: "/Толстовка оверсайз с принтованной надписью_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Толстовка оверсайз с принтованной надписью_3.png", alt: "3" },
    { src: "/Толстовка оверсайз с принтованной надписью_4.png", alt: "4" },
    { src: "/Толстовка оверсайз с принтованной надписью_5.png", alt: "5" },
    { src: "/Толстовка оверсайз с принтованной надписью_6.png", alt: "6" },
],
color: "Глубокий темно-синий",
description: "Хлопковая ткань. Оверсайз дизайн. Круглый вырез. Длинные рукава с эластичными манжетами. На груди и спине принтованная надпись. Эксклюзивно онлайн. Коллекция Чемпионат по теннису ",
},
{
id: 3,
name: 'Укороченный свитшот с капюшоном',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/Укороченный свитшот с капюшоном.png',
colorVariants: [
],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Укороченный свитшот с капюшоном.png", alt: "1" },
    { src: "/Укороченный свитшот с капюшоном_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Укороченный свитшот с капюшоном_3.png", alt: "3" },
    { src: "/Укороченный свитшот с капюшоном_4.png", alt: "4" },
    { src: "/Укороченный свитшот с капюшоном_5.png", alt: "5" },
    { src: "/Укороченный свитшот с капюшоном_6.png", alt: "6" },
],
color: "Серый",
description: "Хлопковая ткань. Кроп-дизайн. Прямой крой. Воротник-стойка. С капюшоном. Длинные рукава с эластичными манжетами. Спереди застежка на молнию. ",
},
{
id: 4,
name: 'Джемпер с косами и ажурными деталями',
category: 'NEW NOW - SELECTION',
price: 'KGS 2 990',
image: '/Джемпер с косами и ажурными деталями.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Джемпер с косами и ажурными деталями.png", alt: "1" },
    { src: "/Джемпер с косами и ажурными деталями_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Джемпер с косами и ажурными деталями_3.png", alt: "3" },
    { src: "/Джемпер с косами и ажурными деталями_4.png", alt: "4" },
    { src: "/Джемпер с косами и ажурными деталями_5.png", alt: "5" },
    { src: "/Джемпер с косами и ажурными деталями_6.png", alt: "6" },
],
color: "Экрю",
description: "Толстая вязка. Ажурная вязка. Трикотаж с косами. Прямой крой. Круглый вырез. Края связаны резинкой. ",
},
{
id: 5,
name: 'Укороченный кардиган из трикотажа',
category: 'CAPSULE',
price: 'KGS 5 990',
image: '/Укороченный кардиган из трикотажа.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Укороченный кардиган из трикотажа.png", alt: "1" },
    { src: "/Укороченный кардиган из трикотажа_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Укороченный кардиган из трикотажа_3.png", alt: "3" },
    { src: "/Укороченный кардиган из трикотажа_4.png", alt: "4" },
    { src: "/Укороченный кардиган из трикотажа_5.png", alt: "5" },
    { src: "/Укороченный кардиган из трикотажа_6.png", alt: "6" },
],
color: "Бежевый",
description: "Средняя вязка. Комбинированный дизайн. Прямой крой. Круглый вырез. Короткий рукав. Передняя застежка на пуговицы. ",
},
{
id: 6,
name: 'Джемпер с ажурным узором',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Джемпер с ажурным узором.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Джемпер с ажурным узором.png", alt: "1" },
    { src: "/Джемпер с ажурным узором_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Джемпер с ажурным узором_3.png", alt: "3" },
    { src: "/Джемпер с ажурным узором_4.png", alt: "4" },
    { src: "/Джемпер с ажурным узором_5.png", alt: "5" },
    { src: "/Джемпер с ажурным узором_6.png", alt: "6" },
],
color: "Экрю",
description: "Средняя вязка. Ажурная вязка. Прямой крой. Круглый вырез. Длинный рукав. Края связаны резинкой. Без застежки. Рост модели: 177 см, размер: S/36. ",
},
{
id: 7,
name: 'Вязаный жакет с нарядными пуговицами',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 999',
image: '/Вязаный жакет с нарядными пуговицами.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Вязаный жакет с нарядными пуговицами.png", alt: "1" },
    { src: "/Вязаный жакет с нарядными пуговицами_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Вязаный жакет с нарядными пуговицами_3.png", alt: "3" },
    { src: "/Вязаный жакет с нарядными пуговицами_4.png", alt: "4" },
    { src: "/Вязаный жакет с нарядными пуговицами_5.png", alt: "5" },
    { src: "/Вязаный жакет с нарядными пуговицами_6.png", alt: "6" },
],
color: "Чёрный",
description: "Трикотажная ткань. Прямой крой. V-образный вырез. Длинный рукав. Застежка на пуговицы спереди. Пуговицы украшены стразами.",
},
{
id: 8,
name: 'Трикотажный кардиган с V-образной горловиной',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Трикотажный кардиган с V-образной горловиной.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Трикотажный кардиган с V-образной горловиной.png", alt: "1" },
    { src: "/Трикотажный кардиган с V-образной горловиной_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Трикотажный кардиган с V-образной горловиной_3.png", alt: "3" },
    { src: "/Трикотажный кардиган с V-образной горловиной_4.png", alt: "4" },
    { src: "/Трикотажный кардиган с V-образной горловиной_5.png", alt: "5" },
    { src: "/Трикотажный кардиган с V-образной горловиной_6.png", alt: "6" },
],
color: "Меланжевый темно-серый",
description: "Прямой крой. V-образный вырез. Длинный рукав. Застежка на пуговицы спереди. Края связаны резинкой. Рост модели: 179 см, размер: S/36. Тонкий трикотаж.",
},
{
id: 9,
name: 'Трикотажный жакет с люрексом и пуговицами',
category: 'NEW NOW - SELECTION',
price: 'KGS 7 990',
image: '/Трикотажный жакет с люрексом и пуговицами.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Трикотажный жакет с люрексом и пуговицами.png", alt: "1" },
    { src: "/Трикотажный жакет с люрексом и пуговицами_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Трикотажный жакет с люрексом и пуговицами_3.png", alt: "3" },
    { src: "/Трикотажный жакет с люрексом и пуговицами_4.png", alt: "4" },
    { src: "/Трикотажный жакет с люрексом и пуговицами_5.png", alt: "5" },
    { src: "/Трикотажный жакет с люрексом и пуговицами_6.png", alt: "6" },
],
color: "Серебро",
description: "Трикотаж. Ткань с люрексом. Прямой крой. Круглый вырез. Длинный рукав. Застежка на пуговицы спереди. Коллекция для праздников и церемоний. Рост модели: 179 см, размер: S/36.",
},
{
id: 10,
name: 'Джемпер из тонкого трикотажа с короткими рукавами',
category: 'CAPSULE',
price: 'KGS 5 999',
image: '/Джемпер из тонкого трикотажа с короткими рукавами.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Джемпер из тонкого трикотажа с короткими рукавами.png", alt: "1" },
    { src: "/Джемпер из тонкого трикотажа с короткими рукавами_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Джемпер из тонкого трикотажа с короткими рукавами_3.png", alt: "3" },
    { src: "/Джемпер из тонкого трикотажа с короткими рукавами_4.png", alt: "4" },
    { src: "/Джемпер из тонкого трикотажа с короткими рукавами_5.png", alt: "5" },
    { src: "/Джемпер из тонкого трикотажа с короткими рукавами_6.png", alt: "6" },
],
color: "Белый",
description: "Тонкий трикотаж. Длинный дизайн. Оверсайз дизайн. Круглый вырез. Короткий рукав. Без застежки.",
},
{
id: 11,
name: 'Вязаный кардиган с пуговицами-стразами',
category: 'NEW NOW - CAPSULE',
price: 'KGS 4 290',
image: '/Вязаный кардиган с пуговицами-стразами.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Вязаный кардиган с пуговицами-стразами.png", alt: "1" },
    { src: "/Вязаный кардиган с пуговицами-стразами_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Вязаный кардиган с пуговицами-стразами_3.png", alt: "3" },
    { src: "/Вязаный кардиган с пуговицами-стразами_4.png", alt: "4" },
    { src: "/Вязаный кардиган с пуговицами-стразами_5.png", alt: "5" },
    { src: "/Вязаный кардиган с пуговицами-стразами_6.png", alt: "6" },
],
color: "Экрю",
description: "Средняя вязка. Стандартный дизайн. Прямой крой. Круглый вырез. Длинный рукав. Застежка на пуговицы спереди. Пуговицы украшены стразами.",
},
{
id: 12,
name: 'Джемпер из шерсти с круглым вырезом горловины',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Джемпер из шерсти с круглым вырезом горловины.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Джемпер из шерсти с круглым вырезом горловины.png", alt: "1" },
    { src: "/Джемпер из шерсти с круглым вырезом горловины_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Джемпер из шерсти с круглым вырезом горловины_3.png", alt: "3" },
    { src: "/Джемпер из шерсти с круглым вырезом горловины_4.png", alt: "4" },
    { src: "/Джемпер из шерсти с круглым вырезом горловины_5.png", alt: "5" },
    { src: "/Джемпер из шерсти с круглым вырезом горловины_6.png", alt: "6" },
],
color: "Коричневый",
description: "Длинный рукав. Прямой крой. Круглый вырез. Толстая вязка. Коллекция Selection. Рост модели: 179 см, размер: S/36. Рост модели: 180 см, размер: S/36. Рост модели: 178 см, размер: S/36. В состав входит шерсть.",
},
{
id: 13,
name: 'Джемпер с косами и воротником perkins',
category: 'NEW NOW',
price: 'KGS 5 999',
image: '/Джемпер с косами и воротником perkins.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Джемпер с косами и воротником perkins.png", alt: "1" },
    { src: "/Джемпер с косами и воротником perkins_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Джемпер с косами и воротником perkins_3.png", alt: "3" },
    { src: "/Джемпер с косами и воротником perkins_4.png", alt: "4" },
    { src: "/Джемпер с косами и воротником perkins_5.png", alt: "5" },
    { src: "/Джемпер с косами и воротником perkins_6.png", alt: "6" },
],
color: "Экрю",
description: "Трикотаж с косами. Прямой крой. Воротник перкинс. Длинные рукава с эластичными манжетами. Без застежки. Рост модели: 175 см, размер: S/36.",
},
{
id: 14,
name: 'ДКуртка-бомбер со сборками',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Куртка-бомбер со сборками.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Куртка-бомбер со сборками.png", alt: "1" },
    { src: "/Куртка-бомбер со сборками_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Куртка-бомбер со сборками_3.png", alt: "3" },
    { src: "/Куртка-бомбер со сборками_4.png", alt: "4" },
    { src: "/Куртка-бомбер со сборками_5.png", alt: "5" },
    { src: "/Куртка-бомбер со сборками_6.png", alt: "6" },
],
color: "Серый",
description: "Легкая ткань. Бомбер стиль. Оверсайз дизайн. Круглый вырез. Длинный рукав с эластичными и собранными манжетами. Два боковых кармана. Спереди застежка на молнию. Сборка на подоле.",
},
{
id: 15,
name: 'Парка оверсайз на молнии',
category: 'NEW NOW - SELECTION',
price: 'KGS 9 999',
image: '/Парка оверсайз на молнии.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Парка оверсайз на молнии.png", alt: "1" },
    { src: "/Парка оверсайз на молнии_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Парка оверсайз на молнии_3.png", alt: "3" },
    { src: "/Парка оверсайз на молнии_4.png", alt: "4" },
    { src: "/Парка оверсайз на молнии_5.png", alt: "5" },
    { src: "/Парка оверсайз на молнии_6.png", alt: "6" },
],
color: "Серый",
description: "Оверсайз дизайн. Воротник-стойка. Длинный рукав. Воротник с застежкой на молнию. Внутренняя подкладка. Total look.",
},
{
id: 16,
name: 'Куртка бомбер с регулируемым низом',
category: 'NEW NOW - SELECTION',
price: 'KGS 14 990',
image: '/Куртка бомбер с регулируемым низом.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Куртка бомбер с регулируемым низом.png", alt: "1" },
    { src: "/Куртка бомбер с регулируемым низом_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Куртка бомбер с регулируемым низом_3.png", alt: "3" },
    { src: "/Куртка бомбер с регулируемым низом_4.png", alt: "4" },
    { src: "/Куртка бомбер с регулируемым низом_5.png", alt: "5" },
    { src: "/Куртка бомбер с регулируемым низом_6.png", alt: "6" },
],
color: "Экрю",
description: "Смесь хлопка. Оверсайз дизайн. Средняя длина. Рубашечный воротник. Воротник с пуговицами на уголках. Спущенные плечи. Длинный рукав. На рукавах хлястики. По бокам два кармана на молнии. Регулируемый присборенный низ. Спереди застежка на молнию. Внутренняя подкладка. Коллекция Selection.",
},
{
id: 17,
name: 'Льняной жакет с поясом',
category: 'CAPSULE',
price: 'KGS 12 990',
image: '/Льняной жакет с поясом.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Льняной жакет с поясом.png", alt: "1" },
    { src: "/Льняной жакет с поясом_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Льняной жакет с поясом_3.png", alt: "3" },
    { src: "/Льняной жакет с поясом_4.png", alt: "4" },
    { src: "/Льняной жакет с поясом_5.png", alt: "5" },
    { src: "/Льняной жакет с поясом_6.png", alt: "6" },
],
color: "Пастельный светло-серый",
description: "Ткань 100% лен. Короткий фасон. V-образный вырез горловины с лацканами. Лацканы с вырезом. Длинные рукава с хлястиками. Шлёвки. Завязывающийся пояс. Съемный пояс. Застежка спереди.",
},
{
id: 18,
name: 'Вязаный жакет с нарядными пуговицами',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 999',
image: '/Вязаный жакет с нарядными пуговицами1.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Вязаный жакет с нарядными пуговицами1.png", alt: "1" },
    { src: "/Вязаный жакет с нарядными пуговицами1_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Вязаный жакет с нарядными пуговицами1_3.png", alt: "3" },
    { src: "/Вязаный жакет с нарядными пуговицами1_4.png", alt: "4" },
    { src: "/Вязаный жакет с нарядными пуговицами1_5.png", alt: "5" },
    { src: "/Вязаный жакет с нарядными пуговицами1_6.png", alt: "6" },
],
color: "Черный",
description: "Средняя вязка. Прямой крой. Стандартный дизайн. Круглый вырез. Длинный рукав. Контрастные канты. Застежка на пуговицы спереди. Доступно Plus. Черный цвет эксклюзивно онлайн. ",
},
{
id: 19,
name: 'Джемпер с воротником perkins и короткими рукавами',
category: 'NEW NOW',
price: 'KGS 5 990',
image: '/Джемпер с воротником perkins и короткими рукавами.png',
colorVariants: [
],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Джемпер с воротником perkins и короткими рукавами.png", alt: "1" },
    { src: "/Джемпер с воротником perkins и короткими рукавами_1.png", alt: "2" },
],
photosSmall: [
    { src: "/Джемпер с воротником perkins и короткими рукавами_3.png", alt: "3" },
    { src: "/Джемпер с воротником perkins и короткими рукавами_4.png", alt: "4" },
    { src: "/Джемпер с воротником perkins и короткими рукавами_5.png", alt: "5" },
    { src: "/Джемпер с воротником perkins и короткими рукавами_6.png", alt: "6" },
],
color: "Песочный",
description: "Воротник перкинс. Тонкий трикотаж. Приталенный дизайн. Без застежки. Края связаны резинкой. Короткий рукав. В состав входит шерсть. Рост модели: 175 см, размер: S/36. ",
},
{
id: 20,
name: 'Джемпер с воротником perkins1',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Джемпер с воротником perkins1.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Джемпер с воротником perkins1.png", alt: "1" },
    { src: "/Джемпер с воротником perkins1_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Джемпер с воротником perkins1_3.png", alt: "3" },
    { src: "/Джемпер с воротником perkins1_5.png", alt: "4" },
    { src: "/Джемпер с воротником perkins1_4.png", alt: "5" },
    { src: "/Джемпер с воротником perkins1_6.png", alt: "6" },
],
color: "Небесно-голубой",
description: "Толстая вязка. Прямой крой. Воротник перкинс. Длинный рукав. Без застежки. Рост модели: 175 см, размер: S/36. ",
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