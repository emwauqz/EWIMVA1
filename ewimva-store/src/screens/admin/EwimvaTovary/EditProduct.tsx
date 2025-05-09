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
import { Badge } from '../../../components/ui/badge';

const products = [
{
id: 1,
name: 'Костюмный блейзер из смесового льна с поясом',
category: 'Одежда',
status: 'available',
stock: 30,
price: '12 450 с',
},
{
id: 2,
name: 'Замшевый ремень',
category: 'Аксессуары',
status: 'available',
stock: 15,
price: '5 000 с',
},
];

export default function EditProduct(): JSX.Element {
const { id } = useParams<{ id: string }>();
const navigate = useNavigate();
const [product, setProduct] = useState(products.find((p) => p.id === Number(id)) || {
id: 0, name: '', category: '', status: '', stock: 0, price: '',
});
const [name, setName] = useState(product.name);
const [category, setCategory] = useState(product.category);
const [status, setStatus] = useState(product.status);
const [stock, setStock] = useState(product.stock.toString());
const [price, setPrice] = useState(product.price);

useEffect(() => {
const foundProduct = products.find((p) => p.id === Number(id));
if (foundProduct) {
    setProduct(foundProduct);
    setName(foundProduct.name);
    setCategory(foundProduct.category);
    setStatus(foundProduct.status);
    setStock(foundProduct.stock.toString());
    setPrice(foundProduct.price);
}
}, [id]);

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Имитация обновления товара
console.log({ id: product.id, name, category, status, stock, price });
alert('Товар обновлён! (Это имитация)');
navigate('/products');
};

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
            <Select onValueChange={setCategory} value={category}>
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
            <Select onValueChange={setStatus} value={status}>
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