// import React from "react";
// import { Button } from "../../../../components/ui/button";
// import { Input } from "../../../../components/ui/input";
// import { Separator } from "../../../../components/ui/separator";

// export const ViewByAnima = (): JSX.Element => {
//   // Footer navigation links data
//   const footerLinks = {
//     help: "ПОМОЩЬ",
//     outlet: "EWIMVA OUTLET",
//     purchases: "МОИ ПОКУПКИ",
//     siteMap: "SITE MAP",
//     privacy: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
//   };

//   // Social media links
//   const socialLinks = [
//     { name: "INSTAGRAM", position: "left-0" },
//     { name: "FACEBOOK", position: "left-[150px]" },
//     { name: "TIKTOK", position: "left-[296px]" },
//     { name: "PINTEREST", position: "left-[416px]" },
//   ];

//   return (
//     <footer className="w-full bg-white py-8">
//       {/* Newsletter subscription section */}
//       <div className="mx-auto max-w-[1862px] mb-16">
//         <div className="flex flex-col items-center justify-center">
//           <p className="font-bold text-[12.5px] text-center text-[#131313] mb-8">
//             ПОЛУЧАЙТЕ ИНФОРМАЦИЮ ОБ ЭКСКЛЮЗИВНЫХ АКЦИЯХ, ЗАКРЫТЫХ РАСПРОДАЖАХ И
//             НОВИНКАХ
//           </p>

//           <div className="flex items-center justify-center gap-2">
//             <Input
//               placeholder="E-mail"
//               className="w-[295px] h-11 border-[#b8b8b8] text-[13px] rounded-none"
//             />
//             <Button
//               className="w-[125px] h-11 bg-white text-[#131313] border border-solid border-[#131313] rounded-none font-bold text-[12.7px]"
//               variant="outline"
//             >
//               Подписаться
//             </Button>
//           </div>

//           <div className="mt-10 text-center">
//             <p className="text-[11.9px] text-[#131313]">
//               Подписываясь, Вы подтверждаете, что ознакомились с
//             </p>
//             <p className="font-bold text-[12.7px] text-[#131313]">
//               Политикой конфиденциальности
//             </p>
//           </div>
//         </div>
//       </div>

//       <Separator className="bg-gray-100" />

//       {/* Main footer section */}
//       <div className="mx-auto max-w-[1920px] pt-8">
//         {/* Country and social media section */}
//         <div className="flex flex-col items-center mb-16">
//           <p className="font-bold text-[12.7px] text-black mb-16">КЫРГЫЗСТАН</p>

//           <div className="relative w-[499px] h-[18px]">
//             {socialLinks.map((link) => (
//               <div
//                 key={link.name}
//                 className={`absolute font-normal text-[13px] text-[#131313] ${link.position}`}
//               >
//                 {link.name}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer links */}
//         <div className="flex justify-center gap-8 mb-16">
//           <p className="font-bold text-black text-[12.6px]">
//             {footerLinks.help}
//           </p>
//           <p className="font-semibold text-black text-[12.8px]">
//             {footerLinks.outlet}
//           </p>
//           <p className="font-bold text-black text-[12.2px]">
//             {footerLinks.purchases}
//           </p>
//           <p className="font-semibold text-black text-[12.9px]">
//             {footerLinks.siteMap}
//           </p>
//           <p className="font-bold text-black text-[12.2px]">
//             {footerLinks.privacy}
//           </p>
//         </div>

//         {/* Copyright */}
//         <div className="flex justify-center pb-8">
//           <p className="font-normal text-[12.3px] text-[#131313]">
//             © 2025 EWIMVA Все права защищены
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };
