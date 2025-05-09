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

export default function AddProduct(): JSX.Element {
const [name, setName] = useState('');
const [category, setCategory] = useState('Одежда');
const [status, setStatus] = useState('available');
const [stock, setStock] = useState('');
const [price, setPrice] = useState('');
const navigate = useNavigate();

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Здесь можно добавить логику сохранения товара (например, API-запрос)
console.log({ name, category, status, stock, price });
alert('Товар добавлен! (Это имитация)');
navigate('/products');
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
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Название
            </label>
            <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите название товара"
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Категория
            </label>
            <Select onValueChange={setCategory} defaultValue={category}>
            <SelectTrigger className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2">
                <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Одежда">Одежда</SelectItem>
                <SelectItem value="Обувь">Обувь</SelectItem>
                <SelectItem value="Аксессуары">Аксессуары</SelectItem>
            </SelectContent>
            </Select>
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Статус
            </label>
            <Select onValueChange={setStatus} defaultValue={status}>
            <SelectTrigger className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2">
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
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Остаток
            </label>
            <Input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Введите количество на складе"
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Цена
            </label>
            <Input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Введите цену"
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
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