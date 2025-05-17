import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
import { Product, getProducts, updateProduct } from '../../../data/productsData';

export default function EditProduct(): JSX.Element {
const { id } = useParams<{ id: string }>();
const navigate = useNavigate();
const [product, setProduct] = useState<Product | null>(null);
const [name, setName] = useState('');
const [category, setCategory] = useState('');
const [status, setStatus] = useState<'available' | 'low' | 'unavailable'>('available');
const [stock, setStock] = useState('');
const [price, setPrice] = useState('');
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
const fetchProduct = async () => {
    try {
    const products = await getProducts();
    const foundProduct = products.find((p) => p.id === Number(id));
    if (foundProduct) {
        setProduct(foundProduct);
        setName(foundProduct.name);
        setCategory(foundProduct.category);
        setStatus(foundProduct.status || 'available');
        setStock(foundProduct.stock?.toString() || '0');
        setPrice(foundProduct.price);
    } else {
        setError('Товар не найден');
    }
    setLoading(false);
    } catch (err) {
    setError('Не удалось загрузить товар');
    setLoading(false);
    }
};
fetchProduct();
}, [id]);

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
if (!product) return;

try {
    await updateProduct({
    ...product,
    name,
    category,
    status,
    stock: Number(stock),
    price,
    });
    alert('Товар обновлён!');
    navigate('/products');
} catch (err) {
    alert('Не удалось обновить товар');
}
};

if (loading) {
return <div className="flex-1 p-8">Загрузка...</div>;
}

if (error || !product) {
return <div className="flex-1 p-8 text-red-500">{error || 'Товар не найден'}</div>;
}

return (
<main className="flex-1 p-8">
    <Card className="border border-solid border-[#00000040] rounded-[10px]">
    <CardHeader>
        <CardTitle className="font-['Inter'] font-semibold text-[#131313] text-[40px] mb-12">
        Редактировать товар #{product.id}
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
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Категория
            </label>
            <Select onValueChange={(value: string) => setCategory(value)} value={category}>
            <SelectTrigger className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2">
                <SelectValue />
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
            <Select onValueChange={(value: 'available' | 'low' | 'unavailable') => setStatus(value)} value={status}>
            <SelectTrigger className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2">
                <SelectValue />
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
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div className="flex gap-4">
            <Button type="submit" className="bg-black text-white rounded-md px-6 py-2">
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