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
name: 'Двубортное пальто с шерстью',
category: 'CAPSULE',
price: 'KGS 32 990',
image: '/Двубортное пальто с шерстью.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Двубортное пальто с шерстью.png", alt: "1" },
    { src: "/Двубортное пальто с шерстью_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Двубортное пальто с шерстью_3.png", alt: "3" },
    { src: "/Двубортное пальто с шерстью_4.png", alt: "4" },
    { src: "/Двубортное пальто с шерстью_5.png", alt: "5" },
    { src: "/Двубортное пальто с шерстью_6.png", alt: "6" },
],
color: "Экрю",
description: "В состав входит шерсть. Длинный дизайн. Прямой крой. Рубашечный воротник. Длинный рукав. Два боковых кармана. Двубортная застежка. Подкладка. Коллекция Selection. Рост модели: 175 см, размер: S/36. Рост модели: 180 см, размер: S/36. ",
},
{
id: 2,
name: 'Классический тренч с поясом',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Классический тренч с поясом.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Классический тренч с поясом.png", alt: "1" },
    { src: "/Классический тренч с поясом_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Классический тренч с поясом_3.png", alt: "3" },
    { src: "/Классический тренч с поясом_4.png", alt: "4" },
    { src: "/Классический тренч с поясом_5.png", alt: "5" },
    { src: "/Классический тренч с поясом_6.png", alt: "6" },
],
color: "Темно-синий",
description: "Прямой крой. Перекрёстный фасон. Средняя длина. Воротник с лацканами. Длинный рукав. На рукавах хлястики. Два боковых кармана. Застежка на пуговицы спереди. Регулируемый ремень. Задний разрез внизу. Пуговицы с эффектом панциря черепахи. Серый цвет эксклюзивно онлайн. Доступно Plus. Образы для офиса. Водоотталкивающая: Прочное покрытие этого изделия защищает от легкого дождя, отталкивая воду и капли дождя. Цвет экрю эксклюзивно онлайн. Ткань 100% хлопок. ",
},
{
id: 3,
name: 'Длинное структурное пальто из шерсти',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/Длинное структурное пальто из шерсти.png',
colorVariants: [
],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Длинное структурное пальто из шерсти.png", alt: "1" },
    { src: "/Длинное структурное пальто из шерсти_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Длинное структурное пальто из шерсти_3.png", alt: "3" },
    { src: "/Длинное структурное пальто из шерсти_4.png", alt: "4" },
    { src: "/Длинное структурное пальто из шерсти_5.png", alt: "5" },
    { src: "/Длинное структурное пальто из шерсти_6.png", alt: "6" },
],
color: "Коричневый",
description: "В состав входит шерсть. Структурированный дизайн. Тяжелая структура. Длинный дизайн. V-образный вырез горловины с лацканами. Лацканы с вырезом. Длинные рукава с манжетами на пуговицах. Два передних прорезных кармана. Спереди застежка на три пуговицы. Внутренняя подкладка. Рост модели: 178 см, размер: S/36. ",
},
{
id: 4,
name: 'Пальто из шерсти ручной работы с поясом',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Пальто из шерсти ручной работы с поясом.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Пальто из шерсти ручной работы с поясом.png", alt: "1" },
    { src: "/Пальто из шерсти ручной работы с поясом_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Пальто из шерсти ручной работы с поясом_3.png", alt: "3" },
    { src: "/Пальто из шерсти ручной работы с поясом_4.png", alt: "4" },
    { src: "/Пальто из шерсти ручной работы с поясом_5.png", alt: "5" },
    { src: "/Пальто из шерсти ручной работы с поясом_6.png", alt: "6" },
],
color: "Экрю",
description: "В состав входит переработанная шерсть. Оверсайз дизайн. Средняя длина. V-образный вырез горловины с лацканами. Длинный рукав. Два передних кармана. Съемный пояс. Задний разрез внизу. Образы для офиса. Рост модели: 181 см, размер: S/36. ",
},
{
id: 5,
name: 'Пальто из шерсти в мелкую гусиную лапку',
category: 'CAPSULE',
price: 'KGS 12 990',
image: '/Пальто из шерсти в мелкую гусиную лапку.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Пальто из шерсти в мелкую гусиную лапку.png", alt: "1" },
    { src: "/Пальто из шерсти в мелкую гусиную лапку_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Пальто из шерсти в мелкую гусиную лапку_3.png", alt: "3" },
    { src: "/Пальто из шерсти в мелкую гусиную лапку_4.png", alt: "4" },
    { src: "/Пальто из шерсти в мелкую гусиную лапку_5.png", alt: "5" },
    { src: "/Пальто из шерсти в мелкую гусиную лапку_6.png", alt: "6" },
],
color: "Коричневый",
description: "Рубашечный воротник. Тяжелая структура. Миди дизайн. Длинные рукава с пуговицами. Пояс. Съемный шарф. Подкладка. В состав входит шерсть. Прямой крой. Застежка на пуговицы спереди. Рост модели: 178 см, размер: S/36. ",
},
{
id: 6,
name: 'Пальто с лацканами шерсть',
category: 'NEW NOW - SELECTION',
price: 'KGS 13 990',
image: '/Пальто с лацканами шерсть.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Пальто с лацканами шерсть.png", alt: "1" },
    { src: "/Пальто с лацканами шерсть_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Пальто с лацканами шерсть_3.png", alt: "3" },
    { src: "/Пальто с лацканами шерсть_4.png", alt: "4" },
    { src: "/Пальто с лацканами шерсть_5.png", alt: "5" },
],
color: "Черный",
description: "В состав входит шерсть. Миди дизайн. V-образный вырез горловины с лацканами. Длинные рукава с манжетами на пуговицах. Два боковых кармана. Застежка на пуговицы спереди. Подкладка. Доступно Plus. Рост модели: 179 см, размер: S/36. Текучая ткань. Структурированный дизайн. Длинный дизайн. Подплечники. Длинный рукав. ",
},
{
id: 7,
name: 'Пальто из искусственного меха с аппликациями',
category: 'NEW NOW',
price: 'KGS 17 990',
image: '/Пальто из искусственного меха с аппликациями.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Пальто из искусственного меха с аппликациями.png", alt: "1" },
    { src: "/Пальто из искусственного меха с аппликациями_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Пальто из искусственного меха с аппликациями_3.png", alt: "3" },
    { src: "/Пальто из искусственного меха с аппликациями_4.png", alt: "4" },
    { src: "/Пальто из искусственного меха с аппликациями_5.png", alt: "5" },
    { src: "/Пальто из искусственного меха с аппликациями_6.png", alt: "6" },
],
color: "Хаки",
description: "Искусственный мех. Материал, имитирующий овчину. Прямой крой. Оверсайз дизайн. Круглый вырез. Длинный рукав. Два передних кармана. Застежка на пуговицы 'моржовый клык'. Контрастные канты. Подкладка. Рост модели: 179 см, размер: S/36. ",
},
{
id: 8,
name: 'Объемное пальто из шерсти ручной работы',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/Объемное пальто из шерсти ручной работы.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Объемное пальто из шерсти ручной работы.png", alt: "1" },
    { src: "/Объемное пальто из шерсти ручной работы_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Объемное пальто из шерсти ручной работы_3.png", alt: "3" },
    { src: "/Объемное пальто из шерсти ручной работы_4.png", alt: "4" },
    { src: "/Объемное пальто из шерсти ручной работы_5.png", alt: "5" },
    { src: "/Объемное пальто из шерсти ручной работы_6.png", alt: "6" },
],
color: "Черный",
description: "Длинный рукав. Спущенные плечи. Два боковых кармана. Двубортная застежка. Задний разрез внизу. Образы для офиса. Ткань из шерсти. Ручная работа. Двубортная застежка. Оверсайз дизайн. Длинный дизайн. V-образный вырез горловины с лацканами. Лацканы с вырезом. Тяжелая структура. Застежка спереди. Лацканы. Без подкладки.",
},
{
id: 9,
name: 'Двубортное пальто с шерстью',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Двубортное пальто с шерстью1.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Двубортное пальто с шерстью1.png", alt: "1" },
    { src: "/Двубортное пальто с шерстью1_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Двубортное пальто с шерстью1_3.png", alt: "3" },
    { src: "/Двубортное пальто с шерстью1_4.png", alt: "4" },
    { src: "/Двубортное пальто с шерстью1_5.png", alt: "5" },
    { src: "/Двубортное пальто с шерстью1_6.png", alt: "6" },
],
color: "Шоколадный",
description: "Ткань из шерсти. В состав входит шерсть. Длинный дизайн. Оверсайз дизайн. Перекрестный воротник с лацканами. Лацканы с вырезом. Длинный рукав. Два боковых кармана. Двубортная застежка. Внутренняя подкладка. Ручная работа. Двубортная застежка. V-образный вырез горловины с лацканами. Спущенные плечи. Задний разрез внизу. Образы для офиса. ",
},
{
id: 10,
name: 'Вязаное пальто со съемным шарфом',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Вязаное пальто со съемным шарфом.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Вязаное пальто со съемным шарфом.png", alt: "1" },
    { src: "/Вязаное пальто со съемным шарфом_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Вязаное пальто со съемным шарфом_3.png", alt: "3" },
    { src: "/Вязаное пальто со съемным шарфом_4.png", alt: "4" },
    { src: "/Вязаное пальто со съемным шарфом_5.png", alt: "5" },
    { src: "/Вязаное пальто со съемным шарфом_6.png", alt: "6" },
],
color: "Экрю",
description: "Средняя вязка. Прямой крой. Круглый вырез. Длинный рукав. Съемный шарф. Передняя застежка на пуговицы. Рост модели: 178 см, размер: S/36. ",
},
{
id: 11,
name: 'Пальто из шерсти с поясом',
category: 'NEW NOW',
price: 'KGS 25 990',
image: '/Пальто из шерсти с поясом.png',
colorVariants: [
],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Пальто из шерсти с поясом.png", alt: "1" },
    { src: "/Пальто из шерсти с поясом_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Пальто из шерсти с поясом_3.png", alt: "3" },
    { src: "/Пальто из шерсти с поясом_4.png", alt: "4" },
    { src: "/Пальто из шерсти с поясом_5.png", alt: "5" },
    { src: "/Пальто из шерсти с поясом_6.png", alt: "6" },
],
color: "Серый",
description: "Прямой крой. В состав входит итальянская шерсть. Тяжелая структура. Длинный дизайн. V-образный вырез горловины с лацканами. Длинный рукав. Пояс для халата. Два боковых кармана с кантом. Передняя застежка на пуговицы. Только подкладка. Доступно Plus. ",
},
{
id: 12,
name: 'Пальто миди из шерсти с уютным воротником',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Пальто миди из шерсти с уютным воротником.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Пальто миди из шерсти с уютным воротником.png", alt: "1" },
    { src: "/Пальто миди из шерсти с уютным воротником_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Пальто миди из шерсти с уютным воротником_3.png", alt: "3" },
    { src: "/Пальто миди из шерсти с уютным воротником_4.png", alt: "4" },
    { src: "/Пальто миди из шерсти с уютным воротником_5.png", alt: "5" },
],
color: "Черный",
description: "В состав входит шерсть. Стандартный дизайн. Прямой крой. Воротник с лацканами. Длинный рукав. Два боковых кармана с кантом. Двубортная застежка. Внутренняя подкладка. ",
},
{
id: 13,
name: 'Пальто из шерсти с поясом',
category: 'CAPSULE',
price: 'KGS 25 990',
image: '/Пальто из шерсти с поясом1.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Пальто из шерсти с поясом1.png", alt: "1" },
    { src: "/Пальто из шерсти с поясом1_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Пальто из шерсти с поясом1_3.png", alt: "3" },
    { src: "/Пальто из шерсти с поясом1_4.png", alt: "4" },
    { src: "/Пальто из шерсти с поясом1_5.png", alt: "5" },
    { src: "/Пальто из шерсти с поясом1_6.png", alt: "6" },
],
color: "Нюд",
description: "В состав входит шерсть. Длинный дизайн. Оверсайз дизайн. Подчеркнутые плечи. V-образный вырез горловины с лацканами. Лацканы с вырезом. Длинные рукава с разрезами на манжетах. Два боковых кармана с клапанами. Задний разрез внизу. Без застежки. Внутренняя подкладка. ",
},
{
id: 14,
name: 'Объемное пальто из шерсти ручной работы',
category: 'CAPSULE',
price: 'KGS 12 990',
image: '/Объемное пальто из шерсти ручной работы1.png',
colorVariants: [],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Объемное пальто из шерсти ручной работы1.png", alt: "1" },
    { src: "/Объемное пальто из шерсти ручной работы1_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Объемное пальто из шерсти ручной работы1_3.png", alt: "3" },
    { src: "/Объемное пальто из шерсти ручной работы1_4.png", alt: "4" },
    { src: "/Объемное пальто из шерсти ручной работы1_5.png", alt: "5" },
    { src: "/Объемное пальто из шерсти ручной работы1_6.png", alt: "6" },
],
color: "Синий нефть",
description: "Ткань из шерсти. Тяжелая структура. Застежка спереди. Лацканы. Без подкладки. Ручная работа. Двубортная застежка. Оверсайз дизайн. Длинный дизайн. V-образный вырез горловины с лацканами. Лацканы с вырезом. Длинный рукав. Спущенные плечи. Два боковых кармана. Двубортная застежка. Задний разрез внизу. Образы для офиса. ",
},
{
id: 15,
name: 'Короткое пальто из чистой шерсти',
category: 'NEW NOW',
price: 'KGS 25 990',
image: '/Короткое пальто из чистой шерсти.png',
colorVariants: [
],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Короткое пальто из чистой шерсти.png", alt: "1" },
    { src: "/Короткое пальто из чистой шерсти_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Короткое пальто из чистой шерсти_3.png", alt: "3" },
    { src: "/Короткое пальто из чистой шерсти_4.png", alt: "4" },
    { src: "/Короткое пальто из чистой шерсти_5.png", alt: "5" },
    { src: "/Короткое пальто из чистой шерсти_6.png", alt: "6" },
],
color: "Шоколадный",
description: "Застежка спереди. В состав входит шерсть. Тяжелая структура. Прямой крой. Средняя длина. Воротник-стойка. Длинный рукав. Два боковых кармана с кантом. Двубортная застежка. Только подкладка. ",
},
{
id: 16,
name: 'Длинное структурное пальто из шерсти',
category: 'NEW NOW - SELECTION',
price: 'KGS 17 990',
image: '/Длинное структурное пальто из шерсти1.png',
colorVariants: [],
composition: "63% viscose, 37% polyamide",
origin: "Разработано в Барселоне, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Длинное структурное пальто из шерсти1.png", alt: "1" },
    { src: "/Длинное структурное пальто из шерсти1_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Длинное структурное пальто из шерсти1_3.png", alt: "3" },
    { src: "/Длинное структурное пальто из шерсти1_4.png", alt: "4" },
    { src: "/Длинное структурное пальто из шерсти1_5.png", alt: "5" },
    { src: "/Длинное структурное пальто из шерсти1_6.png", alt: "6" },
],
color: "Коричневый средний",
description: "В состав входит шерсть. Длинный дизайн. Прямой крой. V-образный вырез горловины с лацканами. Лацканы с вырезом. Длинные рукава с манжетами на пуговицах. На груди прорезной карман. Спереди два кармана с клапанами. Задний разрез внизу. Двубортная застежка. Подкладка. ",
},
{
id: 17,
name: 'Длинное пальто оверсайз ручной работы',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Длинное пальто оверсайз ручной работы2.png',
colorVariants: [],
composition: "65% cotton, 35% polyester",
origin: "Разработано в Париже, Производство: Вьетнам",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Длинное пальто оверсайз ручной работы2.png", alt: "1" },
    { src: "/Длинное пальто оверсайз ручной работы2_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Длинное пальто оверсайз ручной работы2_3.png", alt: "3" },
    { src: "/Длинное пальто оверсайз ручной работы2_4.png", alt: "4" },
    { src: "/Длинное пальто оверсайз ручной работы2_5.png", alt: "5" },
    { src: "/Длинное пальто оверсайз ручной работы2_6.png", alt: "6" },
],
color: "Белый",
description: "Удобный ",
},
{
id: 18,
name: 'Пальто миди из шерсти с высоким воротником',
category: 'NEW NOW - SELECTION',
price: 'KGS 16 990',
image: '/Пальто миди из шерсти с высоким воротником.png',
colorVariants: [],
composition: "70% cotton, 30% elastane",
origin: "Разработано в Милане, Производство: Турция",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Пальто миди из шерсти с высоким воротником.png", alt: "1" },
    { src: "/Пальто миди из шерсти с высоким воротником_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Пальто миди из шерсти с высоким воротником_3.png", alt: "3" },
    { src: "/Пальто миди из шерсти с высоким воротником_4.png", alt: "4" },
    { src: "/Пальто миди из шерсти с высоким воротником_5.png", alt: "5" },
    { src: "/Пальто миди из шерсти с высоким воротником_6.png", alt: "6" },
],
color: "Меланжевый средний серый",
description: "В состав входит шерсть. Прямой крой. Короткий фасон. Воротник-стойка. Длинный рукав. Спереди два накладных кармана. Спереди застежка на молнию и кнопки. Подкладка. ",
},
{
id: 19,
name: 'Пальто из шерсти с высоким воротником3',
category: 'NEW NOW',
price: 'KGS 22 990',
image: '/.png',
colorVariants: [
],
composition: "100% cotton",
origin: "Разработано в Лондоне, Производство: Индия",
care: "Машинная стирка при 40 °С, Отбеливать запрещено, Гладить при 150 °С, Химчистка разрешена, Сушка в сушилке разрешена",
photosLarge: [
    { src: "/Пальто из шерсти с высоким воротником3.png", alt: "1" },
    { src: "/Пальто из шерсти с высоким воротником3_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Пальто из шерсти с высоким воротником3_3.png", alt: "3" },
    { src: "/Пальто из шерсти с высоким воротником3_4.png", alt: "4" },
    { src: "/Пальто из шерсти с высоким воротником3_5.png", alt: "5" },
    { src: "/Пальто из шерсти с высоким воротником3_6.png", alt: "6" },
],
color: "Бежевый",
description: "В состав входит шерсть. Тяжелая структура. Прямой крой. Воротник-стойка. Воротник-стойка. Длинный рукав. Застежка на пуговицы спереди. Подкладка. Рост модели: 178 см, размер: S/36. ",
},
{
id: 20,
name: 'Двубортное пальто с лацканами',
category: 'NEW NOW - SELECTION',
price: 'KGS 22 990',
image: '/Двубортное пальто с лацканами3.png',
colorVariants: [],
composition: "60% wool, 40% acrylic",
origin: "Разработано в Нью-Йорке, Производство: Китай",
care: "Ручная стирка при 30 °С, Отбеливать запрещено, Гладить при 110 °С, Химчистка запрещена, Запрещено сушить в сушилке",
photosLarge: [
    { src: "/Двубортное пальто с лацканами3.png", alt: "1" },
    { src: "/Двубортное пальто с лацканами3_2.png", alt: "2" },
],
photosSmall: [
    { src: "/Двубортное пальто с лацканами3_3.png", alt: "3" },
    { src: "/Двубортное пальто с лацканами3_4.png", alt: "4" },
    { src: "/Двубортное пальто с лацканами3_5.png", alt: "5" },
    { src: "/Двубортное пальто с лацканами3_6.png", alt: "6" },
],
color: "Темно-синий",
description: "Смесь хлопка. Прямой крой. V-образный вырез горловины с лацканами. Лацканы с вырезом. Длинный рукав. Два боковых кармана с кантом. Двубортная застежка. Внутренняя подкладка.",
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