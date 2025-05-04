// import React from "react";
// import { Button } from "../../../../components/ui/button";
// import { Input } from "../../../../components/ui/input";

// export const ViewByAnima = (): JSX.Element => {
//   const footerLinks = [
//     { text: "ПОМОЩЬ", isBold: true },
//     { text: "EWIMVA OUTLET", isBold: false },
//     { text: "МОИ ПОКУПКИ", isBold: true },
//     { text: "SITE MAP", isBold: false },
//     { text: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ", isBold: true },
//   ];

//   const socialLinks = [
//     { text: "INSTAGRAM" },
//     { text: "FACEBOOK" },
//     { text: "TIKTOK" },
//     { text: "PINTEREST" },
//   ];

//   return (
//     <section className="w-full bg-white py-16">
//       {/* Newsletter Subscription */}
//       <div className="max-w-[1862px] mx-auto mb-16">
//         <div className="flex flex-col items-center justify-center">
//           <h3 className="font-bold text-[12.5px] text-center text-[#131313] mb-8">
//             ПОЛУЧАЙТЕ ИНФОРМАЦИЮ ОБ ЭКСКЛЮЗИВНЫХ АКЦИЯХ, ЗАКРЫТЫХ РАСПРОДАЖАХ И
//             НОВИНКАХ
//           </h3>

//           <div className="flex items-center gap-2">
//             <Input
//               placeholder="E-mail"
//               className="w-[295px] h-11 border-[#b8b8b8] text-[13px] font-normal text-[#131313]"
//             />
//             <Button
//               variant="outline"
//               className="w-[125px] h-11 border-[#131313] font-bold text-[12.7px] text-[#131313]"
//             >
//               Подписаться
//             </Button>
//           </div>

//           <div className="mt-4 text-center">
//             <p className="text-[11.9px] font-normal text-[#131313]">
//               Подписываясь, Вы подтверждаете, что ознакомились с
//             </p>
//             <p className="text-[12.7px] font-bold text-[#131313]">
//               Политикой конфиденциальности
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="w-full bg-white">
//         <div className="max-w-[1862px] mx-auto">
//           {/* Country Selection */}
//           <div className="flex justify-center mb-12">
//             <p className="font-bold text-[12.7px] text-black">КЫРГЫЗСТАН</p>
//           </div>

//           {/* Social Media Links */}
//           <div className="flex justify-center gap-16 mb-16">
//             {socialLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="font-normal text-[13px] text-[#131313]"
//               >
//                 {link.text}
//               </a>
//             ))}
//           </div>

//           {/* Footer Links */}
//           <div className="flex justify-center gap-8 mb-16">
//             {footerLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className={`${link.isBold ? "font-bold" : "font-normal"} text-[12.8px] text-black`}
//               >
//                 {link.text}
//               </a>
//             ))}
//           </div>

//           {/* Copyright */}
//           <div className="text-center">
//             <p className="font-normal text-[12.3px] text-[#131313]">
//               © 2025 EWIMVA Все права защищены
//             </p>
//           </div>
//         </div>
//       </footer>
//     </section>
//   );
// };
