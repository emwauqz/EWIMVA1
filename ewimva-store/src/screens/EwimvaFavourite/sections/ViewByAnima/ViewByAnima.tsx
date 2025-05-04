// import React from "react";
// import { Button } from "../../../../components/ui/button";
// import { Input } from "../../../../components/ui/input";
// import { Separator } from "../../../../components/ui/separator";

// export const ViewByAnima = (): JSX.Element => {
//   const footerLinks = [
//     { category: "ПОМОЩЬ", links: [] },
//     { category: "EWIMVA OUTLET", links: [] },
//     { category: "МОИ ПОКУПКИ", links: [] },
//     { category: "SITE MAP", links: [] },
//     { category: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ", links: [] },
//   ];

//   const socialLinks = [
//     { name: "INSTAGRAM", url: "#" },
//     { name: "FACEBOOK", url: "#" },
//     { name: "TIKTOK", url: "#" },
//     { name: "PINTEREST", url: "#" },
//   ];

//   return (
//     <footer className="w-full bg-white py-8">
//       {/* Newsletter Subscription */}
//       <div className="mx-auto max-w-7xl px-4 mb-12">
//         <div className="flex flex-col items-center justify-center">
//           <p className="font-bold text-[12.5px] text-center text-[#131313] mb-6">
//             ПОЛУЧАЙТЕ ИНФОРМАЦИЮ ОБ ЭКСКЛЮЗИВНЫХ АКЦИЯХ, ЗАКРЫТЫХ РАСПРОДАЖАХ И
//             НОВИНКАХ
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 items-center">
//             <Input
//               placeholder="E-mail"
//               className="w-[295px] h-11 border-[#b8b8b8] text-[13px]"
//             />
//             <Button
//               variant="outline"
//               className="w-[125px] h-11 border-[#131313] font-bold text-[12.7px] text-[#131313]"
//             >
//               Подписаться
//             </Button>
//           </div>

//           <div className="mt-4 text-center">
//             <p className="text-[11.9px] text-[#131313] font-normal">
//               Подписываясь, Вы подтверждаете, что ознакомились с
//             </p>
//             <p className="font-bold text-[12.7px] text-[#131313]">
//               Политикой конфиденциальности
//             </p>
//           </div>
//         </div>
//       </div>

//       <Separator className="bg-gray-100" />

//       {/* Main Footer */}
//       <div className="mx-auto max-w-7xl px-4 pt-8">
//         {/* Country Selection */}
//         <div className="flex justify-center mb-16">
//           <p className="font-bold text-[12.7px] text-black">КЫРГЫЗСТАН</p>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center gap-12 mb-16">
//           {socialLinks.map((social, index) => (
//             <a
//               key={index}
//               href={social.url}
//               className="font-normal text-[13px] text-[#131313]"
//             >
//               {social.name}
//             </a>
//           ))}
//         </div>

//         {/* Footer Navigation */}
//         <div className="flex flex-wrap justify-center gap-8 mb-16">
//           {footerLinks.map((category, index) => (
//             <a
//               key={index}
//               href="#"
//               className={`text-black text-[12.8px] ${
//                 index === 0 || index === 2 || index === 4
//                   ? "font-bold"
//                   : "font-semibold"
//               }`}
//             >
//               {category.category}
//             </a>
//           ))}
//         </div>

//         {/* Copyright */}
//         <div className="text-center pb-4">
//           <p className="font-normal text-[12.3px] text-[#131313]">
//             © 2025 EWIMVA Все права защищены
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };
