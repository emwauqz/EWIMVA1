// import React from "react";
// import { Button } from "../../../../components/ui/button";
// import { Input } from "../../../../components/ui/input";
// import { Separator } from "../components/ui/separator";

// const Footer = (): JSX.Element => {
// const footerLinks = [
// { category: "ПОМОЩЬ", links: [] },
// { category: "EWIMVA OUTLET", links: [] },
// { category: "МОИ ПОКУПКИ", links: [] },
// { category: "NEW NOW", links: [] },
// { category: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ", links: [] },
// ];

// const socialLinks = [
// { name: "INSTAGRAM", url: "#" },
// { name: "FACEBOOK", url: "#" },
// { name: "TIKTOK", url: "#" },
// { name: "PINTEREST", url: "#" },
// ];

// const footerCategories = [
// "Платья и комбинезоны", "Брюки", "Джинсы", "Куртки", "Блейзеры", "Рубашки и блузки", "Топы",
// "Джемперы и кардиганы", "Тренчи и парки", "Юбки", "Жилеты", "Футболки", "Пальто", "Шорты",
// "Купальники", "Пижамы", "Кожа", "Обувь", "Сумки", "Бижутерия", "Ремни", "Кошельки и бумажники",
// "Шарфы и платки", "Шапки и перчатки", "Солнцезащитные очки", "Больше аксессуаров", "Ароматы", "Кожаные аксессуары"
// ];

// return (
// <footer className="w-full bg-white py-8">
//     <div className="mx-auto max-w-7xl px-4 mb-12">
//     <div className="flex flex-col items-center justify-center">
//         <p className="font-bold text-[12.5px] text-center text-[#131313] mb-6">
//         ПОЛУЧАЙТЕ ИНФОРМАЦИЮ ОБ ЭКСКЛЮЗИВНЫХ АКЦИЯХ, ЗАКРЫТЫХ РАСПРОДАЖАХ И НОВИНКАХ
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 items-center">
//         <Input
//             placeholder="E-mail"
//             className="w-[295px] h-11 border-[#b8b8b8] text-[13px]"
//         />
//         <Button
//             variant="outline"
//             className="w-[125px] h-11 border-[#131313] font-bold text-[12.7px] text-[#131313]"
//         >
//             Подписаться
//         </Button>
//         </div>

//         <div className="mt-4 text-center">
//         <p className="text-[11.9px] text-[#131313] font-normal">
//             Подписываясь, Вы подтверждаете, что ознакомились с
//         </p>
//         <p className="font-bold text-[12.7px] text-[#131313]">
//             Политикой конфиденциальности
//         </p>
//         </div>
//     </div>
//     </div>

//     {/* Горизонтальный scroll с категориями */}
//     <div className="w-full overflow-x-auto whitespace-nowrap border-t border-b py-4 px-4 mb-8">
//     <div className="inline-flex gap-6 min-w-max">
//         {footerCategories.map((item, index) => (
//         <a
//             key={index}
//             href="#"
//             className="text-[13px] text-[#131313] whitespace-nowrap hover:underline"
//         >
//             {item}
//         </a>
//         ))}
//     </div>
//     </div>

//     <Separator className="bg-gray-100" />

//     <div className="mx-auto max-w-7xl px-4 pt-8">
//     <div className="flex justify-center mb-16">
//         <p className="font-bold text-[12.7px] text-black">КЫРГЫЗСТАН</p>
//     </div>

//     <div className="flex justify-center gap-12 mb-16">
//         {socialLinks.map((social, index) => (
//         <a
//             key={index}
//             href={social.url}
//             className="font-normal text-[13px] text-[#131313]"
//         >
//             {social.name}
//         </a>
//         ))}
//     </div>

//     <div className="flex flex-wrap justify-center gap-8 mb-16">
//         {footerLinks.map((category, index) => (
//         <a
//             key={index}
//             href="#"
//             className={`text-black text-[12.8px] ${
//             index === 0 || index === 2 || index === 4
//                 ? "font-bold"
//                 : "font-semibold"
//             }`}
//         >
//             {category.category}
//         </a>
//         ))}
//     </div>

//     <div className="text-center pb-4">
//         <p className="font-normal text-[12.3px] text-[#131313]">
//         © 2025 EWIMVA Все права защищены
//         </p>
//     </div>
//     </div>
// </footer>
// );
// };

// export default Footer;


// // import React from "react";
// // import { Button } from "../components/ui/button";
// // import { Input } from "../components/ui/input";
// // import { Separator } from "../components/ui/separator";

// // const Footer = (): JSX.Element => {
// // const footerLinks = [
// // { category: "ПОМОЩЬ", links: [] },
// // { category: "EWIMVA OUTLET", links: [] },
// // { category: "МОИ ПОКУПКИ", links: [] },
// // { category: "NEW NOW", links: [] },
// // { category: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ", links: [] },
// // ];

// // const socialLinks = [
// // { name: "INSTAGRAM", url: "#" },
// // { name: "FACEBOOK", url: "#" },
// // { name: "TIKTOK", url: "#" },
// // { name: "PINTEREST", url: "#" },
// // ];

// // return (
// // <footer className="w-full bg-white py-8">
// //     <div className="mx-auto max-w-7xl px-4 mb-12">
// //     <div className="flex flex-col items-center justify-center">
// //         <p className="font-bold text-[12.5px] text-center text-[#131313] mb-6">
// //         ПОЛУЧАЙТЕ ИНФОРМАЦИЮ ОБ ЭКСКЛЮЗИВНЫХ АКЦИЯХ, ЗАКРЫТЫХ РАСПРОДАЖАХ И
// //         НОВИНКАХ
// //         </p>

// //         <div className="flex flex-col sm:flex-row gap-4 items-center">
// //         <Input
// //             placeholder="E-mail"
// //             className="w-[295px] h-11 border-[#b8b8b8] text-[13px]"
// //         />
// //         <Button
// //             variant="outline"
// //             className="w-[125px] h-11 border-[#131313] font-bold text-[12.7px] text-[#131313]"
// //         >
// //             Подписаться
// //         </Button>
// //         </div>

// //         <div className="mt-4 text-center">
// //         <p className="text-[11.9px] text-[#131313] font-normal">
// //             Подписываясь, Вы подтверждаете, что ознакомились с
// //         </p>
// //         <p className="font-bold text-[12.7px] text-[#131313]">
// //             Политикой конфиденциальности
// //         </p>
// //         </div>
// //     </div>
// //     </div>

// //     <Separator className="bg-gray-100" />

// //     <div className="mx-auto max-w-7xl px-4 pt-8">
// //     <div className="flex justify-center mb-16">
// //         <p className="font-bold text-[12.7px] text-black">КЫРГЫЗСТАН</p>
// //     </div>

// //     <div className="flex justify-center gap-12 mb-16">
// //         {socialLinks.map((social, index) => (
// //         <a
// //             key={index}
// //             href={social.url}
// //             className="font-normal text-[13px] text-[#131313]"
// //         >
// //             {social.name}
// //         </a>
// //         ))}
// //     </div>

// //     <div className="flex flex-wrap justify-center gap-8 mb-16">
// //         {footerLinks.map((category, index) => (
// //         <a
// //             key={index}
// //             href="#"
// //             className={`text-black text-[12.8px] ${
// //             index === 0 || index === 2 || index === 4
// //                 ? "font-bold"
// //                 : "font-semibold"
// //             }`}
// //         >
// //             {category.category}
// //         </a>
// //         ))}
// //     </div>

// //     <div className="text-center pb-4">
// //         <p className="font-normal text-[12.3px] text-[#131313]">
// //         © 2025 EWIMVA Все права защищены
// //         </p>
// //     </div>
// //     </div>
// // </footer>
// // );
// // };

// // export default Footer;
