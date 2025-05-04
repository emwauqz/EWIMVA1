// import React from "react";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbList,
//   BreadcrumbSeparator,
// } from "../../../../components/ui/breadcrumb";
// import { Button } from "../../../../components/ui/button";
// import { Input } from "../../../../components/ui/input";

// export const ViewByAnima = (): JSX.Element => {
//   // Breadcrumb items data
//   const breadcrumbItems = [
//     { label: "ЖЕНСКАЯ", bold: true },
//     { label: "ТОПЫ", bold: true },
//     { label: "ИЗ ТРИКОТАЖА", bold: true },
//   ];

//   // Footer links data
//   const footerLinks = [
//     { label: "ПОМОЩЬ", bold: true },
//     { label: "EWIMVA OUTLET", bold: true },
//     { label: "МОИ ПОКУПКИ", bold: true },
//     { label: "SITE MAP", bold: true },
//     { label: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ", bold: true },
//   ];

//   // Social media links data
//   const socialLinks = [
//     { label: "INSTAGRAM" },
//     { label: "FACEBOOK" },
//     { label: "TIKTOK" },
//     { label: "PINTEREST" },
//   ];

//   return (
//     <footer className="w-full bg-white py-12">
//       {/* Breadcrumb navigation */}
//       <div className="mx-8 mt-8">
//         <Breadcrumb>
//           <BreadcrumbList>
//             {breadcrumbItems.map((item, index) => (
//               <React.Fragment key={index}>
//                 {index > 0 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
//                 <BreadcrumbItem>
//                   <span
//                     className={`text-[#131313] text-[13px] ${item.bold ? "font-bold" : "font-normal"}`}
//                   >
//                     {item.label}
//                   </span>
//                 </BreadcrumbItem>
//               </React.Fragment>
//             ))}
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>

//       {/* Newsletter subscription section */}
//       <div className="mx-8 mt-24 flex flex-col items-center">
//         <div className="max-w-3xl text-center">
//           <p className="font-bold text-[#131313] text-[12.5px]">
//             ПОЛУЧАЙТЕ ИНФОРМАЦИЮ ОБ ЭКСКЛЮЗИВНЫХ АКЦИЯХ, ЗАКРЫТЫХ РАСПРОДАЖАХ И
//             НОВИНКАХ
//           </p>

//           <div className="mt-12 flex justify-center gap-2">
//             <Input
//               placeholder="E-mail"
//               className="w-[295px] h-11 border-[#b8b8b8] text-[13px] font-normal"
//             />
//             <Button
//               variant="outline"
//               className="w-[125px] h-11 border-[#131313] text-[#131313] font-bold text-[12.7px]"
//             >
//               Подписаться
//             </Button>
//           </div>

//           <div className="mt-10 text-[11.9px] text-[#131313] font-normal">
//             <span>Подписываясь, Вы подтверждаете, что ознакомились с</span>
//             <div className="font-bold text-[12.7px] text-[#131313]">
//               Политикой конфиденциальности
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer section */}
//       <div className="mt-24 w-full">
//         <div className="flex flex-col items-center">
//           {/* Country and social media */}
//           <div className="mb-14">
//             <div className="text-center mb-16">
//               <span className="font-bold text-black text-[12.7px]">
//                 КЫРГЫЗСТАН
//               </span>
//             </div>

//             <div className="flex gap-16">
//               {socialLinks.map((link, index) => (
//                 <span
//                   key={index}
//                   className="font-normal text-[#131313] text-[13px] cursor-pointer"
//                 >
//                   {link.label}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Links section */}
//           <div className="flex gap-8 mb-16">
//             {footerLinks.map((link, index) => (
//               <React.Fragment key={index}>
//                 {index > 0 && <div className="mx-4"></div>}
//                 <span className="font-bold text-black text-[12.8px] cursor-pointer">
//                   {link.label}
//                 </span>
//               </React.Fragment>
//             ))}
//           </div>

//           {/* Copyright */}
//           <div className="text-[12.3px] font-normal text-[#131313]">
//             © 2025 EWIMVA Все права защищены
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
