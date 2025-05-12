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
name: 'Платье с цветами и разрезом',
category: 'CAPSULE',
price: 'KGS 26 490',
image: '/.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
name: 'Embroidered shirt dress with belt',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: ".png", alt: "1" },
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
name: 'Полупрозрачное комбинированное платье',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
name: 'Прямой комбинезон с короткими рукавами и поясом',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: ".png", alt: "1" },
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
name: 'Платье из смесового льна с оборкой',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
name: 'Джемпер букле с круглой горловиной',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
name: 'Вязаный жакет с нарядными пуговицами',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: ".png", alt: "1" },
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
name: 'Вязаный кардиган с пуговицами-стразами',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
name: 'Хлопковая футболка с контрастными окантовками',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: ".png", alt: "1" },
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
name: 'Футболка из смесового хлопка',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
name: 'Драпированное платье с цветочным принтом',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
name: 'Вязаный жилет с нарядными пуговицами',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 13,
name: 'Толстовка с высоким воротником и молнией',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 14,
name: 'Асимметричное платье с воротником-бантом',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 15,
name: 'Меланжевый кардиган с косами',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 16,
name: 'Футболка с асимметричной горловиной и сборками',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 17,
name: 'Тренч оверсайз с ремнем',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 18,
name: 'Парка оверсайз на молнии',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 19,
name: 'Платье А-силуэта из кружева',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 20,
name: 'Длинный тренч с двубортной застежкой',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 21,
name: 'Костюмные брюки изо льна',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 22,
name: 'Lyocell palazzo pants',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 23,
name: 'Прямые костюмные брюки из смесового льна',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 24,
name: 'Прямые костюмные брюки из смесового льна',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 25,
name: 'Прямое платье с драпировкой',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 26,
name: 'Короткий тренч из денима с поясом',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 27,
name: 'Объемный тренч из хлопка',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: ".png", alt: "1" },
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
id: 28,
name: 'Куртка-бомбер со сборками',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: ".png", alt: "1" },
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