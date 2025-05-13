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
name: 'Брюки из смесового льна с защипами',
category: 'CAPSULE',
price: 'KGS 8 999',
image: '/Брюки из смесового льна с защипами.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Брюки из смесового льна с защипами.png", alt: "1" },
    { src: "/Брюки из смесового льна с защипами_2.png", alt: "2" },
    { src: "/Брюки из смесового льна с защипами_3.png", alt: "3" },
    { src: "/Брюки из смесового льна с защипами_4.png", alt: "4" },],
photosSmall: [],
color: "Белый",
description: "Ткань из смеси льна. Стиль костюма. Длинный дизайн. Прямой крой. Средняя посадка. Защипы. Два боковых кармана. Спереди застежка на пуговицу, крючок и молнию. Внутренняя подкладка. ",
},
{
id: 2,
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
id: 3,
name: 'Прямые брюки из лиоцелла с защипами',
category: 'NEW NOW',
price: 'KGS 6 999',
image: '/Прямые брюки из лиоцелла с защипами.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Прямые брюки из лиоцелла с защипами.png", alt: "1" },
    { src: "/Прямые брюки из лиоцелла с защипами_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Прямые брюки из лиоцелла с защипами_3.png", alt: "3" },
    { src: "/Прямые брюки из лиоцелла с защипами_4.png", alt: "4" },
    { src: "/Прямые брюки из лиоцелла с защипами_5.png", alt: "5" },
    { src: "/Прямые брюки из лиоцелла с защипами_6.png", alt: "6" },
],
color: "Коричневый",
description: "Ткань из лиоцелла. Прямой крой. Длинный дизайн. Средняя посадка. Шлёвки. Защипы. Два боковых кармана. Спереди застежка на молнию и две пуговицы. Полный образ.",
},
{
id: 4,
name: 'Прямые костюмные брюки из смесового льна',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 999',
image: '/Прямые костюмные брюки из смесового льна.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Прямые костюмные брюки из смесового льна.png", alt: "1" },
    { src: "/Прямые костюмные брюки из смесового льна_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Прямые костюмные брюки из смесового льна_3.png", alt: "3" },
    { src: "/Прямые костюмные брюки из смесового льна_4.png", alt: "4" },
    { src: "/Прямые костюмные брюки из смесового льна_5.png", alt: "5" },
    { src: "/Прямые костюмные брюки из смесового льна_6.png", alt: "6" },
],
color: "Глубокий темно-синий",
description: "Ткань из смеси хлопка и льна. Стиль костюма. Длинный дизайн. Прямой крой. Полосатый принт. Средняя посадка. Шлёвки. Два боковых кармана. Передняя застежка на молнию и пуговицу. Подкладка 100% хлопок. Total look.",
},
{
id: 5,
name: 'Льняные костюмные брюки без швов',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Льняные костюмные брюки без швов.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Льняные костюмные брюки без швов.png", alt: "1" },
    { src: "/Льняные костюмные брюки без швов_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Льняные костюмные брюки без швов_3.png", alt: "3" },
    { src: "/Льняные костюмные брюки без швов_4.png", alt: "4" },
    { src: "/Льняные костюмные брюки без швов_5.png", alt: "5" },
    { src: "/Льняные костюмные брюки без швов_6.png", alt: "6" },
],
color: "Хаки",
description: "Ткань из смеси льна. Стиль костюма. Длинный дизайн. Прямой крой. Заниженная талия. Пояс без швов. Шлёвки. Боковые карманы. Деталь передних складок. Передняя застежка на пуговицу, крючок и молнию, скрытые под планкой. Полный образ. Коллекция Selection.",
},
{
id: 6,
name: 'Straight-fit suit trousers',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Straight-fit suit trousers.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Straight-fit suit trousersv.png", alt: "1" },
    { src: "/Straight-fit suit trousers_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Straight-fit suit trousers_3.png", alt: "3" },
    { src: "/Straight-fit suit trousers_4.png", alt: "4" },
    { src: "/Straight-fit suit trousers_5.png", alt: "5" },
    { src: "/Straight-fit suit trousers_6.png", alt: "6" },
],
color: "Грязно-белый",
description: "Костюмные брюки прямого кроя создают классический вневременной силуэт. Мягкая на ощупь высококачественная итальянская ткань гарантирует безупречный внешний вид. Настоящий must-have любого элегантного гардероба. Создайте полный образ с блейзером из коллекции. Итальянская ткань. Стиль костюма. Прямой крой. Длинный дизайн. Средняя посадка. Два задних кармана с кантом. Передняя застежка на пуговицу, крючок и молнию, скрытые под планкой. Внутренняя подкладка. Коллекция для праздников и церемоний. Total look. ",
},
{
id: 7,
name: 'Костюмные брюки в узкую полоску',
category: 'NEW NOW',
price: 'KGS 6 999',
image: '/Костюмные брюки в узкую полоску.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Костюмные брюки в узкую полоску.png", alt: "1" },
    { src: "/Костюмные брюки в узкую полоску_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Костюмные брюки в узкую полоску_3.png", alt: "3" },
    { src: "/Костюмные брюки в узкую полоску_4.png", alt: "4" },
    { src: "/Костюмные брюки в узкую полоску_5.png", alt: "5" },
    { src: "/Костюмные брюки в узкую полоску_6.png", alt: "6" },
],
color: "Серый",
description: "Принт в узкую полоску. Стиль костюма. Прямой крой. Длинный дизайн. Средняя посадка. Шлёвки. Потайная застежка на молнию, пуговицу и крючок. Два боковых кармана. Защипы. Total look. Доступно Plus. Рост модели: 181 см, размер: S/36. ",
},
{
id: 8,
name: 'Брюки Paper bag из хлопка',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Брюки Paper bag из хлопка.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Брюки Paper bag из хлопка.png", alt: "1" },
    { src: "/Брюки Paper bag из хлопка_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Брюки Paper bag из хлопка_3.png", alt: "3" },
    { src: "/Брюки Paper bag из хлопка_4.png", alt: "4" },
    { src: "/Брюки Paper bag из хлопка_5.png", alt: "5" },
    { src: "/Брюки Paper bag из хлопка_6.png", alt: "6" },
],
color: "Коричневый",
description: "Ткань 100% хлопок. Пейпербег. Два боковых кармана. Эластичный пояс со шнуром. Без застежки. ",
},
{
id: 9,
name: 'Брюки Paper bag из хлопка',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Брюки Paper bag из хлопка1.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Брюки Paper bag из хлопка1.png", alt: "1" },
    { src: "/Брюки Paper bag из хлопка1_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Брюки Paper bag из хлопка1_3.png", alt: "3" },
    { src: "/Брюки Paper bag из хлопка1_4.png", alt: "4" },
    { src: "/Брюки Paper bag из хлопка1_5.png", alt: "5" },
    { src: "/Брюки Paper bag из хлопка1_6.png", alt: "6" },
],
color: "Экрю",
description: "Ткань 100% хлопок. Пейпербег. Два боковых кармана. Эластичный пояс со шнуром. Без застежки. ",
},
{
id: 10,
name: 'Костюмные брюки flare',
category: 'NEW NOW',
price: 'KGS 6 990',
image: '/Костюмные брюки flare.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Костюмные брюки flare.png", alt: "1" },
    { src: "/Костюмные брюки flare_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Костюмные брюки flare_3.png", alt: "3" },
    { src: "/Костюмные брюки flare_4.png", alt: "4" },
    { src: "/Костюмные брюки flare_5.png", alt: "5" },
    { src: "/Костюмные брюки flare_6.png", alt: "6" },
],
color: "Серый",
description: "Стиль клёш. Дизайн колокол. Длинный дизайн. Два боковых кармана. Два задних кармана с кантом. Потайная застежка на молнию, пуговицу и крючок. Полный образ. Рост модели: 181 см, размер: S/36. Стиль костюма. ",
},
{
id: 11,
name: 'Прямые брюки из трикотажа в рубчик',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Прямые брюки из трикотажа в рубчик.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Прямые брюки из трикотажа в рубчик.png", alt: "1" },
    { src: "/Прямые брюки из трикотажа в рубчик_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Прямые брюки из трикотажа в рубчик_3.png", alt: "3" },
    { src: "/Прямые брюки из трикотажа в рубчик_4.png", alt: "4" },
    { src: "/Прямые брюки из трикотажа в рубчик_5.png", alt: "5" },
    { src: "/Прямые брюки из трикотажа в рубчик_6.png", alt: "6" },
],
color: "Меланжевый средний серый",
description: "Средняя вязка. Трикотажная ткань в рубчик. Длинный дизайн. Прямой крой. Эластичный пояс. Total look. ",
},
{
id: 12,
name: 'Lazy',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Lazy.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Lazy.png", alt: "1" },
    { src: "/Прямые брюки из трикотажа в рубчик_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Lazy_3.png", alt: "3" },
    { src: "/Lazy_4.png", alt: "4" },
    { src: "/Lazy_5.png", alt: "5" },
    { src: "/Lazy_6.png", alt: "6" },
],
color: "Черный",
description: "Текучая ткань. Короткий дизайн. Широкое голенище. Драпировка. Вырез горловины каре. Перекрещенная спинка. Тонкие бретели. Без рукавов. Длинный дизайн. Рост модели: 179 см, размер: S/36. Эластичная лента. Прямой крой. ",
},
{
id: 13,
name: 'Хлопковые брюки с защипами',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/Хлопковые брюки с защипами2.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Хлопковые брюки с защипами2.png", alt: "1" },
    { src: "/Хлопковые брюки с защипами2_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Хлопковые брюки с защипами2_3.png", alt: "3" },
    { src: "/Хлопковые брюки с защипами2_4.png", alt: "4" },
    { src: "/Хлопковые брюки с защипами2_5.png", alt: "5" },
    { src: "/Хлопковые брюки с защипами2_6.png", alt: "6" },
],
color: "Морская волна",
description: "Фасон wideleg. Длинный дизайн. Два боковых кармана. Шлёвки. Защипы. Передняя застежка на пуговицы. Ткань 100% хлопок. ",
},
{
id: 14,
name: 'Прямые брюки в полоску',
category: 'CAPSULE',
price: 'KGS 6 999',
image: '/Прямые брюки в полоску.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Прямые брюки в полоску.png", alt: "1" },
    { src: "/Прямые брюки в полоску_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Прямые брюки в полоску_3.png", alt: "3" },
    { src: "/Прямые брюки в полоску_4.png", alt: "4" },
    { src: "/Прямые брюки в полоску_5.png", alt: "5" },
    { src: "/Прямые брюки в полоску_6.png", alt: "6" },
],
color: "Экрю",
description: "Ткань из смеси хлопка и льна. Длинный дизайн. Прямой крой. Средняя посадка. Два передних кармана. Потайная застежка на молнию, пуговицу и крючок. Подкладка. Узор в полоску. ",
},
{
id: 15,
name: 'Прямые брюки из твида',
category: 'NEW NOW',
price: 'KGS 6 999',
image: '/Прямые брюки из твида.png',
colorVariants: [
],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Прямые брюки из твида.png", alt: "1" },
    { src: "/Прямые брюки из твида_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Прямые брюки из твида_3.png", alt: "3" },
    { src: "/Прямые брюки из твида_4.png", alt: "4" },
    { src: "/Прямые брюки из твида_5.png", alt: "5" },
    { src: "/Прямые брюки из твида_6.png", alt: "6" },
],
color: "Черный",
description: "Твидовая ткань. Прямой крой. Застежка на пуговицы, крючок и молнию. Два боковых кармана. Total look. Рост модели: 179 см, размер: S/36. ",
},
{
id: 16,
name: 'Прямые брюки с защипами',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 999',
image: '/Прямые брюки с защипами.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "Прямые брюки с защипами.png", alt: "1" },
    { src: "/Прямые брюки с защипами_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Прямые брюки с защипами_3.png", alt: "3" },
    { src: "/Прямые брюки с защипами_4.png", alt: "4" },
    { src: "/Прямые брюки с защипами_5.png", alt: "5" },
    { src: "/Прямые брюки с защипами_6.png", alt: "6" },
],
color: "Черный",
description: "Текучая ткань. Прямой крой. Длинный дизайн. Средняя посадка. Застежка на молнию, пуговицу и потайные крючки под планкой. Шлёвки. Защипы. Внутренняя подкладка.",
},
{
id: 17,
name: 'Льняные брюки с контрастными лампасами',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 999',
image: '/Льняные брюки с контрастными лампасами.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Льняные брюки с контрастными лампасами.png", alt: "1" },
    { src: "/Льняные брюки с контрастными лампасами_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Льняные брюки с контрастными лампасами_3.png", alt: "3" },
    { src: "/Льняные брюки с контрастными лампасами_4.png", alt: "4" },
    { src: "/Льняные брюки с контрастными лампасами_5.png", alt: "5" },
    { src: "/Льняные брюки с контрастными лампасами_6.png", alt: "6" },
],
color: "Ванильный",
description: "Ткань 100% лен. Прямой крой. Длинный дизайн. Высокая посадка. Шлёвки. Два боковых кармана. Потайная застежка на молнию, пуговицу и крючок. Контрастная полоска. Внутренняя подкладка. Полный образ. ",
},
{
id: 18,
name: 'Костюмные брюки с ремнем',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 999',
image: '/Костюмные брюки с ремнем.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Костюмные брюки с ремнем.png", alt: "1" },
    { src: "/Костюмные брюки с ремнем_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Костюмные брюки с ремнем_3.png", alt: "3" },
    { src: "/Костюмные брюки с ремнем_4.png", alt: "4" },
    { src: "/Костюмные брюки с ремнем_5.png", alt: "5" },
    { src: "/Костюмные брюки с ремнем_6.png", alt: "6" },
],
color: "Коричневый",
description: "Легкая ткань. Прямой крой. Длинный дизайн. Средняя посадка. Два боковых кармана. Застежка на ремень с пряжкой. Внутренняя подкладка. Total look. ",
},
{
id: 19,
name: 'Прямые брюки с разрезами и завязками',
category: 'NEW NOW',
price: 'KGS 6 999',
image: '/Прямые брюки с разрезами и завязками.png',
colorVariants: [
],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Прямые брюки с разрезами и завязками.png", alt: "1" },
    { src: "/Прямые брюки с разрезами и завязками_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Прямые брюки с разрезами и завязками_3.png", alt: "3" },
    { src: "/Прямые брюки с разрезами и завязками_4.png", alt: "4" },
    { src: "/Прямые брюки с разрезами и завязками_5.png", alt: "5" },
    { src: "/Прямые брюки с разрезами и завязками_6.png", alt: "6" },
],
color: "Пастельно-розовый",
description: "Ткань из смеси хлопка и льна. Прямой крой. Длинный дизайн. Средняя посадка. Два боковых кармана. Боковые разрезы с завязками. Спереди застежка на пуговицу, крючок и молнию. Total look. ",
},
{
id: 20,
name: 'Джинсы wideleg с посадкой на талии',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 999',
image: '/Джинсы wideleg с посадкой на талии.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Джинсы wideleg с посадкой на талии.png", alt: "1" },
    { src: "/Джинсы wideleg с посадкой на талии_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Джинсы wideleg с посадкой на талии_3.png", alt: "3" },
    { src: "/Джинсы wideleg с посадкой на талии_4.png", alt: "4" },
    { src: "/Джинсы wideleg с посадкой на талии_5.png", alt: "5" },
    { src: "/Джинсы wideleg с посадкой на талии_6.png", alt: "6" },
],
color: "Синий",
description: "Джинсовая ткань из хлопка. Длинный дизайн. Фасон wideleg. Средняя посадка. Шлёвки. Пять карманов. Передняя застежка на молнию и пуговицу. Total look. ",
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