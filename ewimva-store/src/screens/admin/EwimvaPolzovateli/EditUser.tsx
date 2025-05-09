import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
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

// Пример данных пользователя
const users = [
{
id: 'USR-1001',
name: 'Анна Смирнова',
email: 'anna.smirnova@example.com',
role: 'customer',
status: 'active',
lastActivity: '25.04.2025',
orders: 5,
},
{
id: 'USR-1002',
name: 'Михаил Иванов',
email: 'mikhail.ivanov@example.com',
role: 'customer',
status: 'inactive',
lastActivity: '20.04.2025',
orders: 2,
},
{
id: 'USR-1003',
name: 'Елена Сидорова',
email: 'elena.sidorova@example.com',
role: 'admin',
status: 'active',
lastActivity: '28.04.2025',
orders: 0,
},
{
id: 'USR-1004',
name: 'Дмитрий Козлов',
email: 'dmitry.kozlov@example.com',
role: 'customer',
status: 'active',
lastActivity: '22.04.2025',
orders: 3,
},
{
id: 'USR-1005',
name: 'Ольга Новикова',
email: 'olga.novikova@example.com',
role: 'customer',
status: 'inactive',
lastActivity: '15.04.2025',
orders: 1,
},
];

export default function EditUser(): JSX.Element {
const { id } = useParams();
const user = users.find((u) => u.id === id);
const navigate = useNavigate();

const [name, setName] = useState(user?.name || '');
const [email, setEmail] = useState(user?.email || '');
const [role, setRole] = useState(user?.role || 'customer');
const [status, setStatus] = useState(user?.status || 'active');

if (!user) {
return <div>Пользователь не найден</div>;
}

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Здесь можно добавить логику сохранения изменений (например, API-запрос)
console.log({ id, name, email, role, status });
alert('Пользователь обновлён! (Это имитация)');
navigate('/users');
};

return (
<main className="flex-1 p-8">
    <Card className="border border-solid border-[#00000040] rounded-[10px]">
    <CardHeader>
        <CardTitle className="font-['Inter'] font-semibold text-[#131313] text-[40px] mb-12">
        Редактировать пользователя #{user.id}
        </CardTitle>
    </CardHeader>
    <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Имя
            </label>
            <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Email
            </label>
            <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email"
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Роль
            </label>
            <Select onValueChange={setRole} defaultValue={role}>
            <SelectTrigger className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2">
                <SelectValue placeholder="Выберите роль" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="admin">Администратор</SelectItem>
                <SelectItem value="customer">Клиент</SelectItem>
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
                <SelectItem value="active">Активен</SelectItem>
                <SelectItem value="inactive">Неактивен</SelectItem>
            </SelectContent>
            </Select>
        </div>
        <div className="flex gap-4">
            <Button
            type="submit"
            className="bg-black text-white rounded-md px-6 py-2"
            >
            Сохранить
            </Button>
            <Link to="/users" className="text-blue-500 underline mt-2">
            Назад к пользователям
            </Link>
        </div>
        </form>
    </CardContent>
    </Card>
</main>
);
}