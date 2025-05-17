import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from '../../../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';
import { addProduct } from '../../../data/productsData';
import { categories } from '../../../data/categories';

interface FormErrors {
name?: string;
category?: string;
color?: string;
stock?: string;
price?: string;
image?: string;
}

export default function AddProduct(): JSX.Element {
const [name, setName] = useState('');
const [category, setCategory] = useState(categories[0].name);
const [color, setColor] = useState('');
const [status, setStatus] = useState<'available' | 'low' | 'unavailable'>('available');
const [stock, setStock] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState('');
const [errors, setErrors] = useState<FormErrors>({});
const navigate = useNavigate();

const validateForm = (): FormErrors => {
const newErrors: FormErrors = {};
if (!name.trim()) {
    newErrors.name = 'Название обязательно';
}
if (!category) {
    newErrors.category = 'Категория обязательна';
}
if (!color.trim()) {
    newErrors.color = 'Цвет обязателен';
}
if (!stock || isNaN(Number(stock)) || Number(stock) < 0) {
    newErrors.stock = 'Остаток должен быть числом больше или равным 0';
}
if (!price || !/^\d+\s*руб$/.test(price.trim())) {
    newErrors.price = 'Цена должна быть в формате "число руб" (например, "12450 руб")';
}
if (!image.trim()) {
    newErrors.image = 'Путь к изображению обязателен';
}
return newErrors;
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
const validationErrors = validateForm();
if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
}

try {
    await addProduct({
    name,
    category,
    color,
    status,
    stock: Number(stock),
    price,
    image,
    });

    setErrors({});
    alert('Товар успешно добавлен!');
    navigate('/products');
} catch (error) {
    setErrors({ image: 'Ошибка при добавлении товара. Попробуйте позже.' });
}
};

return (
<main className="flex-1 p-8">
    <Card className="border border-solid border-[#00000040] rounded-[10px]">
    <CardHeader>
        <CardTitle className="font-['Inter'] font-semibold text-[#131313] text-[40px] mb-12">
        Добавить новый товар
        </CardTitle>
    </CardHeader>
    <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <Label
            className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block"
            htmlFor="name"
            >
            Название
            </Label>
            <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите название товара"
            className={`w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
        </div>
        <div>
            <Label
            className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block"
            htmlFor="category"
            >
            Категория
            </Label>
            <Select onValueChange={setCategory} defaultValue={category}>
            <SelectTrigger
                id="category"
                className={`w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2 ${errors.category ? 'border-red-500' : ''}`}
            >
                <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
                {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.name}>
                    {cat.name}
                </SelectItem>
                ))}
            </SelectContent>
            </Select>
            {errors.category && (
            <p className="text-red-500 text-xs mt-1">{errors.category}</p>
            )}
        </div>
        <div>
            <Label
            className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block"
            htmlFor="color"
            >
            Цвет
            </Label>
            <Input
            id="color"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Введите цвет (например, Чёрный)"
            className={`w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2 ${errors.color ? 'border-red-500' : ''}`}
            />
            {errors.color && (
            <p className="text-red-500 text-xs mt-1">{errors.color}</p>
            )}
        </div>
        <div>
            <Label
            className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block"
            htmlFor="status"
            >
            Статус
            </Label>
            <Select onValueChange={setStatus} defaultValue={status}>
            <SelectTrigger
                id="status"
                className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            >
                <SelectValue placeholder="Выберите статус" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="available">В наличии</SelectItem>
                <SelectItem value="low">Мало</SelectItem>
                <SelectItem value="unavailable">Нет в наличии</SelectItem>
            </SelectContent>
            </Select>
        </div>
        <div>
            <Label
            className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block"
            htmlFor="stock"
            >
            Остаток
            </Label>
            <Input
            id="stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Введите количество на складе"
            className={`w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2 ${errors.stock ? 'border-red-500' : ''}`}
            />
            {errors.stock && (
            <p className="text-red-500 text-xs mt-1">{errors.stock}</p>
            )}
        </div>
        <div>
            <Label
            className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block"
            htmlFor="price"
            >
            Цена
            </Label>
            <Input
            id="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Введите цену (например, 12450 руб)"
            className={`w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2 ${errors.price ? 'border-red-500' : ''}`}
            />
            {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price}</p>
            )}
        </div>
        <div>
            <Label
            className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block"
            htmlFor="image"
            >
            Изображение
            </Label>
            <Input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Введите путь к изображению (например, /images/coat.png)"
            className={`w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2 ${errors.image ? 'border-red-500' : ''}`}
            />
            {errors.image && (
            <p className="text-red-500 text-xs mt-1">{errors.image}</p>
            )}
        </div>
        <div className="flex gap-4">
            <Button
            type="submit"
            className="bg-black text-white rounded-md px-6 py-2"
            >
            Сохранить
            </Button>
            <Link to="/products" className="text-blue-500 underline mt-2">
            Назад к товарам
            </Link>
        </div>
        </form>
    </CardContent>
    </Card>
</main>
);
}