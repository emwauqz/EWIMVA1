import React from "react";
import { NavLink } from 'react-router-dom';

export default function AdminSidebar(): JSX.Element {
const navItems = [
{ name: 'ДАШБОРД', icon: '/group.png', to: '/dashboard' },
{ name: 'ТОВАРЫ', icon: '/---icon--ad-product--1.png', to: '/products' },
{ name: 'ЗАКАЗЫ', icon: '/---icon--buy-.png', to: '/orders' },
{ name: 'ПОЛЬЗОВАТЕЛИ', icon: '/vector-4.svg', to: '/users' },
];

return (
<aside className="w-[250px] h-[calc(150vh-3.5rem)] bg-white border-r border-[#00000040] flex flex-col">
    <nav className="mt-[50px] flex flex-col">
    {navItems.map((item, index) => (
        <NavLink
        key={index}
        to={item.to}
        className={({ isActive }) =>
            `flex items-center py-2 px-8 font-bold ${isActive ? 'text-[#131313] border-l-4 border-[#131313] bg-[#f7f7f7]' : 'text-[#131313]'}`
        }
        >
        {item.icon === '/group.png' ? (
            <div className="w-[19px] h-[19px] mr-4 bg-[url(/group.png)] bg-[100%_100%]" />
        ) : (
            <img
            className={`w-5 h-5 mr-4`}
            alt={item.name}
            src={item.icon}
            />
        )}
        <span className="font-['Inter'] text-[12.7px]">
            {item.name}
        </span>
        </NavLink>
    ))}
    </nav>
</aside>
);
}


// import { Link } from 'react-router-dom';

// export default function AdminSidebar(): JSX.Element {
// const navItems = [
// { name: 'ДАШБОРД', icon: '/group.png', to: '/dashboard', active: true },
// { name: 'ТОВАРЫ', icon: '/---icon--ad-product--1.png', to: '/products', active: false },
// { name: 'ЗАКАЗЫ', icon: '/---icon--buy-.png', to: '/orders', active: false },
// { name: 'ПОЛЬЗОВАТЕЛИ', icon: '/vector-4.svg', to: '/users', active: false },
// ];

// return (
// <aside className="w-[254px] h-[calc(100vh-3.5rem)] bg-white border-r border-[#00000040] flex flex-col">
//     <nav className="mt-[50px] flex flex-col">
//     {navItems.map((item, index) => (
//         <Link
//         key={index}
//         to={item.to}
//         className={`flex items-center py-2 px-8 ${item.active ? 'font-bold underline' : 'font-bold'}`}
//         >
//         {item.icon === '/group.png' ? (
//             <div className="w-[19px] h-[19px] mr-4 bg-[url(/group.png)] bg-[100%_100%]" />
//         ) : item.icon === '/---icon--ad-product--1.png' ? (
//             <img
//             className="w-5 h-5 mr-4"
//             alt="Icon ad product"
//             src="/---icon--ad-product--1.png"
//             />
//         ) : item.icon === '/---icon--buy-.png' ? (
//             <img
//             className="w-[19px] h-[19px] mr-4"
//             alt="Icon buy"
//             src="/---icon--buy-.png"
//             />
//         ) : (
//             <img
//             className="w-[18px] h-[21px] mr-4"
//             alt="Vector"
//             src="/vector-4.svg"
//             />
//         )}
//         <span className="font-['Inter'] text-[#131313] text-[12.7px]">
//             {item.name}
//         </span>
//         </Link>
//     ))}
//     </nav>
// </aside>
// );
// }